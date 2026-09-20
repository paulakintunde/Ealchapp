# Coding Conventions

**Analysis Date:** 2026-09-19

## Naming Patterns

**Files:**
- kebab-case for all files: `auth.ts`, `user-service.ts`, `supabase.ts`
- *.test.ts for test files, collocated alongside source
- index.ts for barrel exports and service registries
- PascalCase.tsx for React components: `LessonCard.tsx`, `MascotAvatar.tsx`, `ErrorScreen.tsx`

**Functions:**
- camelCase for all functions: `formatTime`, `setMaintenance`, `wordOfDay`
- No special prefix for async functions
- Handler functions use pattern: `handleEventName` or verb-first: `logSession`, `markMissionDone`

**Variables:**
- camelCase for variables: `lessonId`, `adminId`, `examResults`
- UPPER_SNAKE_CASE for module-level constants: `AUTH_UNAVAILABLE`, `MAINTENANCE_KEY`, `MAX_RETRIES`
- No underscore prefix for private members (TypeScript private keyword used if needed)

**Types:**
- PascalCase for interfaces, no I prefix: `AuthResult`, `ProgressState`, `SessionEntry`
- PascalCase for type aliases: `Activity`, `ResumeState`, `ExamResultInput`
- Enums in PascalCase: `Measured` with descriptive members

## Code Style

**Formatting:**
- 2-space indentation throughout both projects
- No Prettier config found; formatting appears consistent across codebase
- Semicolons required (present in all examples)
- Single quotes for strings in TypeScript, HTML double quotes (JSX context)
- Line length appears to be 100-120 characters based on examples

**Linting:**
- **ealch-admin**: ESLint with `eslint.config.mjs` extending `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- **ealch-v2**: No linting config; uses TypeScript strict mode only
- Run command in ealch-admin: `pnpm lint`
- No console.log in production code (use logger or structured logging)

## Import Organization

**Order:**
1. External packages (react, react-native, zustand, drizzle-orm, @supabase/supabase-js)
2. Internal modules (@/services, @/store, @/lib, @/theme)
3. Relative imports (./auth, ../progress.logic)
4. Type imports (import type { X })

**Grouping:**
- Blank lines between import groups
- Alphabetical sorting within groups
- Type imports can appear at end or mixed within groups

**Path Aliases:**
- `@/` maps to `src/` in ealch-v2 (defined in tsconfig.json)
- `@/` maps to `src/` in ealch-admin (defined in tsconfig.json)
- No other aliases defined

## Error Handling

**Patterns:**
- Result type pattern: `{ ok: boolean; error?: string }` or `{ ok: true } | { ok: false; error: string }`
- Errors wrapped in try/catch at service boundaries (API calls, auth operations)
- Synchronous functions throw errors; async functions return Result types
- Custom error sentinels for specific failures: `AUTH_UNAVAILABLE`, `DELETE_NO_SESSION`

**Error Types:**
- Throw on invalid input, missing dependencies, invariant violations
- Network/external service failures caught and converted to Result types
- Log errors with context before throwing: `console.error(e)` or structured logging
- Error messages should describe the failure, not the stack trace

**Async Patterns:**
- Use try/catch, not .catch() chaining
- Await at call site, not buried in conditionals
- Network operations wrapped with `attempt()` helper to normalize Supabase's error API

## Logging

**Framework:**
- `console.log`, `console.error` for development scripts and simple logging
- No centralized logger imported (each module uses console directly)
- No structured logging library installed

**Patterns:**
- Log entry/exit at service boundaries: `console.log('→ migrating database')`
- Use prefix arrows for clarity: `→ starting`, `✓ completed`, `✗ failed`
- One-liners preferred in scripts; detailed context in comments instead

## Comments

**When to Comment:**
- Explain WHY, not WHAT: `// Network failure, malformed token, aborted fetch — the call never completed.`
- Document contracts and invariants: `// CONTRACT: Money is integer cents everywhere`
- Explain non-obvious algorithms or business rules
- Record load-bearing decisions: `// Phase 6b: pool is picked by LEVEL, word by DATE`
- Avoid obvious comments: `// increment counter`

**Block Comments:**
- Use `//` for multi-line blocks, not `/* */`
- First line is title/summary
- Subsequent lines provide context and rationale
- Example structure: title → problem → solution → constraints

**JSDoc/TSDoc:**
- Required for public API functions (exported from index.ts)
- Use @param, @returns, @throws tags
- Optional for internal functions if signature is self-explanatory
- Example: `/** Format integer cents as EUR: eur(86410_00) → "€86,410.00" */`

**TODO Comments:**
- Format: `// TODO: description` (no username, use git blame)
- Link to issue if exists: `// TODO: Fix race condition (issue #123)`
- Must be actionable; remove when fixed

## Function Design

**Size:**
- Keep under 50 lines; extract helpers for complex logic
- One level of abstraction per function
- Guard clauses at top for early returns

**Parameters:**
- Max 3 parameters; use object for 4+
- Destructure in parameter list: `function process({ id, name }: ProcessParams)`
- Use optional chaining and nullish coalescing for optional params

**Return Values:**
- Explicit return statements
- Return early for guard clauses
- Use Result<T, E> pattern for expected failures
- No implicit undefined; return null or Result.error explicitly

## Module Design

**Exports:**
- Named exports preferred: `export { auth } from './auth'`
- Default exports only for React components
- Service registries via index.ts barrel files
- Never re-export internal helpers from public API

**Barrel Files:**
- `index.ts` exposes public API only
- Keep internal implementation files private
- Example: `src/services/index.ts` exports auth, tts, stt, sound (not internal helpers)

**Circular Dependencies:**
- Avoided by strict layering: content → store → services → external
- If circular appears, break via index.ts re-export or third module

---

*Convention analysis: 2026-09-19*
*Update when patterns change*
