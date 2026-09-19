# Architecture

**Analysis Date:** 2026-09-19

## System Overview

```text
┌──────────────────────────────────────────────────────────────────┐
│                    Mobile User Interface                          │
│              ealch-v2/app (Expo Router screens)                  │
│  ┌────────────┬─────────────┬─────────────┬──────────────────┐   │
│  │   Home     │   Lessons   │   Exams     │   Flashcards     │   │
│  │ (Den)      │ (Lessons)   │ (Examiner)  │ (Vocab/Drills)   │   │
│  └────────────┴─────────────┴─────────────┴──────────────────┘   │
└────────────────────┬─────────────────────────────────────────────┘
                     │
        ┌────────────┴─────────────────┐
        ▼                              ▼
┌──────────────────────────┐  ┌──────────────────────────┐
│  Mobile Services Layer   │  │   Mobile State Layer     │
│  ealch-v2/src/services/  │  │   ealch-v2/src/store/    │
│                          │  │                          │
│ • content.ts             │  │ • useStore (app state)   │
│ • auth.ts                │  │ • useProgress (SRS log)  │
│ • tts.ts (speech)        │  │ • useEntitlement (paid)  │
│ • stt.ts (recognition)   │  │ • useUI (overlays)       │
│ • sync.ts                │  │                          │
│ • purchases.ts           │  │ Storage: AsyncStorage +  │
└────────────┬─────────────┘  │ FileSystem (snapshot)    │
             │                │                          │
             └────────────────┴──────────────┬───────────┘
                              │
                    ┌─────────┴──────────┐
                    ▼                    ▼
        ┌──────────────────────┐  ┌──────────────────┐
        │  Content Loading     │  │  Supabase Auth   │
        │  (3-tier fallback)   │  │  & Realtime DB   │
        │                      │  │                  │
        │ 1. seed.json bundled │  │ • Auth: JWT      │
        │ 2. Cached snapshot   │  │ • Progress sync  │
        │ 3. Remote OTA        │  │ • Payments       │
        └──────────┬───────────┘  └────────┬─────────┘
                   │                       │
                   └───────────┬───────────┘
                               │
                    ┌──────────┴──────────┐
                    ▼                     ▼
            ┌──────────────────┐  ┌──────────────────┐
            │   Supabase       │  │   Expo Updates   │
            │   Postgres DB    │  │   (OTA Storage)  │
            │                  │  │                  │
            │ • Users          │  │ Over-the-air     │
            │ • Subscriptions  │  │ snapshot delivery│
            │ • Progress       │  │                  │
            │ • Content        │  │                  │
            │ • Exams          │  │                  │
            └──────────────────┘  └──────────────────┘
                    ▲
                    │
        ┌───────────┴────────────┐
        │                        │
        ▼                        ▼
┌──────────────────────┐  ┌──────────────────────┐
│ Admin Frontend       │  │ Admin Services       │
│ ealch-admin/src/app  │  │ ealch-admin/src/lib  │
│                      │  │                      │
│ • Content Editor     │  │ • Drizzle ORM        │
│ • Content Review     │  │ • Content validation │
│ • User Management    │  │ • Publishing pipeline│
│ • Billing Dashboard  │  │ • LLM generation     │
│ • Exam Builder       │  │ • Supabase client    │
│ • Release Manager    │  │                      │
└──────────────────────┘  └──────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Lesson Screen | Render interactive lesson sections with various skill drills | `ealch-v2/app/lesson.tsx` |
| Content Service | Three-tier content loading (seed → cache → OTA), validation, queries | `ealch-v2/src/services/content.ts` |
| Progress Store | SRS scheduler, attempt logging, level tracking | `ealch-v2/src/store/useProgress.ts` |
| App Store | User preferences, auth state, billing settings | `ealch-v2/src/store/useStore.ts` |
| TTS Service | French speech synthesis, audio generation | `ealch-v2/src/services/tts.ts` |
| STT Service | Speech-to-text recognition and scoring | `ealch-v2/src/services/stt.ts` |
| Content Admin | Web UI for authoring lessons, drills, exams | `ealch-admin/src/app/admin/content/` |
| Publishing Pipeline | Validate, transform, and ship content snapshots | `ealch-admin/scripts/publish-content.ts` |
| Database Schema | Postgres schema for users, content, progress, exams | `ealch-admin/src/db/schema.ts` |

## Pattern Overview

**Overall:** Distributed full-stack learning platform with content authoring backend, OTA distribution, and mobile-first learning frontend.

**Key Characteristics:**
- **Dual-app architecture:** Mobile learner (Expo) + web authoring tool (Next.js), both connecting to Supabase
- **Content-first design:** All learning content defined in immutable schema (`src/content/schema.ts`), shipped as JSON snapshots
- **Three-tier content loading:** Binary-bundled seed.json + filesystem cache + remote OTA ensure offline-first learner experience
- **Spaced repetition:** Zustand-based SRS scheduler tracking item attempts by (itemId, modality) tuple
- **Real-time sync:** Supabase Postgres + AsyncStorage for progress persistence across sessions and devices
- **Generative content pipeline:** LLM-assisted authoring with human review gates

## Layers

**Presentation Layer (Mobile):**
- Purpose: Render interactive learning UI for learners
- Location: `ealch-v2/app/`, `ealch-v2/src/components/`
- Contains: Expo Router screens (lesson, exam, flashcard, etc.), React components (LessonRich, MissionRich, QuizRoundsView, etc.)
- Depends on: Services layer for content and state
- Used by: User interaction (taps, speech, text input)

**Services Layer (Mobile):**
- Purpose: Business logic for content loading, authentication, audio I/O, spaced repetition, syncing
- Location: `ealch-v2/src/services/`
- Contains: content.ts (three-tier loading), auth.ts (Supabase), tts.ts (speech synthesis), stt.ts (recognition), sync.ts (progress), purchases.ts (billing)
- Depends on: Supabase client, AsyncStorage, FileSystem, external APIs (Adapty, Azure, etc.)
- Used by: Components and stores for fetching/saving data

**State Management Layer (Mobile):**
- Purpose: Global app state, user preferences, progress tracking, entitlements
- Location: `ealch-v2/src/store/`
- Contains: useStore.ts (app prefs, auth), useProgress.ts (attempt log, SRS scheduler), useEntitlement.ts (subscription status)
- Depends on: Services for server sync, AsyncStorage for persistence
- Used by: Components for app settings, progress queries, level calculations

**Shared Schema:**
- Purpose: Single source of truth for content structure, validated by both app and authoring tool
- Location: `ealch-v2/src/content/schema.ts`
- Contains: TypeScript interfaces for Lesson, Item, Exam, Unit, Drill, Scenario, etc.; validation functions
- Depends on: None (zero runtime imports for Node.js compatibility)
- Used by: Mobile app (content service), admin tool (review editors), publish pipeline, LLM generation

**Admin Frontend Layer (Web):**
- Purpose: UI for authoring, reviewing, and managing learning content and users
- Location: `ealch-admin/src/app/admin/`
- Contains: Next.js pages (content/den, content/items, content/exams, users, billing, releases)
- Depends on: Services layer for database access, Supabase auth
- Used by: Admin users for CRUD operations on content

**Admin Services Layer (Web):**
- Purpose: Business logic for database operations, content validation, publishing, LLM calls
- Location: `ealch-admin/src/lib/`, `ealch-admin/scripts/`
- Contains: Drizzle ORM helpers, auth middleware, LLM clients, validation guards, publish/rollback logic
- Depends on: Supabase Postgres, LLM APIs (Claude)
- Used by: Admin UI pages and publishing pipeline

**Database Layer:**
- Purpose: Persistent storage for users, content, progress, subscriptions, exams
- Location: Supabase Postgres (defined via Drizzle schema in `ealch-admin/src/db/schema.ts`)
- Contains: Tables for users, content_* (items, lessons, exams, etc.), user_progress, subscriptions, audit logs
- Depends on: None (external service)
- Used by: Mobile app (via Supabase client), admin tool (via Drizzle ORM)

## Data Flow

### Primary Learning Flow

1. **Launch:** User opens app (`ealch-v2/app/index.tsx`)
2. **Content bootstrap:** ContentService loads in layers:
   - Immediately use `seed.json` bundled in app (`ealch-v2/src/content/seed.json`)
   - In background, check filesystem cache (`Paths.document/content-snapshot.txt`)
   - Fetch remote manifest and OTA snapshot from Supabase Storage if newer version exists
   - Call `validateCorpus()` and merge with seed
3. **Progress load:** useProgress hydrates session log from AsyncStorage
4. **Navigation:** Home screen displays units/lessons from corpus, user's progress (streak, due cards)
5. **Lesson open:** LessonRich component renders Lesson.sections, queries content service for items
6. **Practice:** User interacts with drill (flashcard, dictation, sentence, roleplay, etc.)
7. **Attempt recorded:** Service logs {itemId, modality, outcome} to attempt log
8. **SRS scheduled:** Scheduler calculates next review date
9. **Sync to server:** sync.ts periodically uploads progress to Supabase (`users.session_log` JSONB)
10. **Offline resilience:** If no internet, app works entirely from cached content + local progress

### Content Authoring Flow

1. **Author draft:** Admin creates lesson/item via content editor UI (`ealch-admin/src/app/admin/content/`)
2. **Store to DB:** Drizzle ORM writes to Supabase Postgres
3. **Review gate:** Content marked `in_review` status, awaits approval
4. **Approval:** Editor marks as `published`
5. **Publish job:** `content:publish` script validates corpus, cuts OTA snapshot, uploads to Supabase Storage
6. **Version bump:** Manifest updated with new snapshot hash and version number
7. **App detects:** On next app check, content service downloads new snapshot to filesystem cache
8. **User receives:** Next lesson load pulls from updated corpus

### Exam Taking Flow

1. **Exam seed load:** User opens Examiner, queries `examPapersFor(format)` from corpus
   - Exam content is **snapshot-only** (never in bundled seed.json)
   - Offline: "No exams available yet" until OTA snapshot cached
2. **Paper render:** ExamSection renders exam tasks (CO_MCQ, PO_Interaction, PE_Essay, etc.)
3. **Attempt record:** User answers recorded in attempt log with exam task ID
4. **Grading:** examGrader.ts scores written/spoken responses using deterministic rules or LLM
5. **Report generate:** ExamReportMarking.tsx displays results with section breakdowns, timing
6. **Sync:** Report sent to server for user's exam history

**State Management:**
- **App state:** Persisted in AsyncStorage via Zustand (user prefs, auth, billing)
- **Progress state:** Session log and attempt log held locally in AsyncStorage (SRS not server-driven)
- **Content state:** Immutable Corpus from snapshot (never modified), queries cached in memory
- **Server sync:** Periodic (on-demand or background) upload of session log via Supabase Realtime or REST
- **Offline-first:** Full app experience without network; sync opportunistically when online

## Key Abstractions

**Corpus:**
- Purpose: Immutable JSON representation of all learning content (lessons, items, exams, drills)
- Examples: `ealch-v2/src/content/seed.json` (bundled), OTA snapshots (downloaded), merged result held in content service state
- Pattern: Validated against schema before use, cached, queried via content.logic functions

**Content Item:**
- Purpose: Smallest unit of language knowledge (word, phrase, or sentence) with multiple drill types and SRS tracking
- Examples: Every flashcard, dictation prompt, sentence drill uses an Item with an ID
- Pattern: {id, fr, en, kind, level, skills[], drillKinds[], modality[], ...metadata}

**Lesson:**
- Purpose: Curated progression through multiple items with narrative and guided practice
- Examples: "sons.01.l1" (pronunciation intro), "a1.03" (gender agreement)
- Pattern: {id, intro, sections[], narration?, quiz?} where sections contain missions and drills

**Drill:**
- Purpose: Interactive practice activity exercising one modality (flashcard, dictation, roleplay, etc.)
- Examples: Flashcard deck, voiceflash deck, sentence drills, exam tasks
- Pattern: Specialized component per drill kind, queries corpus for eligible items, records attempts

**Zustand Store:**
- Purpose: Client-side global state for app preferences and progress
- Examples: useStore (auth, lang, sound), useProgress (SRS scheduler, attempt log), useEntitlement (subscription)
- Pattern: Persist middleware writes to AsyncStorage, selectors enable granular re-renders

**Service:**
- Purpose: Singleton business logic not tied to a component
- Examples: content (three-tier loading), auth (Supabase), tts (speech synthesis), sync (progress upload)
- Pattern: Module-level object with methods, hydrated once at app start, accessed via hooks or direct import

**Drizzle ORM Schema:**
- Purpose: Type-safe Postgres schema with relationships and constraints
- Examples: `ealch-admin/src/db/schema.ts` defines admin_users, content_items, user_progress, etc.
- Pattern: pgTable definitions with pgEnum, index, uniqueIndex; migrations via Drizzle Kit

## Entry Points

**Mobile App:**
- Location: `ealch-v2/app/index.tsx`
- Triggers: User launches app
- Responsibilities: Check if user onboarded, route to splash/onboarding or home

**Mobile Home Screen:**
- Location: `ealch-v2/app/home.tsx`
- Triggers: User navigates to home tab
- Responsibilities: Load content corpus, compute streak/due cards, render browse fold, quick-access tiles (den, exam, etc.)

**Lesson Screen:**
- Location: `ealch-v2/app/lesson.tsx`
- Triggers: User selects lesson from home or breadcrumb
- Responsibilities: Load Lesson from corpus, render LessonRich, manage pager state

**Exam Screen:**
- Location: `ealch-v2/app/exam.tsx`
- Triggers: User opens Examiner and selects paper
- Responsibilities: Load exam paper, render ExamSection, coordinate task sequencing

**Admin Dashboard:**
- Location: `ealch-admin/src/app/admin/overview/page.tsx`
- Triggers: Admin user logs in
- Responsibilities: Display stats, quick links to content, users, billing

**Admin Content Editor:**
- Location: `ealch-admin/src/app/admin/content/items/[id]/page.tsx`
- Triggers: Admin selects item to edit
- Responsibilities: Render form, validate input, save to Postgres

**Publish Pipeline:**
- Location: `ealch-admin/scripts/publish-content.ts`
- Triggers: Manual `pnpm content:publish` or CI/CD
- Responsibilities: Validate full corpus, cut OTA snapshot, upload to Supabase Storage, update manifest

## Architectural Constraints

- **No global database listener:** Exam content is snapshot-only; there is no server-pushed update mechanism for active exams
- **Offline-first:** Learner must work from bundled seed.json or cached OTA; no internet = no new content
- **Schema immutability:** `ealch-v2/src/content/schema.ts` is the canonical definition; both ealch-v2 and ealch-admin must load and validate against it
- **SRS local:** Attempt log lives on device; spaced repetition scheduling is not server-driven
- **Single snapshot per version:** Only one OTA snapshot is current; older snapshots are not served
- **Modality separation:** Item review tracked separately by (itemId, modality) to allow independent SRS decay curves

## Error Handling

**Strategy:** Graceful degradation—services never throw exceptions that crash the app; all errors are caught and logged with fallbacks.

**Patterns:**
- Content service: If snapshot download fails, use seed + warn. If validation fails, use last known good snapshot.
- Auth service: If Supabase down, use guest mode. If sync fails, queue attempts locally and retry on next session.
- TTS/STT: If synthesis fails, use fallback audio. If recognition fails, mark as skip and log error.
- Sync: If progress upload fails, cache locally and retry next session. Never drop local progress.
- Admin publish: Validation errors block publish, with detailed error messages to author. No silent failures.

## Cross-Cutting Concerns

**Logging:**
- Mobile: Console.log with tagged messages (content, auth, sync); logged attempts feed SRS scheduler
- Admin: Audit log in Postgres tracks all content changes by admin user
- Approach: Structured logging, error context preserved for debugging

**Validation:**
- Content: `validateCorpus()` checks all items, lessons, exams against schema before shipping or loading
- Lesson rendering: `validateDensity()` ensures drill cards fit on-screen without clipping
- Item probes: `corpus:probe()` confirms item appears in corpus and is eligible for requested drill
- Approach: Fail early, reject invalid content at boundary, never ship or render invalid data

**Authentication:**
- Mobile: JWT via Supabase, stored in AsyncStorage, auto-refresh via Supabase middleware
- Admin: Email + password with TOTP 2FA, session stored in Supabase auth
- Approach: Supabase-managed, RLS policies gate database access

**Authorization (RLS):**
- Mobile app: RLS policies allow users to read public content, write their own progress
- Admin: RLS policies restrict admin tables to authenticated admins with matching role
- Approach: PostgreSQL row-level security enforced server-side

---

*Architecture analysis: 2026-09-19*
