# Codebase Structure

**Analysis Date:** 2026-09-19

## Directory Layout

```
Ealchapp/ (monorepo root)
├── ealch-v2/                      # Mobile learning app (Expo/React Native)
│   ├── app/                       # Expo Router screens and navigation
│   ├── src/
│   │   ├── components/            # React components (UI, drills, lesson, exam)
│   │   ├── services/              # Business logic (content, auth, tts, stt, sync)
│   │   ├── store/                 # Zustand state management (app, progress, UI)
│   │   ├── content/               # Content schema, seed.json, validators
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── i18n/                  # Internationalization (FR/EN)
│   │   ├── theme/                 # Style tokens, colors, typography
│   │   ├── utils/                 # Helper functions
│   │   └── config/                # App configuration
│   ├── assets/                    # Images, fonts, audio files
│   ├── android/                   # Android native code (Gradle)
│   ├── supabase/                  # Local Supabase setup
│   └── package.json               # Dependencies (npm)
│
├── ealch-admin/                   # Web authoring tool (Next.js)
│   ├── src/
│   │   ├── app/                   # Next.js app directory
│   │   │   ├── admin/             # Admin pages (content, users, billing)
│   │   │   ├── api/               # API routes
│   │   │   └── auth/              # Auth pages
│   │   ├── components/            # Reusable React components
│   │   ├── db/                    # Drizzle schema and migrations
│   │   ├── lib/                   # Utilities and helpers
│   │   ├── scripts/               # Content authoring scripts
│   │   └── tests/                 # Test files
│   ├── drizzle/                   # Drizzle migrations
│   ├── public/                    # Static assets
│   ├── exam-blueprints/           # Exam paper templates
│   ├── gates/                     # Content validation guards
│   ├── UDL/                       # Universal Design for Learning specs
│   ├── package.json               # Dependencies (pnpm)
│   └── tsconfig.json              # TypeScript config
│
├── AUDIT-EVIDENCE/                # Content audit results and evidence
│
├── .planning/                     # Project planning documents
│   └── codebase/                  # Generated codebase maps (STACK.md, etc.)
│
├── .github/                       # GitHub Actions CI/CD
│
└── [config files]                 # tsconfig.json, .gitignore, etc.
```

## Directory Purposes

### ealch-v2/ (Mobile App)

**ealch-v2/app/**
- Purpose: Expo Router file-based routing and screen definitions
- Contains: `.tsx` files for each screen (home, lesson, exam, flashcards, etc.)
- Key files: `index.tsx` (entry), `home.tsx` (home screen), `lesson.tsx` (lesson viewer), `exam.tsx` (exam interface)
- Subdirectories: None (flat routing structure)

**ealch-v2/src/components/**
- Purpose: Reusable React Native UI components
- Contains: Component definitions (`.tsx`), component tests (`.test.ts`)
- Key files: `LessonRich.tsx` (lesson renderer), `MissionRich.tsx` (mission/section renderer), `QuizRoundsView.tsx` (quiz UI), `Type.tsx` (text styling), `ui.tsx` (basic UI primitives)
- Subdirectories: None (flat, ~60+ component files)

**ealch-v2/src/services/**
- Purpose: Business logic services for content, auth, audio, speech, sync
- Contains: Service modules (`.ts`) with exported functions
- Key files: `content.ts` (three-tier loading), `auth.ts` (Supabase auth), `tts.ts` (speech synthesis), `stt.ts` (speech recognition), `sync.ts` (progress upload), `purchases.ts` (RevenueCat billing)
- Subdirectories: None (flat, ~25 service files)

**ealch-v2/src/store/**
- Purpose: Zustand store definitions and state logic
- Contains: Store hooks (`.ts`), selector logic (`.ts`), tests (`.test.ts`)
- Key files: `useStore.ts` (app state: auth, prefs), `useProgress.ts` (progress tracking), `useEntitlement.ts` (subscription status), `progress.logic.ts` (SRS scheduler, attempt logging)
- Subdirectories: None (flat, ~15 store files)

**ealch-v2/src/content/**
- Purpose: Content schema, seed data, and validation
- Contains: TypeScript schema definitions, seed.json, validation functions, tests
- Key files: `schema.ts` (5276 lines - canonical content type definitions), `seed.json` (bundled content corpus), validators (validateCorpus, validateDensity, etc.)
- Subdirectories: None (flat)
- Critical: `schema.ts` must load in Node.js with zero runtime imports (used by publish pipeline, admin tool, tests)

**ealch-v2/src/i18n/**
- Purpose: Internationalization strings and locale handling
- Contains: Localized strings for FR/EN, useT hook
- Key files: `strings.ts` (all UI copy), `useT.ts` (hook to access strings)
- Subdirectories: None

**ealch-v2/src/theme/**
- Purpose: Design tokens, colors, typography
- Contains: Theme definitions, color palettes
- Key files: `useTheme.ts` (hook to access theme)
- Subdirectories: None

**ealch-v2/src/utils/**
- Purpose: Shared utility functions
- Contains: Helper functions for time, SRS, deck logic, etc.
- Key files: `speakDeck.logic.ts` (playlist deck management), `time.ts` (time formatting)
- Subdirectories: None

**ealch-v2/src/config/**
- Purpose: App configuration
- Contains: Configuration constants and environment setup
- Key files: `config.ts` (app-level settings)
- Subdirectories: None

**ealch-v2/src/hooks/**
- Purpose: Custom React hooks
- Contains: Hooks for app-specific behaviors
- Key files: `useAlarmWatcher.ts`, `useCardHeight.ts`, `useReadingBrightness.ts`
- Subdirectories: None

### ealch-admin/ (Authoring Tool)

**ealch-admin/src/app/admin/**
- Purpose: Admin console pages for content management and operations
- Contains: Next.js pages (`.tsx`) and layout files
- Key subdirectories:
  - `content/` — Content authoring (items, lessons, exams, den)
  - `users/` — User management
  - `billing/` — Subscription and payment analytics
  - `releases/` — App release management
  - `curriculum/` — Unit and track management
  - `ai/` — LLM content generation
  - `performance/` — Analytics
  - `overview/` — Dashboard

**ealch-admin/src/app/api/**
- Purpose: Backend API routes for admin frontend
- Contains: API endpoint handlers
- Key files: Various route handlers for CRUD operations

**ealch-admin/src/components/**
- Purpose: Reusable admin UI components
- Contains: Form components, data tables, modals
- Key files: Item/lesson forms, exam task editors, filters

**ealch-admin/src/db/**
- Purpose: Database schema and ORM setup
- Contains: Drizzle schema definitions, database client
- Key files: `schema.ts` (5000+ lines - Postgres table definitions), `index.ts` (Drizzle client)
- Critical: Schema mirrors `ealch-v2/src/content/schema.ts` exactly; any drift breaks the app

**ealch-admin/src/lib/**
- Purpose: Utility libraries and helpers
- Contains: Auth middleware, type helpers, validation functions
- Key files: Various utility modules

**ealch-admin/scripts/**
- Purpose: Content authoring and publishing scripts
- Contains: Node.js/TypeScript scripts for bulk operations
- Key files:
  - `author-*.ts` — Batch content creation scripts (one per lesson/unit)
  - `publish-content.ts` — Validates and ships OTA snapshot
  - `rollback-content.ts` — Reverts to previous snapshot
  - `generate-content.ts` — LLM-assisted content generation
  - Content verification scripts (_a1_*, _a2_*, etc. - audit/repair scripts)
- Subdirectories: None

**ealch-admin/drizzle/**
- Purpose: Database migration files
- Contains: SQL migration scripts
- Subdirectories: None

**ealch-admin/gates/**
- Purpose: Content validation guards
- Contains: Rule definitions that prevent invalid content from shipping
- Key files: Guards that check item properties, lesson structure, exam consistency

**ealch-admin/exam-blueprints/**
- Purpose: Exam paper templates and specifications
- Contains: JSON/TS definitions of exam papers
- Key files: Blueprint files for TEF, TCF, DELF papers

**ealch-admin/UDL/**
- Purpose: Universal Design for Learning specifications
- Contains: Accessibility and learning design prompts
- Key files: UDL guidelines for LLM content generation

## Key File Locations

### Mobile App Entry Points

**ealch-v2/app/index.tsx**
- Purpose: Root navigation entry point
- Behavior: Routes to splash/onboarding or home based on onboarded flag

**ealch-v2/app/home.tsx**
- Purpose: Main home/dashboard screen
- Behavior: Displays content browse, streak, due cards, quick-access tiles (den, exam, etc.)

**ealch-v2/app/lesson.tsx**
- Purpose: Lesson viewer with paging
- Behavior: Loads lesson from corpus, renders LessonRich component

**ealch-v2/app/exam.tsx**
- Purpose: Exam paper interface
- Behavior: Coordinates exam task sequencing and scoring

### Mobile App Configuration

**ealch-v2/package.json**
- Purpose: Project manifest and dependencies
- Key: Lists Expo version, React Native version, all libraries

**ealch-v2/app.json**
- Purpose: Expo project configuration
- Key: App name, version, platforms, plugins

**tsconfig.json**
- Purpose: TypeScript configuration
- Key: Path aliases (`@/` maps to `src/`)

### Mobile App Core Logic

**ealch-v2/src/services/content.ts**
- Purpose: Three-tier content loading with fallback strategy
- Size: ~800 lines
- Key functions: adoptedForLaunch, shouldAdopt, adoptSnapshot, verifySnapshot, mergeCorpus

**ealch-v2/src/services/content.logic.ts**
- Purpose: Query functions for corpus navigation
- Size: ~1,100 lines
- Key functions: getLesson, getItem, selectItems, examPapersFor, lessonsOfUnit, anchorForItem

**ealch-v2/src/store/useStore.ts**
- Purpose: App-wide state (auth, prefs, settings)
- Size: ~400 lines
- Persistence: AsyncStorage with Zustand persist middleware

**ealch-v2/src/store/useProgress.ts**
- Purpose: Progress tracking and SRS scheduler
- Size: ~600 lines
- Key functions: composeSession, greetDue, dueCards, streak, topWeaknesses

**ealch-v2/src/store/progress.logic.ts**
- Purpose: Pure SRS scheduling logic (no side effects)
- Size: ~2,500 lines
- Key functions: scheduler for attempt decay, review slots, streak freezes

**ealch-v2/src/content/schema.ts**
- Purpose: Canonical content type definitions (shared with admin/publish)
- Size: ~5,300 lines
- Critical: Must be Node.js-loadable with zero runtime imports
- Used by: Mobile app, admin tool, publish pipeline, LLM generation

### Admin Tool Entry Points

**ealch-admin/src/app/admin/overview/page.tsx**
- Purpose: Admin dashboard/stats
- Behavior: Displays key metrics, quick links

**ealch-admin/src/app/admin/content/items/page.tsx**
- Purpose: Item list and search
- Behavior: Filterable grid of all content items

**ealch-admin/src/app/admin/content/items/[id]/page.tsx**
- Purpose: Item editor
- Behavior: Form for creating/updating item properties

**ealch-admin/src/app/admin/content/exams/page.tsx**
- Purpose: Exam paper management
- Behavior: Lists and creates exam papers

### Admin Tool Configuration

**ealch-admin/package.json**
- Purpose: Project manifest
- Key: Uses pnpm, Next.js, Drizzle ORM, TypeScript

**ealch-admin/tsconfig.json**
- Purpose: TypeScript configuration
- Key: Path aliases, strict mode

**ealch-admin/next.config.ts**
- Purpose: Next.js configuration
- Key: Build settings, experimental features

### Admin Tool Core Logic

**ealch-admin/src/db/schema.ts**
- Purpose: Postgres schema definitions (Drizzle ORM)
- Size: ~3,500 lines
- Defines: Users, content_*, subscriptions, audit logs, admin settings
- Critical: Must mirror `ealch-v2/src/content/schema.ts`

**ealch-admin/src/db/index.ts**
- Purpose: Drizzle ORM client and database connection
- Behavior: Initializes connection to Supabase Postgres

**ealch-admin/scripts/publish-content.ts**
- Purpose: Main publishing pipeline
- Behavior: Validates corpus, cuts OTA snapshot, uploads to Supabase Storage

**ealch-admin/scripts/generate-content.ts**
- Purpose: LLM-assisted content generation
- Behavior: Calls Claude API to generate items/lessons, validates against schema

## Naming Conventions

### Files

**Mobile App (ealch-v2):**
- `*.tsx` — React components (PascalCase)
- `*.ts` — Logic, services, hooks, stores (camelCase or descriptive names)
- `*.test.ts` — Test files (parallel to source)
- `index.ts` — Directory exports (barrels)
- `seed.json` — Bundled content corpus
- `schema.ts` — Type definitions

**Admin Tool (ealch-admin):**
- `*.tsx` — React components (PascalCase)
- `*.ts` — TypeScript modules (camelCase)
- `*.test.ts` — Test files
- `page.tsx` — Next.js pages (in app directory)
- `layout.tsx` — Next.js layouts
- `actions.ts` — Server actions
- `schema.ts` — Drizzle table definitions
- `*.md` — Documentation

### Directories

**Patterns:**
- Plural nouns for collections: `components/`, `services/`, `scripts/`, `pages/`
- Feature-based grouping: `admin/content/`, `admin/users/`, `admin/billing/`
- kebab-case for feature names: `author-lessons/`, `publish-pipeline/`
- Snake_case for database: Drizzle enum names like `user_status`, `sub_plan`

**Special Patterns:**
- `[id]` — Next.js dynamic routes
- `_private` — Private/internal modules (leading underscore)
- `__tests__` — Grouped test directories (if used)

## Where to Add New Code

### New Learning Content (Mobile + Admin)

**New Lesson:**
1. Author lesson JSON in ealch-admin UI (`src/app/admin/content/den/` or `items/`)
2. Define new unit in database via admin tool
3. Assign items to lesson via content editor
4. Mark as `published` to include in OTA snapshot
5. Test rendering: `ealch-v2/src/components/LessonRich.tsx` will render Lesson.sections

**New Content Type:**
1. Define type in `ealch-v2/src/content/schema.ts` (canonical)
2. Add Drizzle table to `ealch-admin/src/db/schema.ts` (mirror exactly)
3. Add validation in `ealch-v2/src/content/schema.ts` (validateCorpus)
4. Update admin UI in `ealch-admin/src/app/admin/content/` to edit type
5. Test via `ealch-admin/scripts/publish-content.ts` dry-run

### New Feature (Mobile App)

**New Screen:**
- Add route: `ealch-v2/app/feature-name.tsx`
- Add components: `ealch-v2/src/components/FeatureName*.tsx`
- Add state if needed: update `ealch-v2/src/store/useStore.ts` or create new store
- Add services if needed: `ealch-v2/src/services/feature.ts`
- Integrate to home: add link in `ealch-v2/app/home.tsx`

**New Drill Type:**
- Add to `DRILL_KINDS` in `ealch-v2/src/content/schema.ts`
- Create renderer: `ealch-v2/src/components/DrillType.tsx`
- Update content logic to select items: `ealch-v2/src/services/content.logic.ts` → `selectItems({drillKinds: ['newType']})`
- Add to lesson/mission: assign drill kind via admin UI

### New Admin Page

**New Management Section:**
- Add page: `ealch-admin/src/app/admin/section-name/page.tsx`
- Add components: `ealch-admin/src/components/Section*.tsx`
- Add server actions: `ealch-admin/src/app/admin/section-name/actions.ts`
- Database queries: Use Drizzle ORM in actions
- Hook to sidebar: Add navigation link

### New Service (Mobile)

**New Business Logic:**
- Create: `ealch-v2/src/services/feature-name.ts`
- Export functions and types
- Call from components via hooks or direct import
- Example: `ealch-v2/src/services/auth.ts` — Supabase auth wrapper

### New Validation Guard

**Content Validation Rule:**
- Add to `ealch-admin/gates/` — define guard function
- Integrate to `publish-content.ts` — call during validation
- Add test: `ealch-admin/gates/guard-name.test.ts`
- Example: Check no unvoiced fricatives at word-final position (French phonotactics)

### New Content Batch Script

**Bulk Content Generation:**
- Create: `ealch-admin/scripts/author-lessonname-batch.ts`
- Fetch/compute items via LLM or corpus logic
- Write to database via Drizzle ORM
- Follow pattern of existing scripts (e.g., `author-pronoms-sujets-batch.ts`)
- Run: `pnpm content:lessonname`

## Special Directories

**ealch-v2/src/content/seed.json**
- Purpose: Bundled content corpus included in app binary
- Source: Generated by `ealch-admin/scripts/seed-cut.ts` during publish
- Committed: Yes (git-tracked)
- Size: ~5-10 MB depending on snapshot version
- Usage: Always loaded first, fallback if no OTA available

**ealch-v2/android/**
- Purpose: Android native code and build configuration
- Source: Expo-managed (generated from `app.json`)
- Committed: No (in `.gitignore`, regenerated per build)
- Contents: Gradle files, proguard config, manifest

**.planning/codebase/**
- Purpose: Auto-generated codebase maps (STACK.md, ARCHITECTURE.md, STRUCTURE.md)
- Source: Generated by `/gsd-map-codebase` tool
- Committed: Yes (reference docs for planning)

**AUDIT-EVIDENCE/**
- Purpose: Content audit results and lesson-by-lesson verification
- Source: Human-audited content with evidence (screenshots, notes)
- Committed: Yes
- Contains: Subdirectories per lesson (a1-03/, sons.06/, etc.)

**ealch-admin/drizzle/**
- Purpose: Database migrations
- Source: Generated by `drizzle-kit generate` when schema changes
- Committed: Yes (version control for schema)
- Usage: Applied on deploy via `pnpm db:migrate`

---

*Structure analysis: 2026-09-19*
