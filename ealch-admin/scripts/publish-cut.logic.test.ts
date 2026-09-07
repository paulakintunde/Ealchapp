// itemsReferencedBy: everything a lesson needs in the offline bundle.
//
// Publishing v20 cut 60 rows out of seed.json and took referenced ones with
// them, because this function was an ALLOWLIST of the places an item can be
// named and the list had fallen behind the schema. a1.12's term chips resolved
// to nothing; a1.08 lost an imported row.
//
// It is a walk of the whole body now. These tests are mostly about the places
// the allowlist missed, because a walk that stops working would fail exactly
// there and nowhere else.
//
// NOTE: importing publish-content.ts must not publish anything. It is guarded
// on `invokedDirectly`, and this file passing at all is that guard working.

import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { itemsReferencedBy } from './publish-content.ts';
import type { Lesson } from '../../ealch-v2/src/content/schema.ts';

const ID = (n: number) => `fr.a1.cuisine.${String(n).padStart(3, '0')}`;

/** A lesson naming items in every place the schema allows one. */
const lesson = {
  id: 'a1.99.l1',
  itemIds: [ID(1)],
  sections: [
    { type: 'practice', id: 's01', itemIds: [ID(2)] },
    { type: 'dictation', id: 's02', itemIds: [ID(3)] },
    {
      type: 'groupDrill',
      id: 's03',
      targets: [{ label: 'a group', practiceOn: [ID(4)] }],
    },
    { type: 'reading', id: 's04', glossary: [{ key: 'x', itemId: ID(7) }] },
  ],
  drills: [{ id: 'd1', items: [ID(5)] }],
  terms: { aTerm: { term: 'a', examples: [{ itemId: ID(6) }] } },
} as unknown as Lesson;

test('it finds items in every place a lesson can name one', () => {
  const found = new Set(itemsReferencedBy(lesson));
  // 1 and 2 the old allowlist found. 3 to 7 it did not, and 6 is the one that
  // actually cost us: terms[].examples[].itemId, a1.12's term chips.
  for (const n of [1, 2, 3, 4, 5, 6, 7]) {
    ok(found.has(ID(n)), `${ID(n)} was not found — a walk that misses a site drops the row from the bundle`);
  }
});

test('it finds an item nested somewhere nobody has thought of yet', () => {
  // The point of a walk over an allowlist: a section type invented tomorrow
  // gets this for free, and forgetting to update a list is not silent.
  const future = {
    id: 'a1.99.l2',
    itemIds: [],
    sections: [{ type: 'somethingNew', id: 's01', deeply: { nested: [{ thing: ID(9) }] } }],
  } as unknown as Lesson;
  strictEqual(itemsReferencedBy(future).includes(ID(9)), true);
});

test('it does not invent item ids out of prose', () => {
  // Over-inclusion is the safe direction, but it should still not fire on
  // authored copy. An item id has a shape no sentence has.
  const prose = {
    id: 'a1.99.l3',
    itemIds: [],
    sections: [{ type: 'goals', id: 's01', say: 'Say fr.a1 out loud, or cuisine.001, or fr..003' }],
  } as unknown as Lesson;
  strictEqual(itemsReferencedBy(prose).length, 0);
});

test('a lesson naming nothing returns nothing', () => {
  const empty = { id: 'a1.99.l4', itemIds: [], sections: [] } as unknown as Lesson;
  strictEqual(itemsReferencedBy(empty).length, 0);
});
