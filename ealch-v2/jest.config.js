/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-expo',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // Scoped to __tests__ on purpose: the 5000+ node --test files under src/ are
  // *.test.ts and must never be swept into this run (D-04 keeps the two suites
  // separate). New component tests go in __tests__/ as *.test.tsx.
  //
  // Deliberately NOT prefixed with <rootDir>: this worktree's absolute path
  // contains a literal ".claude" directory segment, and Jest's <rootDir>
  // substitution + glob-slash normalization mishandles the backslash right
  // before that leading dot on Windows, silently producing a testMatch glob
  // that matches nothing (confirmed via `npx jest --showConfig`). A rootDir-
  // relative pattern sidesteps the bug and still only matches __tests__/.
  testMatch: ['**/__tests__/**/*.test.tsx'],
  // The first render of a real screen (settings.test.tsx) takes ~650ms on a
  // quiet machine but blew Jest's 5s default once when the 5,400-test node
  // suite ran alongside it (measured 2026-09-24). Phase plans run two executors
  // in parallel, each running both suites, so that contention is the normal
  // case, not a fluke. A slow test is still caught; a starved CPU is not a bug.
  testTimeout: 30000,
};
