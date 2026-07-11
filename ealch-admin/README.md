# Ealch Ops Console

Internal admin console for the Ealch language-learning app: live product KPIs, user support tooling, billing, push campaigns, content workflow, AI model routing, performance monitoring, tracked links, and release/flag management.

Built with **Next.js 16 (App Router, Turbopack)**, **React 19**, **TypeScript strict**, **Drizzle ORM**, **Auth.js v5** and **CSS Modules**.

## Quickstart

```bash
pnpm i
pnpm db:migrate   # creates the schema (embedded PGlite by default — no external DB needed)
pnpm db:seed      # loads ~2,000 users, subscriptions, metrics, links, flags…
pnpm dev          # http://localhost:3000
```

The seed prints the **admin credentials at the end of its output**: four admin accounts (password `admin1234` for all) each with a **TOTP secret** and an `otpauth://` URI. Logging in requires a 6-digit authenticator code — add the printed secret to any authenticator app (or paste the `otpauth://` URI into a QR generator and scan it), then sign in with email + password + code.

## Architecture

```
src/
  proxy.ts               # Next 16 proxy (replaces middleware) — guards /admin/** → /login
  auth.ts                # Auth.js v5: credentials provider (email + password + TOTP), JWT sessions
  instrumentation.ts     # boots the in-process background workers once per server
  db/
    index.ts             # dual-driver client: node-postgres or embedded PGlite
    schema.ts            # all tables + pg enums (Drizzle)
  lib/
    rbac.ts              # role → permission matrix (can / assertCan)
    audit.ts             # audit log writer (before/after JSON snapshots)
    bus.ts               # in-process event bus + ring buffer → SSE
    workers.ts           # anomaly rule + campaign send queue
    format.ts            # EUR / compact-number / relative-time helpers
  app/
    login/               # full-page login (server action → signIn)
    admin/               # shell layout (sidebar, topbar, banners) + 9 screens
      <screen>/page.tsx  #   RSC reads via Drizzle, Suspense + skeletons
      <screen>/actions.ts#   'use server' mutations: auth → assertCan → mutate → audit → revalidate
    api/                 # typed JSON route handlers for client-side refetch (TanStack Query)
    l/[slug]/            # public tracked-link redirect (records a click, 302)
    api/status/          # public maintenance-mode endpoint polled by mobile clients
```

- **Dual-driver Drizzle.** `db()` returns a singleton Drizzle client. With `DATABASE_URL` set it uses node-postgres; without it, an **embedded PGlite** (WASM Postgres) persisted to `.data/pglite` — the whole console runs with zero external services. PGlite is single-process: run exactly one server (and don't run migrate/seed while it's up).
- **Auth.js + TOTP.** A single credentials provider verifies email, bcrypt password hash and a live TOTP code (otplib) in one step. Sessions are JWT cookies carrying `user.id` and `user.role`; `src/proxy.ts` checks the token on every `/admin/**` navigation with no DB roundtrip.
- **RBAC.** `lib/rbac.ts` holds the role→permission matrix. RSC pages pass `can(role, perm)` down to hide/disable controls; every server action re-enforces with `assertCan` regardless of what the UI showed.
- **Audit log.** Every mutation writes an `audit_log` row (`admin`, `action`, entity, before/after JSON, IP). Feature-flag and release screens surface "last changed by" from it.
- **SSE bus.** `lib/bus.ts` is an in-process EventEmitter with a 50-event ring buffer; mutations `publish(...)` signup/refund/incident/system events, and `/api/stream` streams them to the overview live feed via Server-Sent Events.
- **CSS-module token system.** `src/app/tokens.css` defines the design tokens (`--acc`, `--bg`, `--ink`, `--line`, status colors, fonts, `fadeUp`/skeleton keyframes) loaded globally; each route/component has its own `*.module.css` consuming only those vars. No Tailwind, no CSS-in-JS.

## Screens (spec §4)

| Route | Title | What it does |
| --- | --- | --- |
| `/admin/overview` | Overview | KPI cards (MAU/DAU/MRR/crash-free/churn), activity chart, live SSE feed |
| `/admin/users` | Users | URL-synced searchable table, detail drawer, support actions (ban, reset, grant, GDPR export, delete), CSV export |
| `/admin/billing` | Billing & revenue | MRR chart, plan mix, transactions, refunds/dunning |
| `/admin/notifications` | Push notifications | Template library, campaign composer with phone preview, send queue |
| `/admin/content` | Content | Lesson/scenario units, workflow (draft→review→publish), flagged content |
| `/admin/ai` | AI model routing | Per-capability model routing with cost strip and confirm-to-apply |
| `/admin/performance` | Performance | p95 latency charts, uptime, incidents + anomaly banner |
| `/admin/links` | Link tracking | Tracked short links (`/l/<slug>`), click aggregates, sparklines, archive |
| `/admin/releases` | Releases & flags | Staged rollout lifecycle, release history, per-env feature flags |

## RBAC roles

| Role | Seeded account | Access |
| --- | --- | --- |
| `super_admin` | marc@ealch.app | Everything, incl. billing writes, admin management, maintenance mode |
| `ops` | ops@ealch.app | Everything except billing writes and admin management |
| `support` | support@ealch.app | Read across the console + user support actions (ban/reset/grant/export) |
| `content_editor` | editor@ealch.app | Content and notifications read/write only |

Password for all seeded accounts: `admin1234` (TOTP secrets are printed by `pnpm db:seed`).

## Environment variables

| Variable | Default | Purpose |
| --- | --- | --- |
| `AUTH_SECRET` | `change-me` (dev) | Auth.js JWT signing secret — set a real random value in prod |
| `AUTH_TRUST_HOST` | `true` | Trust the Host header (required behind proxies/localhost) |
| `AUTH_URL` | — | Canonical origin, e.g. `https://ops.ealch.app`; an `https` value switches to secure cookies |
| `DATABASE_URL` | unset | Postgres connection string; **unset → embedded PGlite** |
| `PGLITE_DIR` | `.data/pglite` | Where the embedded PGlite database persists |

See `.env.example`.

## Background workers

Two workers start automatically **in-process** via `src/instrumentation.ts` (Next.js `register()`, Node runtime only, skipped during build):

- **Anomaly rule** (every 60s, plus once ~5s after boot): compares the last 15 minutes of each p95 series (`api_p95_ms`, `tts_p95_ms`, per region) against the trailing 24h baseline. Sustained >1.3× opens an `anomaly` incident and publishes to the live feed; recovery below 1.1× auto-resolves it.
- **Campaign send queue** (every 5s): promotes due `scheduled` push campaigns to `sending`, drips `sentCount` forward ~500–1500 per tick, and marks them `sent` with a deterministic open rate when the audience is exhausted.

Both workers guard against double-starts (`globalThis` flag) and swallow per-tick errors. **In production** you'd typically run them as separate processes instead: both are plain async functions over the same Drizzle schema, so they can be extracted into a small Node worker (e.g. `tsx` entrypoint calling the same tick functions on an interval) pointed at `DATABASE_URL` — just keep exactly one instance of each to avoid duplicate incidents/sends. Note the SSE live feed uses an in-process bus, so events published from an external worker would need a shared channel (e.g. Postgres LISTEN/NOTIFY or Redis pub/sub).

## Deploying

- **Use real Postgres**: set `DATABASE_URL` — the client switches from PGlite to node-postgres automatically. PGlite is for local dev/demo only (single process, embedded file storage).
- **Partition the events table**: `events` is an append-heavy analytics table (indexed on `name` and `created_at`). At production volume, convert it to native Postgres range partitioning by `created_at` (monthly partitions + retention drops) instead of one big heap.
- **Secure cookies**: set `AUTH_URL` to your `https://` origin (and a strong `AUTH_SECRET`) so Auth.js issues `__Secure-` cookies; `src/proxy.ts` reads the same setting.
- **Build & run**: `pnpm build && pnpm start`. Workers boot with the server via instrumentation.
- **E2E smoke tests**: `pnpm test:e2e` (Playwright, `tests/`). The config reuses a server already listening on `:3100` or starts one (`AUTH_URL=http://localhost:3100 PORT=3100 pnpm start`) against a **migrated + seeded** database. Tests run single-worker because they mutate shared state (maintenance mode, flags, routing) and restore what they change. Browsers are expected preinstalled (`executablePath` in `playwright.config.ts`); point `PLAYWRIGHT_BROWSERS_PATH` at your browser install if it differs.
