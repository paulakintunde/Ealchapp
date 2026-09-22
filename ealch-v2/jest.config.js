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
};
