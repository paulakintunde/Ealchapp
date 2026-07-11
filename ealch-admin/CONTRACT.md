# Ealch Ops Console — Build Contract (for coding agents)

Next.js 16.2 App Router + TS strict. **Read `AGENTS.md`**: Next 16 differs from training data — `proxy.ts` replaces middleware, Turbopack default, check `node_modules/next/dist/docs/` when unsure. React 19, `next-auth@5 beta`, Drizzle ORM.

## Already built — import, do not recreate
- `@/db` → `db(): Promise<DB>` (dual node-postgres/PGlite) + `schema` (all tables). Always `const d = await db()`.
- `@/db/schema` → tables + pg enums (see file for exact columns).
- `@/auth` → `auth()` (session with `user.id`, `user.role`), `signIn`, `signOut`, `handlers`.
- `@/lib/rbac` → `Role`, `Permission`, `can(role, perm)`, `assertCan(role, perm)` (throws), `ROLE_LABEL`.
- `@/lib/audit` → `audit({adminId, action, entityType, entityId, before, after})`.
- `src/app/tokens.css` → CSS custom props (loaded globally in root layout). Fonts exposed as `var(--font-ui)` and `var(--font-serif)`.
- `src/proxy.ts` guards `/admin/**` → redirects to `/login`.
- Root `/` redirects to `/admin/overview`.

## Design tokens (final — use CSS vars, never raw hex except chart series greys #C9D2CC/#C4CBC6 and avatar palettes)
`--acc #0FA894 · --accBright · --bg #F2F3F1 · --card #FFF · --ink #13181B · --mut #66716C · --line #E3E6E1 · --sb #0E1114 · --sbTx #EDEFEA · --ok #1C9E6E · --warn #C97B2D · --bad #C2453A`
Cards: `background:var(--card); border:1px solid var(--line); border-radius:14px`. Base font 13.5px `var(--font-ui)`; page titles & big numbers `var(--font-serif)`.
KPI card: 11px uppercase 0.08em label in --mut · 22–24px w700 value · delta 11.5px w600 (`--ok` when good).
Chips: `font-size:11px; font-weight:700; padding:3px 9px; border-radius:9px` tinted `color-mix(in srgb, <color> 12%, transparent)` + color text.
Pill filters: h28 r14 1px border; active = `--acc` border + 9% acc bg + acc text.
Toggles: 36×21 r11, knob 16px white translateX(13px); on = `--acc` (maintenance = `--bad`).
Table: header row 10.5px uppercase 0.08em w600 --mut, 9px 18px pad, 1px --line bottom; rows 11px 18px pad, hover `color-mix(in srgb, var(--acc) 4%, transparent)`.
Section entrance: `animation: fadeUp 0.35s ease both` (keyframes in tokens.css). Skeletons: `.skeleton` class, sized exactly to final content (no layout shift). Charts (Recharts): 200ms ease-out entrance, teal `var(--acc)`, grid `#E3E6E1`.

## Conventions
- **Styling**: CSS Modules (`styles.module.css` per route/component) using the vars above. No Tailwind, no styled-jsx, no inline mega-styles (small dynamic inline styles OK).
- **Queries**: RSC reads via Drizzle directly in `page.tsx` (async server component) — wrap dynamic parts in `<Suspense>` with skeletons. Client-side refetch/interactivity: typed route handlers under `src/app/api/**` returning JSON + TanStack Query (`@/components/providers` exposes `QueryProvider`, already mounted in admin layout by the shell).
- **Mutations**: server actions in `actions.ts` (`'use server'`) colocated with the screen. EVERY mutation: `const session = await auth(); assertCan(session?.user.role, '<perm>');` → mutate → `audit(...)` → `revalidatePath(...)` → return `{ok:true,...}` or `{ok:false,error}`. Never throw raw to client.
- **Toasts**: `useToast()` from `@/components/toast` (shell provides `<Toaster/>`); call `toast('Message')` after every successful mutation.
- **URL-synced tables**: filters/sort/page in `searchParams`; CSV export via a route handler that streams the current filtered view.
- **Numbers**: `Intl.NumberFormat('en-IE', {style:'currency', currency:'EUR'})`, compact for K/M. Money is integer cents.
- **RBAC UI**: session is available via `auth()` in RSC; pass `role` down and hide/disable controls per `can()`. Server actions enforce regardless.
- **Every screen**: loading skeleton (route `loading.tsx` or Suspense), empty state (icon+line+CTA), error state (`error.tsx` client boundary with retry). No layout shift.

## Live events (shell provides)
`@/lib/bus` → `publish(event: {type:'signup'|'subscription'|'refund'|'incident'|'flagged_content'|'system', text:string})` (in-process EventEmitter + ring buffer 50) consumed by `/api/stream` SSE. Mutations that create signups/refunds/incidents/etc. should `publish(...)`.

## Screens & routes (mock visual = Ealch Admin.dc.html, spec = user brief §4)
`/admin/overview` `/admin/users` `/admin/billing` `/admin/notifications` `/admin/content` `/admin/ai` `/admin/performance` `/admin/links` `/admin/releases`
Sidebar nav groups: MONITOR(Overview,Users,Performance,Link tracking) REVENUE(Billing) ENGAGE(Notifications,Content) PLATFORM(AI models,Releases & flags).
Titles: Overview · Users · Billing & revenue · Push notifications · Content · AI model routing · Performance · Link tracking · Releases & flags.

## Seed reference numbers (match the mock)
MAU 48.2K +6.1% · DAU 12.9K +3.2% · MRR €86,410 +4.8% (12-mo bars 46→86K) · Crash-free 99.6% · Churn 2.3% −0.4 · Users: total 61,408 shown / 2,000 seeded rows, new today 318, paying 7,930, churn-risk 412 · ARPU €10.90 · Refunds 30d €412 · Plan mix Free 61% / Plus(monthly €5.99) 27% / Pro(annual-ish €11.99) 12% · TTS p95 1.42s anomaly (+38%, eu-west) in last hour, API p95 412ms, uptime 99.98% · 5 tracked links (tiktok 48.6K clicks…) · releases v2.4.0 rolling 25%, v2.3.2 live, v2.3.0 live, v2.2.1 archived · 6 flags · 2 campaigns (41% & 19% open) · 4 admin users incl. Marc Beaumont super_admin (marc@ealch.app / `admin1234` / TOTP secret in seed output), plus ops@, support@, editor@ (same password).

## Verification gate
Your files must pass `pnpm tsc --noEmit` (run `pnpm exec tsc --noEmit`) and `pnpm lint` on your slice. Do not modify files owned by other slices; shared additions go in new files.
