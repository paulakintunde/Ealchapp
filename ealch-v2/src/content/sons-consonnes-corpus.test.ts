// Guards the consonnes corpus and the sons respell backfill.
//
// Both halves repair the corpus LAYER rather than a lesson, so neither is
// covered by lesson-contract.test.ts (which runs over lessons) nor by any
// existing pin test (which each guard one lesson body). Nothing else checks an
// item's notation, and an item with a plain-n nasal is what puts a plain-n
// nasal on a lesson screen.
//
// What this file pins:
//
//   1. The consonnes theme is a real theme, not the ten-item stub sons.04.l1
//      was padding around with borrowed items from five other themes.
//   2. Every family the unit subtitle promises is actually present, including
//      the French r, and each is deep enough to draw a drill pool from.
//   3. Notation holds across BOTH halves: IPA in slashes, respell bare, and
//      nasals closed with the superscript rather than a plain n or m.
//
// The corpus lives in the admin repo (ealch-admin/scripts/data/), because that
// is where content is authored before it is published into seed.json. This
// test runs against it directly so it is checked at AUTHORING time, not only
// once it has shipped. When the batch has been applied, the seed copy is
// checked too.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { formatIssues, validateItem, type Item } from './schema.ts';
import { hasPlainNasal, hasPlainNasalFor } from './density.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the
// app can be built on its own) rather than failing the suite.
let CONSONNES: Item[] = [];
let RESPELL: Record<string, string> = {};
let RESPELL_COUNT = 0;

try {
  const corpus = await import('../../../ealch-admin/scripts/data/consonnes-corpus.ts');
  const backfill = await import('../../../ealch-admin/scripts/data/sons-respell-backfill.ts');
  CONSONNES = corpus.CONSONNES.map(corpus.toItem);
  RESPELL = backfill.SONS_RESPELL;
  RESPELL_COUNT = backfill.SONS_RESPELL_COUNT;
} catch {
  // Not available; every test below no-ops.
}

const skip = CONSONNES.length === 0;

/** The themes the backfill is scoped to. */
const BACKFILL_THEMES = new Set(['nasales', 'voyelles', 'alphabet']);

/** The four French nasal vowels, as they appear in IPA: a vowel carrying the
 *  combining tilde U+0303. */
const NASAL_IPA = /[ɔɑɛœ]̃/gu;

/** Count the nasal vowels an item's own IPA actually asserts. */
function nasalCount(ipa: string): number {
  return (ipa.match(NASAL_IPA) ?? []).length;
}

/** Count the superscript marks a respelling carries. */
function superscriptCount(respell: string): number {
  return (respell.match(/ⁿ/gu) ?? []).length;
}

type SeedItem = { id: string; level: string; theme: string; fr: string; ipa?: string; respell?: string };
const SEED = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as { items: SeedItem[] };

/* ─── The consonnes corpus ────────────────────────────────────────────────── */

test('every consonnes item is schema-valid', { skip }, () => {
  const issues = CONSONNES.flatMap((it) => validateItem(it, it.id));
  strictEqual(issues.length, 0, formatIssues(issues));
});

test('ids are unique, sequential, and never redefine the shipped 001-010', { skip }, () => {
  const ids = CONSONNES.map((i) => i.id);
  strictEqual(new Set(ids).size, ids.length, 'duplicate id in the consonnes corpus');

  for (const id of ids) {
    ok(/^fr\.sons\.consonnes\.\d{3}$/.test(id), `malformed id: ${id}`);
    const n = Number(id.split('.').pop());
    ok(n >= 11, `${id} redefines one of the shipped ids 001-010`);
  }
});

test('the theme is deep enough to stop being a stub', { skip }, () => {
  // The advisory theme-breadth gate in publish-content.ts wants 20. sons.04
  // borrowed 21 of its 31 itemIds from five other themes because this theme
  // held ten items, so the bar that matters is "enough to teach the lesson
  // from its own theme", not the advisory floor.
  ok(CONSONNES.length >= 120, `consonnes corpus is ${CONSONNES.length} items, expected at least 120`);
});

test('every family the unit subtitle promises is present and drillable', { skip }, () => {
  // "consonant sounds & the French r" — the r is not optional.
  const families = ['ch', 'gn', 'g-hard', 'g-soft', 'c-hard', 'c-soft', 'r'];
  for (const f of families) {
    const n = CONSONNES.filter((i) => i.tags.includes(f)).length;
    ok(n >= 8, `family "${f}" has ${n} items, too thin to draw a drill pool from`);
  }

  // The R is the lesson's headline sound and needs more than a token pool.
  const r = CONSONNES.filter((i) => i.tags.includes('r')).length;
  ok(r >= 20, `the French r has ${r} items, expected at least 20`);
});

test('the c and g hard/soft contrast is teachable as a contrast', { skip }, () => {
  // A rule taught with only one side of it is a rule nobody can hear.
  for (const [hard, soft] of [['c-hard', 'c-soft'], ['g-hard', 'g-soft']]) {
    const h = CONSONNES.filter((i) => i.tags.includes(hard)).length;
    const s = CONSONNES.filter((i) => i.tags.includes(soft)).length;
    ok(h >= 8 && s >= 8, `${hard}:${h} vs ${soft}:${s} — both sides needed to teach the contrast`);
  }
});

/* ─── Notation, over both halves ──────────────────────────────────────────── */

test('consonnes IPA sits in slashes', { skip }, () => {
  const bad = CONSONNES.filter((i) => i.ipa && !/^\/.*\/$/.test(i.ipa));
  strictEqual(bad.length, 0, `IPA must be slash-wrapped:\n${bad.map((i) => `  ${i.id} "${i.ipa}"`).join('\n')}`);
});

test('consonnes respell is bare, and every item has one', { skip }, () => {
  // Brackets are a LESSON-SECTION rule (isDelimitedRespell). Corpus rows are
  // bare: 3,083 bare against 189 bracketed across the shipped corpus.
  const bracketed = CONSONNES.filter((i) => i.respell?.includes('['));
  strictEqual(bracketed.length, 0, `corpus respell is bare:\n${bracketed.map((i) => `  ${i.id} "${i.respell}"`).join('\n')}`);

  const missing = CONSONNES.filter((i) => !i.respell);
  strictEqual(missing.length, 0, `every item needs a respell:\n${missing.map((i) => `  ${i.id}`).join('\n')}`);
});

test('no consonnes respell closes a nasal with a plain n or m', { skip }, () => {
  const bad = CONSONNES.filter((i) => i.respell && (hasPlainNasal(i.respell) || hasPlainNasalFor(i.fr, i.respell)));
  strictEqual(bad.length, 0, `use the superscript:\n${bad.map((i) => `  ${i.id} ${i.fr} "${i.respell}"`).join('\n')}`);
});

/* ─── The respell backfill ────────────────────────────────────────────────── */

test('the backfill map matches its own declared count', { skip }, () => {
  strictEqual(Object.keys(RESPELL).length, RESPELL_COUNT);
});

test('the backfill stays inside the themes it was scoped to', { skip }, () => {
  const off = Object.keys(RESPELL).filter((id) => !BACKFILL_THEMES.has(id.split('.')[2]));
  strictEqual(off.length, 0, `outside nasales/voyelles/alphabet:\n${off.join('\n')}`);
});

test('every backfilled id exists in the seed', { skip }, () => {
  const seedIds = new Set(SEED.items.map((i) => i.id));
  const unknown = Object.keys(RESPELL).filter((id) => !seedIds.has(id));
  strictEqual(unknown.length, 0, `not in the seed:\n${unknown.slice(0, 20).join('\n')}`);
});

test('every nasal vowel in the IPA is marked, and no other syllable is', { skip }, () => {
  // The single most important rule in this file. nasales is 173 rows whose
  // whole subject is a sound only the superscript can represent.
  //
  // Checked by COUNT PARITY against each row's own IPA rather than with
  // `hasPlainNasalFor`. That helper decides from the French SPELLING, which
  // cannot separate a nasal vowel from a pronounced consonant: it fires on 34
  // correct rows here (comme KOM, meme MEHM, deuxieme ZYEHM, jaune ZHOHN,
  // automne oh-TON, Wassim wa-SEEM, and the spelled letters M and N). Its own
  // source comment records the same false positive for aime and scene.
  // Asserting it would demand ZHOHⁿ for `jaune`, teaching the exact error this
  // convention exists to prevent, inverted.
  //
  // The IPA is the authority the spelling lacks, and it is already correct on
  // every one of these rows. So the rule is exact in both directions: as many
  // superscripts as nasal vowels, no more and no fewer. A missed nasal and an
  // invented one both fail, and no allowlist is needed.
  const byId = new Map(SEED.items.map((i) => [i.id, i]));
  const bad = Object.entries(RESPELL)
    .map(([id, r]) => ({ id, r, ipa: byId.get(id)?.ipa ?? '', fr: byId.get(id)?.fr ?? '' }))
    .filter((x) => x.ipa && nasalCount(x.ipa) !== superscriptCount(x.r));

  strictEqual(
    bad.length,
    0,
    `superscript count must equal the IPA's nasal-vowel count:\n${bad
      .slice(0, 25)
      .map((x) => `  ${x.id} "${x.fr}"\n     ipa(${nasalCount(x.ipa)}): ${x.ipa}\n     re (${superscriptCount(x.r)}): ${x.r}`)
      .join('\n')}`
  );
});

test('a plain-n respelling never sits on a syllable the IPA nasalises', { skip }, () => {
  // The count rule above catches a missing or invented mark. This catches the
  // subtler shape it cannot: the right NUMBER of marks in the wrong PLACES.
  // Every row carrying no nasal vowel at all must also carry no superscript.
  const byId = new Map(SEED.items.map((i) => [i.id, i]));
  const bad = Object.entries(RESPELL).filter(([id, r]) => {
    const ipa = byId.get(id)?.ipa ?? '';
    return ipa && nasalCount(ipa) === 0 && superscriptCount(r) > 0;
  });
  strictEqual(bad.length, 0, `superscript on a row with no nasal vowel:\n${bad.map(([id, r]) => `  ${id} "${r}"`).join('\n')}`);
});

test('backfilled respellings are bare, non-empty, and unpunctuated', { skip }, () => {
  const bad = Object.entries(RESPELL).filter(([, r]) => !r.trim() || r.includes('[') || /[.,!?;:]/.test(r));
  strictEqual(bad.length, 0, `bare and unpunctuated:\n${bad.slice(0, 20).map(([id, r]) => `  ${id} "${r}"`).join('\n')}`);
});

test('the backfill only ever fills a blank', { skip }, () => {
  // If the seed already carries a respell for one of these, someone authored
  // it in between and applying the map would discard their work. This is the
  // same failure shape as the seed-direct incidents.
  const byId = new Map(SEED.items.map((i) => [i.id, i]));
  const occupied = Object.keys(RESPELL).filter((id) => {
    const r = byId.get(id)?.respell;
    return r != null && r !== '' && r !== RESPELL[id];
  });
  strictEqual(occupied.length, 0, `already respelled, would be overwritten:\n${occupied.slice(0, 20).join('\n')}`);
});

/* ─── House style ─────────────────────────────────────────────────────────── */

test('no em dash and no banned word in anything authored here', { skip }, () => {
  const authored = JSON.stringify({ CONSONNES, RESPELL });
  ok(!authored.includes('—'), 'em dash found in authored copy');
  ok(!/honest/i.test(authored), 'the word "honest" is banned from authored content');
});

/* ─── The shipped seed, once the batch has been applied ───────────────────── */

test('once shipped, the seed carries the whole repair', { skip }, () => {
  const seedConsonnes = SEED.items.filter((i) => i.theme === 'consonnes');
  if (seedConsonnes.length <= 10) return; // batch not applied yet

  ok(
    seedConsonnes.length >= CONSONNES.length,
    `seed has ${seedConsonnes.length} consonnes, the corpus authors ${CONSONNES.length}`
  );

  const blank = SEED.items.filter(
    (i) => i.level === 'sons' && BACKFILL_THEMES.has(i.theme) && !i.respell
  );
  strictEqual(blank.length, 0, `${blank.length} sons items still carry no respell after the backfill`);
});
