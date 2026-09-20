# Testing Patterns

**Analysis Date:** 2026-09-19

## Test Framework

**Runner:**
- Node.js built-in `node --test` (no external test framework)
- Works on Node 24+ (specified in .github/workflows/ci.yml)
- Both ealch-v2 and ealch-admin use the same test runner

**Assertion Library:**
- Node.js built-in `assert` module: `strictEqual`, `deepStrictEqual`, `ok`
- Import from `node:assert`

**Run Commands:**
```bash
npm test                                  # ealch-v2: run all tests
npm run test:i18n                         # ealch-v2: i18n-specific tests
pnpm run test                             # ealch-admin: run scripts tests
pnpm run test:e2e                         # ealch-admin: run Playwright E2E tests
```

## Test File Organization

**Location:**
- *.test.ts files collocated alongside source files
- No separate `tests/` directory or `__tests__/` folders
- Examples: `src/utils/time.test.ts`, `src/content/wordOfDay.test.ts`, `scripts/exam/rate-rules.test.ts`

**Naming:**
- All tests use `*.test.ts` suffix
- No distinction in filename between unit/integration/E2E
- E2E tests in ealch-admin: Playwright (separate from Node tests)

**Structure:**
```
ealch-v2/
  src/
    utils/
      time.ts
      time.test.ts
    content/
      schema.ts
      wordOfDay.ts
      wordOfDay.test.ts
      narration.logic.ts
      narration.logic.test.ts
    services/
      auth.ts
      (no test file - integration tested via app)
    store/
      progress.logic.ts
      progress.logic.test.ts

ealch-admin/
  scripts/
    exam/
      rate-rules.ts
      rate-rules.test.ts
    delf-blanc01/
      paper.ts
      paper.test.ts
```

## Test Structure

**Suite Organization:**
```typescript
import { strictEqual, deepStrictEqual, ok } from 'node:assert';
import { test } from 'node:test';
import { functionToTest } from './module.ts';

test('descriptive test name', () => {
  // arrange
  const input = setupTestData();

  // act
  const result = functionToTest(input);

  // assert
  strictEqual(result.success, true);
});

test('should handle error case', () => {
  strictEqual(functionToTest(null), undefined);
});
```

**Patterns:**
- No beforeEach/afterEach hooks; tests are stateless
- Test isolation via local variable setup (arrange pattern)
- Descriptive test names as full sentences: "every pool is non-empty and level-consistent"
- Multiple assertions per test are OK when testing one logical concept
- Guard clauses for invariants: `ok(pool.length >= 8, 'message')`

## Mocking

**Framework:**
- No mocking library used (no vi.mock, jest.mock, sinon)
- Tests rely on pure functions with no side effects
- External dependencies (file I/O, network) tested via integration or not at all

**Patterns:**
- Tests import functions directly and call them
- Deterministic data structures created inline as test fixtures
- Functions should be pure; if not, extract the pure logic to a separate testable file
- Example pattern (from narration.logic.test.ts):

```typescript
const SAMPLE: LessonNarration = {
  camilleVoiceId: 'fr-ca-x-cab',
  ratioEnFr: 0.7,
  stages: [/* test data */]
};

test('flattenNarration preserves order', () => {
  const steps = flattenNarration(SAMPLE);
  deepStrictEqual(
    steps.map((s) => s.kind),
    ['segment', 'segment', 'interaction']
  );
});
```

**What to Mock:**
- Nothing - keep tests pure; avoid mocking
- External dependencies should be wrapped in a service with a test mode
- Configuration should be injected, not imported

**What NOT to Mock:**
- Pure functions (math, string manipulation, data transformation)
- Internal business logic
- Type definitions

## Fixtures and Factories

**Test Data:**
```typescript
// Factory function defined in test file
const docs = (wpm: Record<string, number>) => {
  const secs = { a1: 15, a2: 25, b1: 40 };
  return Object.entries(wpm).map(([band, w]) => ({
    band: band as const,
    label: `doc ${band}`,
    wpm: w,
    seconds: secs[band]!
  }));
};

// Inline fixtures
const SAMPLE: LessonNarration = {
  camilleVoiceId: 'fr-ca-x-cab',
  ratioEnFr: 0.7,
  stages: [{ stage: 'warm', segments: [] }]
};
```

**Location:**
- Factory functions: inline in test file, near usage
- Shared test data constants: defined at top of test file
- No external fixture files unless data is large (>100 lines)

## Coverage

**Requirements:**
- No enforced coverage target
- Coverage tracked for awareness only
- Focus on critical paths: parsers, business logic, guards
- Honesty gates (Phase 0 invariants) checked via CI grep patterns

**Configuration:**
- Node.js built-in: no coverage config needed
- Could add via `node --test --coverage` (Node 20+) if needed
- Excluded from tests: `*.test.ts`, component files (.tsx), config files

## Test Types

**Unit Tests:**
- Test single function in isolation with pure inputs
- Examples: `time.test.ts`, `wordOfDay.test.ts`, `narration.logic.test.ts`
- Fast: each test <100ms
- Scope: math, parsing, logic transformation, validation

**Integration Tests:**
- Test multiple related functions together
- Examples: `rate-rules.test.ts` (tests rules + violations together)
- Mock only external boundaries (if any)
- Scope: workflows across related logic

**Honesty Gates (CI-time):**
- Not traditional tests; grep-based pattern checks
- Run in CI to enforce Phase 0 invariants
- Examples: no fabricated card numbers, no price literals outside pricing.ts, no literal SRS ladders
- Part of `.github/workflows/ci.yml`: `npm run test` + grep patterns

**E2E Tests (ealch-admin only):**
- Playwright-based (`test:e2e`)
- Separate from Node tests
- Run against live app instance
- Examples: content publish dry-run test

## Common Patterns

**Deterministic Data:**
```typescript
// Use fixed seeds for pseudo-random content
const d = new Date(2026, 6, 17);  // Fixed date
strictEqual(wordOfDay('A1', d).word, wordOfDay('A1', d).word);  // Same seed = same result

// Cyclic iteration to test all pool items
const seen = new Set<string>();
for (let day = 0; day < poolForLevel('A1').length; day++) {
  seen.add(wordOfDay('A1', new Date(2026, 0, 1 + day)).word);
}
strictEqual(seen.size, poolForLevel('A1').length);
```

**Guard Assertions:**
```typescript
// Invariant checks - fast-fail if contract broken
for (const lv of ['A1', 'A2', 'B1'] as const) {
  const pool = poolForLevel(lv);
  ok(pool.length >= 8, `${lv} pool has at least 8 words`);
  ok(pool.every((e) => e.level === lv.toLowerCase()), `${lv} pool entries correct`);
}
```

**Boundary Testing:**
```typescript
// Test min, max, off-by-one
test('interactionPauseMs never exceeds its ceiling', () => {
  const veryLong = Array.from({ length: 40 }, () => 'mot').join(' ');
  strictEqual(interactionPauseMs(veryLong), 8000);  // max
});

test('formatTime leaves malformed input untouched', () => {
  strictEqual(formatTime('7pm', false), '7pm');
  strictEqual(formatTime('', false), '');
});
```

**Multi-Case Assertions:**
```typescript
// Test multiple related cases in a loop
const cases: [string, string][] = [
  ['00:00', '12:00 AM'],
  ['12:00', '12:00 PM'],
  ['19:00', '7:00 PM'],
];
for (const [input, expected] of cases) {
  strictEqual(formatTime(input, false), expected, input);
}
```

## TypeScript Testing

**Type Safety:**
- `node --test` runs TypeScript directly via tsx (type-stripping)
- Tests can import .ts files (extensionless imports work in tests)
- Cross-repo imports allowed: ealch-admin tests can import ealch-v2/src files
- Example: scripts/publish-content.ts imports `../../ealch-v2/src/content/schema.ts`

**Exclusive Tests:**
- No .only or .skip support (use Node.js test module as-is)
- Comment out tests temporarily if needed

## CI Integration

**Test Runs:**
- **ealch-v2**: `npm test` runs all `src/**/*.test.ts` and `supabase/functions/**/*.test.ts`
- **ealch-admin**: `pnpm run test` runs `scripts/**/*.test.ts` only
- Failures block PR merging (part of required status checks)
- Node 24 used in CI

**Honesty Gates (ealch-v2):**
- Run after tests: grep patterns checking for fabricated content
- Blocks if found: `4212` (card number), prices outside pricing.ts, `1 → 3 → 7` (SRS ladder)

**Coverage Ceiling:**
- seed.json max 16 MiB (enforced in CI)
- Not a test failure, but a build gate

---

*Testing analysis: 2026-09-19*
*Update when test patterns change*
