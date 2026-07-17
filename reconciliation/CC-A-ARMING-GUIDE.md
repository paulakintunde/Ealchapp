# Arming CC-A — from inert workflow to enforced gates

A step-by-step guide, written against the verified state of this repo on 2026-07-16:
repo `paulakintunde/Ealchapp` is **private**, default branch `build/ealch-v2-expo`,
workflow at `.github/workflows/ci.yml`, canonical DB migrated through `0005`,
`expo-updates` **not installed**, `eas.json` a skeleton, `expo-speech-recognition`
pinned `^56.0.1` against Expo `~57.0.4`.

Part 1 costs nothing and takes ~30 minutes. Part 2 is the account-bound remainder
of CC-A. Part 3 is the next code-shaped stage (agent work, listed so the ordering
is visible).

---

## Part 1 — Arm the CI (free, ~30 min)

### Step 0. Commit the work

The working tree holds the Phase 0 sweep, the CI workflow, the migration-adjacent
fixes, and the doc updates — none of it committed. The repo root also holds
untracked material you may not want in history (`camille-concepts/`, prototype
PNGs, planning .md files), so review before adding:

```bash
git status                       # review what is untracked
git add ealch-v2 ealch-admin .github reconciliation
git add <any planning docs you want tracked>
git commit -m "Phase 0 honesty sweep + CC-A CI slice"
```

### Step 1. Push — this triggers the first run

```bash
git push origin build/ealch-v2-expo
```

The workflow fires on push to this branch. Open the repo's **Actions** tab and
watch the first run. Expected result:

| Job | Expected |
|---|---|
| `ealch-v2 · typecheck + tests + honesty gates` | ✅ green (verified locally: tsc clean, 208/208, greps empty, seed 20,559 B under the 256 KiB ceiling) |
| `ealch-admin · typecheck` | ✅ green (verified locally after the `curriculum.ts` relative-import fix) |
| `content:publish --dry-run` | ✅ green **with a skip notice** — the `DATABASE_URL` secret does not exist yet |

If anything is red, the failure is environmental (runner network, action version),
not logic — every command was executed locally on the exact CLI the jobs run.

### Step 2. Set the `DATABASE_URL` secret — arms the dry-run gate

**Repo → Settings → Secrets and variables → Actions → New repository secret.**
Name: `DATABASE_URL`.

Two options for the value:

- **Quick:** the pooler URL already in `ealch-admin/.env`. Works today (the
  dry-run connected through it during verification). Downside: that is the
  `postgres` role — full write access sitting in GitHub secrets for a job that
  only ever reads.
- **Right:** a read-only role. Run once against the canonical DB (SQL editor in
  the Supabase dashboard, or psql over the direct connection):

  ```sql
  create role ci_read login password '<generate a long one>';
  grant usage on schema public to ci_read;
  grant select on all tables in schema public to ci_read;
  alter default privileges in schema public grant select on tables to ci_read;
  ```

  Then the secret value is the pooler URL with the role swapped in
  (Supabase pooler usernames are `role.<project-ref>`):

  ```
  postgresql://ci_read.<project-ref>:<password>@aws-0-ca-central-1.pooler.supabase.com:6543/postgres
  ```

After setting it: **Actions → the latest run → Re-run all jobs**, and confirm the
dry-run job now actually executes (it prints the corpus diff and
`✓ dry run — valid, nothing written.`) instead of the skip notice.

### Step 3. Branch protection — one honest complication

**The repo is private, and branch protection is not enforced on private repos on
the GitHub Free plan.** Rulesets have the same limitation. Your options:

- **(a) GitHub Pro** (personal, ~$4/mo): unlocks enforcement. Then:
  **Settings → Branches → Add branch protection rule** for `build/ealch-v2-expo`,
  tick **Require status checks to pass**, and select all three (they appear in
  the picker only after the first run has executed):
  - `ealch-v2 · typecheck + tests + honesty gates`
  - `ealch-admin · typecheck`
  - `content:publish --dry-run (needs DATABASE_URL secret)` — safe to require
    even before the secret exists; the job passes with a notice.

  Note the fine print: "require status checks" only blocks **merges into** the
  branch. Direct pushes bypass it unless you also tick **Require a pull request
  before merging** (and include administrators) — which moves you to a PR-based
  workflow. That is the full-discipline end state; adopt it when it stops being
  friction.
- **(b) Stay on Free:** the checks still **run** on every push and PR and show
  the red ✗ on the commit — they inform but do not block. Given a single
  committer, this is a reasonable interim: the gate exists, the enforcement is
  social.

**Do not skip Step 2 because you chose (b)** — the dry-run gate catching the
canonical-DB drift on its first execution is the argument: it runs either way.

---

## Part 2 — The rest of CC-A (account-bound)

Order matters here: the identity decision comes first, because the EAS project is
keyed to `owner/slug`, and changing them later orphans the linkage.

### Step 4. Decide project identity (LOW in the plan, but it gates Step 5)

`app.json` today: product **Ealch**, slug **wonerock**, owner **wonerocks-team**,
bundle `app.ealch.mobile`, scheme `ealch`. Reconcile slug/owner to the brand (or
record deliberately why they differ) **before** `eas init`, first store build, or
listings. This is a decision, not code: pick the Expo account/org that will own
the app.

### Step 5. Release model — install `expo-updates` (needs an Expo account, free tier fine)

Per `ealch-v2/AGENTS.md`, check the versioned docs first:
`https://docs.expo.dev/versions/v57.0.0/` — the SDK moves and this guide will age.

```bash
cd ealch-v2
npx eas login
npx eas init                      # creates/links the EAS project (uses owner/slug — Step 4 first)
npx expo install expo-updates     # picks the SDK-57-compatible version
npx eas update:configure          # writes updates.url + runtimeVersion into app.json
```

Review the diff it writes. Prefer the **fingerprint** runtime-version policy if
offered — it derives compatibility from the native build rather than manual
bumps. Then add a `channel` to each profile in `eas.json`:

```jsonc
"build": {
  "development": { "developmentClient": true, "distribution": "internal", "channel": "development" },
  "preview":     { "distribution": "internal", "channel": "preview", "android": { "buildType": "apk" } },
  "production":  { "autoIncrement": true, "channel": "production" }
}
```

This is a **native config change**: the current dev client on the Pixel does not
know about updates. The next `eas build` bakes it in.

This lands the release train the plan requires: JS-only phases (5, 6, 8) ship as
OTA updates between store binaries; native-module phases (4, 7, 10, 11) are
batched into planned builds. Stop describing code phases as content-OTA
deliverable — that channel is only for snapshots.

### Step 6. Toolchain proof — one real build before Phase 1 authoring scales

The known risk first: `expo-speech-recognition` is `^56.0.1`, a full major behind
the SDK — a classic config-plugin build break, and it is the STT module that
placement, exam capture, and narration all depend on.

```bash
cd ealch-v2
npx expo install expo-speech-recognition   # aligns to the SDK-57-compatible release
npx expo-doctor                            # catches remaining version skew
```

Then pin **exact** versions (drop `^`/`~`) on all native modules in
`package.json`, and prove the toolchain compiles:

```bash
eas build --profile development --platform android   # the dev client you actually use
eas build --profile production --platform android    # the store shape
```

Watch for new-architecture (RN 0.86 / reanimated 4) runtime crashes on first
launch, not just compile success. iOS builds need Step 7's Apple membership.

### Step 7. `eas.json` submit config (this is where CC-B overlaps)

`submit.production` is `{}` today, so `eas submit` cannot run non-interactively.
Prerequisites are the CC-B commercial accounts — start them now, they take weeks:

- **Apple:** Developer Program membership ($99/yr) → create the app record in
  App Store Connect → fill `ios.ascAppId` + `appleTeamId`. Paid-apps agreement,
  banking and tax forms come with it (needed by Phase 10 anyway).
- **Google:** Play Console account ($25 once) → create the app → a Google Cloud
  service account with Play Android Developer API access → fill
  `android.serviceAccountKeyPath` + `track: "internal"`.
- **Env story:** wire production `EXPO_PUBLIC_SUPABASE_URL` /
  `EXPO_PUBLIC_REVENUECAT_KEY` via EAS secrets, and add the build-time assertion
  the plan calls for — a production build with empty Supabase/RevenueCat config
  must **fail the pipeline**, not ship the offline demo.

---

## Part 3 — Next code-shaped stage (agent work, for ordering visibility)

Phase 1's two remaining gaps. Traced blast radius as of 2026-07-16:

**CF-17 spine cleanup.** Delete the `{title,sub}` prototype arrays from
`curriculum.ts`. Consumers verified: `totalUnits()` → `home.tsx:293` only
(re-derive from `content.units()` across tracks); `currSons/currA1/currA2` →
`ealch-admin/scripts/port-content.ts` only (a one-time porting script that has
already served its purpose — freeze or retire it); `a2Subs` and `extendedLesson`
appear to have **no live app consumer** (the Den renders `content.units()` —
verify `den.tsx`/`lesson.tsx` before deleting). `lessonSkill` and the honest
classifier maps stay.

**Unit.canDo / themes / prereqUnitIds + A1 resequencing.** Schema additions
(`Unit.canDo`, `themes[]`, `prereqUnitIds?`, `Lesson.features?`/`scenarioId?`,
`Playlist.minLevel`) + validators + Drizzle mirror + migration `0006` + the
publish SELECT/mapper (the four-touchpoint rule from the master plan) + tests.
Then the content half: every A1 unit gets a non-empty `canDo`; negation and
interrogation move into units 6-9; authored in the DB and re-published — which
is why Part 1's dry-run gate comes first.

---

## Done-when checklist

- [ ] First Actions run green (Step 1)
- [ ] `DATABASE_URL` secret set; dry-run job executes for real (Step 2)
- [ ] Branch protection decision made — Pro + required checks, or Free + social enforcement (Step 3)
- [ ] Identity (owner/slug) decided and recorded (Step 4)
- [ ] `expo-updates` installed, channels in `eas.json`, dev client rebuilt (Step 5)
- [ ] `expo-speech-recognition` aligned to SDK 57; dev + production Android builds compile and launch (Step 6)
- [ ] Apple/Google accounts opened; `submit.production` filled; env assertion added (Step 7)
- [ ] Master plan updated: CC-A 🟡 → ✅ when 1–7 hold
