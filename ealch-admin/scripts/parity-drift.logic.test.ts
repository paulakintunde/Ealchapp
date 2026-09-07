// contentDrift: what check-seed-db-parity.ts sees that shape() cannot.
//
// shape() fingerprints a lesson by version, section count, section types and
// quiz size. Enriching turns inside an existing scenario section changes none
// of those, so 80 authored role-play turns sat one publish away from being
// reverted while the gate reported green.
//
// The trap on the way to fixing it is worth a test of its own: the first
// version compared with JSON.stringify and reported 10 false positives out of
// 16, because Postgres returns jsonb with its keys in its own order.
//
// NOTE: importing check-seed-db-parity.ts must not open a connection. It is
// guarded on `invokedDirectly`; this file passing is that guard working.

import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { contentDrift } from './check-seed-db-parity.ts';
import type { Lesson } from '../../ealch-v2/src/content/schema.ts';

const lesson = (turns: unknown) =>
  ({
    id: 'a1.01.l1',
    version: 3,
    itemIds: [],
    sections: [
      { type: 'goals', id: 's01', goals: [{ t: 'a', s: 'b' }] },
      { type: 'scenario', id: 's02', turns },
    ],
  }) as unknown as Lesson;

const BARE = [{ ai: 'Bonjour ?', en: 'Hello?', user: 'Oui.' }];
const RICH = [{ ai: 'Bonjour ?', en: 'Hello?', user: 'Oui.', userEn: 'Yes.', alts: [{ fr: 'Oui, merci.', en: 'Yes, thanks.' }] }];

test('identical lessons report no drift', () => {
  deepStrictEqual(contentDrift(lesson(BARE), lesson(BARE)), []);
});

test('KEY ORDER alone is not drift', () => {
  // The false-positive trap. Same object, keys written the other way round.
  const reordered = [{ en: 'Hello?', user: 'Oui.', ai: 'Bonjour ?' }];
  deepStrictEqual(
    contentDrift(lesson(BARE), lesson(reordered)),
    [],
    'a reordered copy is the same lesson and must not be reported',
  );
});

test('it catches the enrichment shape() is blind to', () => {
  // The 80 turns. Section count, types and version all unchanged.
  const drift = contentDrift(lesson(RICH), lesson(BARE));
  strictEqual(drift.length, 1, 'exactly the scenario section');
  strictEqual(drift[0].type, 'scenario');
  strictEqual(drift[0].ix, 1, 'reported at its index, so a human can find it');
  strictEqual(drift[0].seedBytes > drift[0].dbBytes, true, 'and the seed is the richer side');
});

test('it reports the direction, because that decides whether a publish is safe', () => {
  // A publish rewrites the seed FROM the database. DB richer is an upgrade;
  // seed richer is a loss. The same difference, read both ways round.
  const seedRicher = contentDrift(lesson(RICH), lesson(BARE))[0];
  const dbRicher = contentDrift(lesson(BARE), lesson(RICH))[0];
  strictEqual(seedRicher.seedBytes > seedRicher.dbBytes, true);
  strictEqual(dbRicher.dbBytes > dbRicher.seedBytes, true);
});

test('array order IS content: a reordered mission list is drift', () => {
  // canonicalJson sorts object keys and deliberately leaves arrays alone.
  // Mission 3 is not mission 5.
  const a = lesson(BARE);
  const b = lesson(BARE) as unknown as { sections: unknown[] };
  b.sections = [b.sections[1], b.sections[0]];
  strictEqual(contentDrift(a, b as unknown as Lesson).length > 0, true);
});
