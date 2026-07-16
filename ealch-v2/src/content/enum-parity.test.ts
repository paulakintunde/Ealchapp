// Two repos, one vocabulary. This test is the only thing holding them together.
//
// ealch-v2/src/content/schema.ts declares the app's value lists as `as const`
// arrays. ealch-admin/src/db/schema.ts declares the same vocabularies again as
// Postgres pgEnums. Nothing generates one from the other and there is no CI, so
// the only thing stopping them drifting is a human remembering to edit both.
// Historically that is not a thing humans remember.
//
// Drift here does not fail loudly. The Ops Console happily writes a value the
// app's validator rejects, publish-content.ts fails the gate, and the error
// surfaces as "corpus invalid" days later, pointing at content rather than at
// the enum that caused it. Or worse, the reverse: the app ships a value the DB
// cannot store, and authoring that value is impossible for a reason no error
// message explains.
//
// WHY PARSE THE SOURCE INSTEAD OF IMPORTING IT
// Importing ealch-admin's schema would drag drizzle-orm into this test run and
// bind the app's suite to the admin's node_modules — a hard dependency between
// two packages that otherwise share exactly one file. The pgEnum call sites are
// a fixed, mechanical shape, so reading them as text costs nothing and keeps the
// app's tests runnable on their own. If this parser ever stops finding an enum
// it is asked for, the test fails rather than silently passing on zero data —
// see the guard in `dbEnum`.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { deepStrictEqual, ok } from 'node:assert';
import { test } from 'node:test';
import {
  CONTENT_STATUSES,
  DRILL_KINDS,
  EXAM_FAMILIES,
  EXAM_SECTIONS,
  EXAM_SKILLS,
  ITEM_KINDS,
  LEVELS,
  MODALITIES,
  REGISTERS,
  SCORE_BANDS,
} from './schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const ADMIN_SCHEMA = resolve(here, '../../../ealch-admin/src/db/schema.ts');
const src = readFileSync(ADMIN_SCHEMA, 'utf8');

/** Pull one pgEnum's value list out of the admin schema by its Postgres type
 *  name: pgEnum('drill_kind', ['flashcard', …]) → ['flashcard', …]. */
function dbEnum(pgName: string): string[] {
  const re = new RegExp(`pgEnum\\(\\s*'${pgName}'\\s*,\\s*\\[([\\s\\S]*?)\\]\\s*\\)`);
  const m = src.match(re);
  // A missing enum must fail, not return []. An empty list would deepStrictEqual
  // against nothing and quietly pass the day someone renames the type.
  ok(m, `pgEnum('${pgName}', …) not found in ${ADMIN_SCHEMA} — was it renamed or removed?`);
  return [...m![1].matchAll(/'([^']+)'/g)].map((x) => x[1]);
}

test('the parser actually finds enums (guards every assertion below)', () => {
  // If dbEnum silently returned [] this whole file would be theatre.
  ok(dbEnum('item_kind').length > 0);
  ok(dbEnum('drill_kind').length > 0);
});

test('app value lists and Drizzle pgEnums hold the same values', () => {
  // Order matters for none of these at runtime, but an ordered diff gives a far
  // more readable failure than a set difference, and there is no reason for the
  // two files to list them differently.
  deepStrictEqual(dbEnum('item_kind'), [...ITEM_KINDS], 'ITEM_KINDS ↔ item_kind');
  deepStrictEqual(dbEnum('drill_kind'), [...DRILL_KINDS], 'DRILL_KINDS ↔ drill_kind');
  deepStrictEqual(dbEnum('content_status'), [...CONTENT_STATUSES], 'CONTENT_STATUSES ↔ content_status');
  deepStrictEqual(dbEnum('modality'), [...MODALITIES], 'MODALITIES ↔ modality');
  deepStrictEqual(dbEnum('register'), [...REGISTERS], 'REGISTERS ↔ register');
  deepStrictEqual(dbEnum('exam_family'), [...EXAM_FAMILIES], 'EXAM_FAMILIES ↔ exam_family');
  deepStrictEqual(dbEnum('exam_section'), [...EXAM_SECTIONS], 'EXAM_SECTIONS ↔ exam_section');
  deepStrictEqual(dbEnum('exam_skill'), [...EXAM_SKILLS], 'EXAM_SKILLS ↔ exam_skill');
});

test("SCORE_BANDS is user_level — a learner's level is an exam band, never 'sons'", () => {
  // These two lists are the same list for a real reason: user_level is what a
  // learner is scored at, which is exactly what SCORE_BANDS means. If they ever
  // diverge, one of the two definitions of "what level is this person" is wrong.
  deepStrictEqual(dbEnum('user_level'), [...SCORE_BANDS], 'SCORE_BANDS ↔ user_level');
});

test('content_level keeps c2 and LEVELS does not — the one deliberate asymmetry', () => {
  // THE DECISION (guardrail G3), recorded here as an executable note rather than
  // a comment nobody reads:
  //
  // We dropped 'c2' from the app's content LEVELS. We CANNOT drop it from the
  // content_level pgEnum, because Postgres has no safe DROP VALUE — removing an
  // enum value means recreating the type and rewriting every dependent column,
  // for a value that no row uses. That is a migration with real downtime risk to
  // buy nothing.
  //
  // So the asymmetry is permanent and intentional: the DB *can* store a c2
  // content row, and the app's validator refuses one. Enforcement is at two
  // gates, not one — a CHECK constraint on content_items (drizzle/0004) stops an
  // author writing c2 at all, and validateCorpus stops it reaching a phone even
  // if the CHECK is ever dropped.
  //
  // This test asserts the asymmetry is EXACTLY c2 and nothing else, so the
  // exception can never quietly widen into general drift.
  const dbLevels = dbEnum('content_level');
  deepStrictEqual(dbLevels, [...LEVELS, 'c2'], 'content_level must be LEVELS plus exactly c2');
  ok(!(LEVELS as readonly string[]).includes('c2'), 'the app must never author c2 content');
});

test('the c2 CHECK constraint that enforces the asymmetry actually exists', () => {
  // The comment above claims a CHECK stops authors writing c2. Claims in
  // comments rot. Assert the migration is really there.
  const migration = resolve(here, '../../../ealch-admin/drizzle/0004_content_items_no_c2.sql');
  const sql = readFileSync(migration, 'utf8');
  ok(/items_level_not_c2/.test(sql), 'the c2 CHECK constraint is named and present');
  ok(/CHECK\s*\(\s*level\s*<>\s*'c2'/i.test(sql), "the CHECK actually forbids level = 'c2'");
});
