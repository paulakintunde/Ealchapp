// Reading the cast list out of VOICES-<format>.md.
//
// The casting file is markdown because a person has to fill it in while
// auditioning voices in a browser, and a table they can read is worth more
// than a JSON file they will mistype. This parses it.
//
// It is deliberately strict about one thing: a slot with no voice id is
// UNCAST, and rendering a document that needs it must fail rather than
// silently substitute another voice. Substituting is how two speakers in one
// document end up sharing a voice, which is the defect the whole casting
// module exists to prevent.
import { readFileSync } from 'node:fs';
import { SLOTS, type SlotName } from './examAudio.ts';

export type CastEntry = {
  slot: SlotName;
  voiceId: string;
  /** Whatever prosody the caster recorded, passed through to the provider. */
  settings: Record<string, number>;
};

export type Cast = {
  /** Only the slots that actually have an id. */
  entries: Map<SlotName, CastEntry>;
  /** Slots present in the file but not yet cast. */
  uncast: SlotName[];
  renderVersion: string;
  /**
   * Speech rate per BLOCK, not per slot.
   *
   * STANDARD-common §2 sets a target rate per band, and a block sits at a
   * band; one voice serves several blocks, so the lever cannot live on the
   * slot. Absent or 1.0 means the provider default.
   */
  blockSpeed: Map<string, number>;
};

const CELL = (row: string) => row.split('|').slice(1, -1).map((c) => c.trim());

/**
 * Parse a settings cell.
 *
 * `stability 0.4, similarity 0.8` → `{ stability: 0.4, similarity: 0.8 }`.
 * Free text a caster wrote and did not mean as a number is ignored rather than
 * coerced, because `NaN` reaching a synthesis request is a wasted credit.
 */
export function parseSettings(cell: string): Record<string, number> {
  const out: Record<string, number> = {};
  for (const m of cell.matchAll(/([a-z_]+)\s*[:= ]\s*(-?\d*\.?\d+)/gi)) {
    const v = Number(m[2]);
    if (Number.isFinite(v)) out[m[1]!.toLowerCase()] = v;
  }
  return out;
}

export function parseVoices(markdown: string): Cast {
  const entries = new Map<SlotName, CastEntry>();
  const uncast: SlotName[] = [];
  const seen = new Set<SlotName>();

  const version = /\*\*Render version:\*\*\s*`([^`]+)`/.exec(markdown)?.[1]?.trim() ?? 'v1';

  for (const line of markdown.split('\n')) {
    if (!line.trim().startsWith('|')) continue;
    const cells = CELL(line);
    if (cells.length < 5) continue;
    const slotCell = cells[0]!.replace(/`/g, '').trim() as SlotName;
    if (!(SLOTS as readonly string[]).includes(slotCell)) continue;
    seen.add(slotCell);

    const voiceId = cells[4]!.replace(/`/g, '').trim();
    if (!voiceId) {
      uncast.push(slotCell);
      continue;
    }
    entries.set(slotCell, {
      slot: slotCell,
      voiceId,
      settings: parseSettings(cells[5] ?? ''),
    });
  }

  // A slot missing from the file entirely is as uncast as an empty cell, and
  // more likely to be an editing accident.
  for (const s of SLOTS) if (!seen.has(s)) uncast.push(s);

  return { entries, uncast, renderVersion: version, blockSpeed: parseBlockSpeed(markdown) };
}

export function loadVoices(path: string): Cast {
  return parseVoices(readFileSync(path, 'utf8'));
}

/**
 * The voice id for a slot, or a refusal.
 *
 * Never falls back. A missing voice is a casting job that has not been done,
 * and rendering around it produces a paper that sounds wrong in a way only a
 * listener catches — after the credits are spent.
 */
export function voiceIdFor(cast: Cast, slot: SlotName): string {
  const e = cast.entries.get(slot);
  if (!e) {
    throw new Error(
      `voice slot "${slot}" is not cast. Fill its Voice id in VOICES-<format>.md, ` +
      `or the document that needs it cannot render.`
    );
  }
  return e.voiceId;
}

/**
 * The speed table, per block on TEF and per BAND on TCF.
 *
 * A row whose first cell is a division key and whose last cell is a number.
 * Anything else in the file is ignored, so the table can move or gain columns
 * without breaking the parse.
 *
 * The keys are two different spaces because the formats divide differently: TEF
 * has seven lettered blocks, TCF has six bands on a ramp. They cannot collide —
 * a block is one letter, a band is a letter and a digit — so one table reads
 * both and render-audio keeps a single lookup.
 */
export function parseBlockSpeed(markdown: string): Map<string, number> {
  const out = new Map<string, number>();
  for (const line of markdown.split('\n')) {
    if (!line.trim().startsWith('|')) continue;
    const cells = CELL(line);
    if (cells.length < 4) continue;
    const raw = cells[0]!.replace(/`/g, '').trim();
    // A to G are TEF's listening blocks; a1..c2 are TCF's bands; EO is the
    // recorded interlocutor, which is neither but needs a rate all the same.
    // Bands stay lower case because that is how a task's `level` reads, and
    // upper-casing them here would mean every lookup had to remember to.
    const isBand = /^[abc][12]$/i.test(raw);
    const block = isBand ? raw.toLowerCase() : raw.toUpperCase();
    if (!isBand && !/^([A-G]|EO)$/.test(block)) continue;
    const speed = Number(cells[cells.length - 1]!.trim());
    if (!Number.isFinite(speed) || speed <= 0) continue;
    // 1.0 is the provider default. Storing it would put `speed=1` in the
    // assetKey and re-render every clip in the block to sound identical.
    if (speed === 1) continue;
    out.set(block, speed);
  }
  return out;
}
