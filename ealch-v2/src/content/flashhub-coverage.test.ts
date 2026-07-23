// Coverage guarantees for the themed flashcard hub, pinned after the July 2026
// omissions report: common beginner words (sugar, cup, bed, sofa, mirror …)
// were either unreachable or simply never authored, and nothing failed.
//
// Two mechanisms caused it, and each gets a standing check here:
//   1. REACHABILITY — items authored for other drills (voiceflash, sentence)
//      before the hub existed carried no 'flashcard' drill, so no deck could
//      ever select them. The corpus held « une maison » while the hub showed
//      no such card, and no error said so.
//   2. DUPLICATES — per-theme dedupe on the raw fr string missed article
//      variants (« l'arc-en-ciel » vs « un arc-en-ciel »), so a theme could
//      hold the same word twice while a different word stayed missing.
//
// The same reachability gap existed in mirror image for Voice Flash: 400
// a1/a2 vocab items across 18 themes were authored with `drills: ["flashcard"]`
// only (added after the flashcard hub shipped, never backfilled for voice),
// so Voice Flash silently showed fewer cards than the theme actually held.
// Backfilled 2026-07-22; the check below pins it against regressing.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { Item } from './schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as { items: Item[] };

const vocabType = (it: Item) => (it.cardType ?? 'vocab') === 'vocab';
const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();

test('every beginner vocab word is reachable by the flashcard drill', () => {
  // kind 'sentence' is exempt on purpose: dictation sentences are spelling
  // exercises and legitimately live outside the flashcard decks.
  const stranded = seed.items.filter(
    (it) =>
      (it.level === 'a1' || it.level === 'a2') &&
      vocabType(it) &&
      (it.kind === 'word' || it.kind === 'phrase') &&
      !it.drills.includes('flashcard')
  );
  strictEqual(
    stranded.length,
    0,
    `vocab items no flashcard deck can reach: ${stranded.map((i) => `${i.id} "${i.fr}"`).slice(0, 5).join(' | ')}`
  );
});

test('every beginner vocab word is reachable by the voiceflash drill', () => {
  // Mirrors the flashcard check above. kind 'sentence' stays exempt for the
  // same reason (dictation sentences are spelling exercises, not spoken decks).
  const stranded = seed.items.filter(
    (it) =>
      (it.level === 'a1' || it.level === 'a2') &&
      vocabType(it) &&
      (it.kind === 'word' || it.kind === 'phrase') &&
      !it.drills.includes('voiceflash')
  );
  strictEqual(
    stranded.length,
    0,
    `vocab items no voiceflash deck can reach: ${stranded.map((i) => `${i.id} "${i.fr}"`).slice(0, 5).join(' | ')}`
  );
});

test('no theme holds the same word twice under different articles', () => {
  const seen = new Map<string, string>();
  const dupes: string[] = [];
  for (const it of seed.items) {
    if (!vocabType(it) || it.kind === 'sentence') continue;
    const k = `${it.theme}::${norm(it.fr)}`;
    const prior = seen.get(k);
    if (prior) dupes.push(`${prior} vs ${it.id} ("${it.fr}")`);
    else seen.set(k, it.id);
  }
  strictEqual(dupes.length, 0, `duplicate words within a theme: ${dupes.slice(0, 5).join(' | ')}`);
});

test('the reported core words exist and are flashcard-reachable', () => {
  // The exact omissions named in the report, as normalized headwords. If one
  // of these ever leaves the corpus or loses its flashcard drill, this names
  // it instead of a learner doing so.
  const expected = ['sucre', 'tasse', 'serveur', 'pomme', 'lit', 'canapé', 'mur', 'toit', 'miroir', 'douche', 'rideau', 'argent', 'manger', 'boire'];
  const reachable = new Set(
    seed.items.filter((it) => it.drills.includes('flashcard') && vocabType(it)).map((it) => norm(it.fr))
  );
  for (const w of expected) ok(reachable.has(w), `"${w}" is missing from the flashcard-reachable vocab`);
});
