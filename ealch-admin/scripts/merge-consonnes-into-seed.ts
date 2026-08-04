// Merge the consonnes corpus and the sons respell backfill into seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-consonnes-corpus-batch.ts writes to POSTGRES, which is the source of
// truth, and `pnpm content:publish` then regenerates seed.json from it. That is
// the correct pipeline and this script does not replace it.
//
// But the app's tests read seed.json, not Postgres. Until someone with database
// access runs the batch and publishes, none of this content would be visible to
// the corpus tests that gate every push.
//
//   author-consonnes-corpus-batch.ts → Postgres   (needs DATABASE_URL)
//   merge-consonnes-into-seed.ts     → seed.json  (no DB, runs anywhere)
//
// ── The hazard this script is careful about (incidents 2026-07-31, 08-02) ──
//
// Writing seed.json directly makes git run AHEAD of Postgres. publish-content
// reads Postgres as the source of truth and rewrites seed.json from it, so a
// publish that happens BEFORE the batch has been applied will silently delete
// this content. That is not hypothetical: it is what happened to sons.03.l1 (20
// sections collapsed to 6), and a concurrent run of a sibling script once wrote
// back a seed that had lost the 72 elision items.
//
// The rule, therefore: run the batch too. This script prints that reminder
// every time, refuses to shrink the seed, and refuses to overwrite a respell
// somebody else authored in between.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-consonnes-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-consonnes-into-seed.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { formatIssues, validateItem, type Item, type Lesson, type Unit } from '../../ealch-v2/src/content/schema.ts';
import { hasPlainNasal, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { CONSONNES, toItem } from './data/consonnes-corpus.ts';
import { SONS_RESPELL, SONS_RESPELL_COUNT } from './data/sons-respell-backfill.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

type Seed = {
  items: Item[];
  lessons: Lesson[];
  units: Unit[];
  [k: string]: unknown;
};

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const NEW_ITEMS = CONSONNES.map(toItem);

/** The themes the backfill may touch. Every other sons theme is already at or
 *  near full coverage; a key outside these is a typo, not a decision. */
const BACKFILL_THEMES = new Set(['nasales', 'voyelles', 'alphabet']);

/** The four French nasal vowels in IPA: a vowel carrying the combining tilde. */
const NASAL_IPA = /[ɔɑɛœ]̃/gu;

const nasalCount = (ipa: string) => (ipa.match(NASAL_IPA) ?? []).length;
const superscriptCount = (respell: string) => (respell.match(/ⁿ/gu) ?? []).length;

// ── Never shrink the seed (incident 2026-08-02) ────────────────────────────
//
// This script merges: it adds its own items, fills blank respells, and leaves
// everything else alone. So the item and lesson counts can only ever go UP (or
// hold), and a run that would reduce either means the file changed underneath
// it. Checked against what is on disk RIGHT NOW rather than a remembered count,
// because the whole failure mode is acting on a stale read.
const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const LESSON_COUNT = seed.lessons.length;

// ── Validate before writing anything ────────────────────────────────────────

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

const reserved = ids.filter((id) => {
  const n = Number(id.split('.').pop());
  return Number.isFinite(n) && n <= 10;
});
if (reserved.length) die(`batch redefines already-shipped ids 001-010:\n  ${reserved.join('\n  ')}`);

if (NEW_ITEMS.some((i) => i.theme !== 'consonnes' || i.level !== 'sons')) {
  die('every new item must be level "sons", theme "consonnes"');
}

const badIpa = NEW_ITEMS.filter((i) => i.ipa && !/^\/.*\/$/.test(i.ipa));
if (badIpa.length) die(`IPA must sit in slashes:\n  ${badIpa.map((i) => `${i.id} "${i.ipa}"`).join('\n  ')}`);

const nasalTrap = NEW_ITEMS.filter(
  (i) => i.respell && (hasPlainNasal(i.respell) || hasPlainNasalFor(i.fr, i.respell))
);
if (nasalTrap.length) {
  die(`nasal closed with a plain n or m, use the superscript ⁿ:\n  ${nasalTrap.map((i) => `${i.id} ${i.fr} "${i.respell}"`).join('\n  ')}`);
}

// ── The backfill map ────────────────────────────────────────────────────────

const backfillIds = Object.keys(SONS_RESPELL);
if (backfillIds.length !== SONS_RESPELL_COUNT) {
  die(`backfill map holds ${backfillIds.length} rows, its own count says ${SONS_RESPELL_COUNT}`);
}

const offTheme = backfillIds.filter((id) => !BACKFILL_THEMES.has(id.split('.')[2]));
if (offTheme.length) die(`backfill touches themes outside the audit's scope:\n  ${offTheme.join('\n  ')}`);

const seedById = new Map(seed.items.map((i) => [i.id, i]));

const unknown = backfillIds.filter((id) => !seedById.has(id));
if (unknown.length) {
  die(`backfill names items that are not in the seed:\n  ${unknown.slice(0, 20).join('\n  ')}${unknown.length > 20 ? `\n  ... and ${unknown.length - 20} more` : ''}`);
}

// This pass FILLS BLANKS. A row that already carries a respell means someone
// authored one in between, and overwriting it would discard their work exactly
// the way the seed-direct incident discarded lessons.
const occupied = backfillIds.filter((id) => {
  const r = seedById.get(id)?.respell;
  return r != null && r !== '';
});
if (occupied.length) {
  die(
    `these rows already carry a respell, refusing to overwrite:\n  ` +
    occupied.slice(0, 20).map((id) => `${id} "${seedById.get(id)?.respell}"`).join('\n  ') +
    (occupied.length > 20 ? `\n  ... and ${occupied.length - 20} more` : '') +
    `\n\nRe-derive the map from a fresh seed before running this.`
  );
}

// The precise nasal check, using each row's own French spelling. [OM] is right
// for `homme` and wrong for `bon`, and the respelling alone cannot tell those
// apart.
// Nasals are checked by COUNT PARITY against each row's own IPA, not with
// `hasPlainNasalFor`. That helper decides from the French SPELLING, which
// cannot separate a nasal vowel from a pronounced consonant: it fires on 34
// correct rows in this map (comme KOM, meme MEHM, deuxieme ZYEHM, jaune ZHOHN,
// automne oh-TON, Wassim wa-SEEM, and the spelled letters M and N). Its own
// source comment records the same false positive for aime and scene, and
// asserting it would demand ZHOHⁿ for `jaune`, teaching the exact error the
// convention exists to prevent, inverted.
//
// The IPA is the authority the spelling lacks, and it is already correct on
// every one of these rows. The rule is therefore exact in both directions: as
// many superscripts as nasal vowels, no more and no fewer. A missed nasal and
// an invented one both fail, and no allowlist is needed.
const nasalMismatch = backfillIds.filter((id) => {
  const ipa = seedById.get(id)?.ipa;
  return ipa ? nasalCount(ipa) !== superscriptCount(SONS_RESPELL[id]) : false;
});
if (nasalMismatch.length) {
  die(
    `superscript count must equal the IPA's nasal-vowel count:\n  ` +
    nasalMismatch.slice(0, 20).map((id) => {
      const r = seedById.get(id)!;
      return `${id} "${r.fr}"\n     ipa(${nasalCount(r.ipa ?? '')}): ${r.ipa}\n     re (${superscriptCount(SONS_RESPELL[id])}): ${SONS_RESPELL[id]}`;
    }).join('\n  ')
  );
}

// Bare `hasPlainNasal` is NOT used here. It cannot see the French spelling, so
// it fires on every genuinely pronounced consonant: jaune ZHOHN, meme MEHM,
// Etienne ay-TYEHN. Thirty rows in this map are that shape and all are correct
// French. The paired check above is the one that can tell them apart, and it
// is the one that decides.
const badBackfill = Object.entries(SONS_RESPELL).filter(([, r]) => r.includes('[') || !r.trim());
if (badBackfill.length) {
  die(`backfill respell must be bare and non-empty:\n  ${badBackfill.map(([id, r]) => `${id} "${r}"`).join('\n  ')}`);
}

const authored = JSON.stringify({ NEW_ITEMS, SONS_RESPELL });
if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

// ── Merge, idempotent by id ─────────────────────────────────────────────────

const byId = new Map(seed.items.map((i) => [i.id, i]));

let added = 0;
let updated = 0;
for (const it of NEW_ITEMS) {
  if (byId.has(it.id)) updated++;
  else added++;
  byId.set(it.id, it);
}

let filled = 0;
for (const [id, respell] of Object.entries(SONS_RESPELL)) {
  const row = byId.get(id);
  if (!row) continue;
  byId.set(id, { ...row, respell });
  filled++;
}

const nextItems = [...byId.values()];
const next: Seed = { ...seed, items: nextItems };

// The guard described above. A merge that drops somebody else's content is a
// bug in this script, not an outcome to confirm, so it dies rather than asking.
const keptItems = nextItems.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
if (keptItems < OTHER_ITEMS || next.lessons.length < LESSON_COUNT) {
  die(
    `this merge would DROP content that is not its own:\n` +
    `  other items: ${OTHER_ITEMS} -> ${keptItems}\n` +
    `  lessons:     ${LESSON_COUNT} -> ${next.lessons.length}\n` +
    `  Something rewrote seed.json underneath this run. Re-run it; do not force it.`
  );
}

if (filled !== backfillIds.length) {
  die(`backfill filled ${filled} of ${backfillIds.length} rows`);
}

const consonnesTotal = nextItems.filter((i) => i.theme === 'consonnes').length;
const stillBlank = nextItems.filter(
  (i) => i.level === 'sons' && BACKFILL_THEMES.has(i.theme) && !i.respell
).length;

console.log(`\n  items:   ${seed.items.length} -> ${nextItems.length}  (+${added} new, ${updated} updated)`);
console.log(`  respell: ${filled} blanks filled`);
console.log(`  consonnes theme: 10 -> ${consonnesTotal}`);
console.log(`  sons nasales/voyelles/alphabet still missing a respell: ${stillBlank}`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, `${JSON.stringify(next, null, 2)}\n`, 'utf8');

console.log(`\n✓ seed.json updated.`);
console.log(`\n  This wrote GIT ONLY. Postgres does not have this content yet.`);
console.log(`  Run \`pnpm content:consonnes\` against the database before anyone runs`);
console.log(`  \`pnpm content:publish\`, or the publish will overwrite seed.json from a`);
console.log(`  database that never received it and this content will vanish.\n`);
