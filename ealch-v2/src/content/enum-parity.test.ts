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
  CARD_TYPES,
  CONTENT_STATUSES,
  DRILL_KINDS,
  EXAM_FORMATS,
  EXAM_TASK_TYPES,
  EXAM_SKILLS,
  ITEM_KINDS,
  LEVELS,
  MODALITIES,
  REGISTERS,
  SCORE_BANDS,
  TEMPLATE_TARGETS,
} from './schema.ts';
import { ENTITLEMENT_SOURCES, PLANS } from './progress-schema.ts';

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
  deepStrictEqual(dbEnum('exam_format'), [...EXAM_FORMATS], 'EXAM_FORMATS ↔ exam_format');
  deepStrictEqual(dbEnum('exam_task_type'), [...EXAM_TASK_TYPES], 'EXAM_TASK_TYPES ↔ exam_task_type');
  deepStrictEqual(dbEnum('exam_skill'), [...EXAM_SKILLS], 'EXAM_SKILLS ↔ exam_skill');
  deepStrictEqual(dbEnum('card_type'), [...CARD_TYPES], 'CARD_TYPES ↔ card_type');
});

test('PLANS is sub_plan — what the app grants and what billing sold must agree', () => {
  // The app decides access from a plan; the admin bills against one. If the two
  // lists drift, a plan exists that one side cannot represent, and the symptom
  // is a paying user with no access and no error to explain it.
  deepStrictEqual(dbEnum('sub_plan'), [...PLANS], 'PLANS ↔ sub_plan');
});

test('ENTITLEMENT_SOURCES and sub_store are related by a mapping, not parity', () => {
  // Revisited by Phase 10, as the previous version of this test demanded. The
  // two lists answer different questions and stay deliberately unequal:
  //
  //   sub_store            = WHERE the money moved (app_store | play | stripe
  //                          | paystack) — billing analytics granularity.
  //   ENTITLEMENT_SOURCES  = WHICH checkout seam granted access (iap | stripe
  //                          | paystack) — the app does not care which app
  //                          store, so app_store and play both map to 'iap'
  //                          (see sourceOfStore in entitlement.logic.ts and the
  //                          adapty-webhook fn, which restate the same
  //                          collapse).
  //
  // 'paystack' is now in BOTH lists (Phase 10 admin migration 0015): the
  // Africa-PPP web-checkout seam, which RevenueCat cannot route, so its rows
  // are written by their own path. Asserting the current truth of both sides
  // keeps any further drift a red test rather than a silent disagreement.
  deepStrictEqual(dbEnum('sub_store'), ['app_store', 'play', 'stripe', 'paystack']);
  deepStrictEqual([...ENTITLEMENT_SOURCES], ['iap', 'stripe', 'paystack']);
});

test("product_kind models the exam tier as a one-time product, not a plan", () => {
  // Phase 10 pinned this: the $39 exam tier is a distinct product
  // (product_purchases.product = 'exam'), NOT a sub_plan value — a one-off has
  // no renewal lifecycle. PLANS must therefore stay free of it, and the grant
  // travels as the 'examiner' feature on the entitlement instead.
  deepStrictEqual(dbEnum('product_kind'), ['exam']);
  ok(!(PLANS as readonly string[]).includes('exam'), "the exam tier must never become a sub_plan value");
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

test('content_kind carries playlist and template — the two new content_units document kinds', () => {
  // content_kind has no full-parity app-side counterpart to diff against: it is
  // the admin's document-level discriminator for content_units rows (scenario |
  // drill | dictation | curriculum_unit | lesson | vocabulary | playlist |
  // template), while TEMPLATE_TARGETS answers a different question — what kind
  // of corpus row a TEMPLATE produces (item | lesson | scenario | examTask |
  // playlist). The two lists genuinely disagree on 'item'/'examTask' (relational
  // rows with no content_units document of their own) and 'drill'/'dictation'/
  // 'curriculum_unit'/'vocabulary' (document kinds no template targets today),
  // for the same reason ENTITLEMENT_SOURCES above is asserted rather than
  // diffed. What IS asserted: both new content_kind values this phase added
  // are really there, so a rename is a red test rather than a silent drift.
  const kinds = dbEnum('content_kind');
  ok(kinds.includes('playlist'), "content_kind must carry 'playlist'");
  ok(kinds.includes('template'), "content_kind must carry 'template'");
  ok(TEMPLATE_TARGETS.includes('playlist'), "TEMPLATE_TARGETS must carry 'playlist' — a template can author one");
});

test('the c2 CHECK constraint that enforces the asymmetry actually exists', () => {
  // The comment above claims a CHECK stops authors writing c2. Claims in
  // comments rot. Assert the migration is really there.
  const migration = resolve(here, '../../../ealch-admin/drizzle/0004_content_items_no_c2.sql');
  const sql = readFileSync(migration, 'utf8');
  ok(/items_level_not_c2/.test(sql), 'the c2 CHECK constraint is named and present');
  ok(/CHECK\s*\(\s*level\s*<>\s*'c2'/i.test(sql), "the CHECK actually forbids level = 'c2'");
});
