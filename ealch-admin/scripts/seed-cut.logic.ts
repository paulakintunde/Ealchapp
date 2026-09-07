// THE SEED CUT RULE, in one place.
//
// `seed-cut.config.ts` declares WHAT ships in the binary and says of itself
// that it is "a CONFIG, not logic, on purpose". This file is the logic that
// applies it, kept separate for the same reason.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY THIS FILE EXISTS
// ══════════════════════════════════════════════════════════════════════════
//
// The rule lived inline in `publish-content.ts` as a single expression, so
// PUBLISH was the only thing that knew it. Forty-plus `merge-*-into-seed.ts`
// scripts also write seed.json, none of them knows the rule, and the two
// layers therefore disagree by construction:
//
//   a MERGE keeps what the seed already held, minus the ids its own lesson
//   authored, plus its new rows. It has no concept of a cut THEME.
//
//   a PUBLISH takes every row that is referenced OR sits in a cut theme, and
//   rebuilds the file from the database.
//
// Measured on 2026-08-19: 5,658 of the seed's 10,417 rows — 54% — are in it
// ONLY because their theme is in SEED_CUT.themes. No lesson names any of them.
// Every one is invisible to a merge and droppable by one.
//
// That is not theoretical. Commit 057a297 dropped exactly four of them
// (`le jour`, `la semaine`, `le calendrier`, `le week-end`, all in
// `jours-et-mois`), which moved three of a1.03's printed ending statistics and
// turned its suite red on the next publish that put them back. The same commit
// KEPT `fr.a1.transports-quotidiens.041`, which the cut excludes, so the drift
// runs in both directions.
//
// `publish-content.ts` opens by saying the database is the source of truth and
// git is "a MIRROR, never a rival writer". The merge layer is the rival writer
// that sentence forbids. Removing it is a real decision with a real cost — the
// suite runs against the seed, so merges writing it is what lets a lesson be
// tested before it is published. Until that decision is made, this module at
// least gives every writer ONE definition to be checked against.

import type { Item, Lesson } from '../../ealch-v2/src/content/schema.ts';
import { ITEM_ID_RE } from '../../ealch-v2/src/content/schema.ts';
import { SEED_CUT } from './seed-cut.config.ts';

/** A speak stage, reduced to the part the cut cares about. */
export type SpeakStageLike = { world: number; blocks?: { itemIds?: string[] }[] };

/** Every item a lesson depends on, found by WALKING THE WHOLE BODY rather than
 *  by listing the places an item is known to be named.
 *
 *  ── Why a walk and not a list (2026-08-09) ─────────────────────────────────
 *
 *  This read `l.itemIds` plus practice sections, and its own comment warned
 *  that missing the practice sections would ship a lesson whose practice block
 *  is silently empty. It was missing more than practice. Publishing v20 cut 60
 *  rows out of the seed, and among them were rows referenced from
 *  `terms[].examples[].itemId`: a1.12's term chips resolved to nothing in the
 *  bundle, and a1.08 lost an imported row the same way. `dictation` sections,
 *  `drills[].items` and a target's `practiceOn` were all equally invisible to
 *  this function.
 *
 *  The defect was the shape of the answer, not the three missing entries. An
 *  allowlist of reference sites has to be extended every time a section type
 *  learns to name an item, nothing fails when somebody forgets, and the symptom
 *  appears only for a learner with no network — the row is simply absent from
 *  the bundle and the card draws blank. A walk cannot fall behind the schema.
 *
 *  Over-inclusion is the safe direction and is nearly impossible in practice:
 *  an item id is `fr.<band>.<theme>.<nnn>` and no authored prose contains one.
 *  A false positive costs one surplus row in the bundle. A false negative costs
 *  a blank card offline, silently, for as long as nobody opens that lesson on a
 *  plane. */
export function itemsReferencedBy(l: Lesson): string[] {
  const found: string[] = [];
  const walk = (v: unknown): void => {
    if (typeof v === 'string') {
      if (ITEM_ID_RE.test(v)) found.push(v);
      return;
    }
    if (Array.isArray(v)) {
      for (const x of v) walk(x);
      return;
    }
    if (v && typeof v === 'object') {
      for (const x of Object.values(v)) walk(x);
    }
  };
  walk(l);
  return found;
}

/**
 * Every item id the bundled lessons and speak stages point at.
 *
 * BOTH SOURCES MATTER. Counting only the lessons reports 463 legitimately
 * bundled rows as unreachable — the sons sentence rows the speak trail's blocks
 * name and no lesson does. That was measured while writing this file, by
 * getting it wrong first.
 */
export function neededItemIds(lessons: Lesson[], speakStages: SpeakStageLike[]): Set<string> {
  return new Set<string>([
    ...lessons.flatMap(itemsReferencedBy),
    ...speakStages.flatMap((s) => (s.blocks ?? []).flatMap((b) => b.itemIds ?? [])),
  ]);
}

/** Whether one item belongs in the binary: referenced by something bundled, or
 *  sitting in a theme the cut ships wholesale. */
export function isInCut(item: Pick<Item, 'id' | 'theme'>, needed: ReadonlySet<string>): boolean {
  return needed.has(item.id) || SEED_CUT.themes.includes(item.theme);
}

/** The item cut itself. `publish-content.ts` calls this; anything that wants to
 *  CHECK a seed rather than build one should call it too, so the check and the
 *  build cannot drift. */
export function cutItems(items: Item[], lessons: Lesson[], speakStages: SpeakStageLike[]): Item[] {
  const needed = neededItemIds(lessons, speakStages);
  return items.filter((i) => isInCut(i, needed));
}

/**
 * What a seed is missing, and what it holds that the rule excludes.
 *
 * `corpusItems` is the FULL corpus (the database, or a published snapshot) —
 * without it, a missing row is invisible, because a seed cannot tell you about
 * a row it does not contain. That is why this cannot be a test over seed.json
 * alone and lives where a database connection already exists.
 */
export function cutDrift(
  seedItems: Item[],
  corpusItems: Item[],
  seedLessons: Lesson[],
  seedSpeak: SpeakStageLike[],
): { missing: Item[]; surplus: Item[] } {
  const needed = neededItemIds(seedLessons, seedSpeak);
  const inSeed = new Set(seedItems.map((i) => i.id));
  const missing = corpusItems.filter((i) => isInCut(i, needed) && !inSeed.has(i.id));
  const surplus = seedItems.filter((i) => !isInCut(i, needed));
  return { missing, surplus };
}
