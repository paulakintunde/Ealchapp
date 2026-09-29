# Premium content packs: spec for approval

Status: APPROVED by Paul, 2026-09-27, with decisions 1 to 3 below settled.

## Why

1. **Paid content is public today.** Every snapshot is served from the PUBLIC
   bucket (`/storage/v1/object/public/content`). Anyone with the URL can download
   every paid lesson; the paywall exists only inside the app.
2. **Free users carry paid content they cannot open.** The app bundles Sons, A1,
   A2 and B1: 22.6 MB (minified) of which about 16 MB is paid.
3. **The single snapshot keeps growing** toward the parse ceiling (39.9 MB of
   80 MiB, and 50 MiB on installs that predate the raise). Packs split it.

## 1. What the free core keeps (decided: A2 is NOT free)

Free bands stay exactly as the paywall already defines them: `FREE_BANDS =
['sons', 'a1']` (`ealch-v2/src/store/entitlement.logic.ts`).

The free core (bundled in the app AND published as the public snapshot) holds:

| Kept in full | Kept as a skeleton only |
|---|---|
| Sons and A1: units, lessons, every item they reference | Every paid unit (A2, B1, B2, later C1, C2): id, seq, level, title, sub, canDo, lessonIds. A few hundred bytes each |
| Domains, themes (the catalogue) | Nothing else of a paid band: no lesson bodies, no paid-level items |
| Sons and A1 level items of the core practice themes | |
| Scenarios, playlists and speak-trail stages at sons and a1 | |

Estimated core: about 6 to 7 MB, against 22.6 MB bundled today.

## 2. One pack per paid band, plus one for exams

| Pack | Contents | Gate | Size today (est.) |
|---|---|---|---|
| `a2` | A2 lessons, a2 items, a2 scenarios/playlists/speak stages | Première (`levels.all`) | ~4 MB |
| `b1` | same for B1 | Première | ~12 MB |
| `b2`, later `c1`, `c2` | same | Première | grows with B2 |
| `exam` | exam papers and tasks | the `exam` access level | ~1.3 MB |

A pack holds only its own level's items. An item a paid lesson borrows from a
lower band ships in the lower band's pack or the core, never twice.

## 3. What a locked band shows

- **The trail looks the same as today.** Headings, lesson titles and act rows
  come from the skeleton, so a free user sees the whole curriculum.
- **Tapping a locked lesson opens the existing upgrade screen**, exactly as
  today (the check is `levelLocked`, unchanged). There is no preview content,
  because the lesson body is not on the device.
- **Practice hubs** already show paid-level decks as locked (`drillDeckGate`).
  That keeps working; the decks are empty rather than hidden.

## 4. How it works for a premium user

- **After purchase or restore**, the app asks the server for the packs the user
  is entitled to and downloads them, with a progress indicator. A2 is fetched
  first, then B1, then higher bands, so the next lesson is ready soonest.
- **Offline.** Packs are saved on the device (`Paths.document`), checksum-
  verified, streamed to a staging file first (the same way the snapshot is
  saved today). Once saved, every paid lesson works with no network, and keeps
  working across restarts.
- **Updates.** The public manifest lists each pack's version and checksum (not
  its content). When a band changes, only that band's pack is fetched again,
  in the background, on the next launch with network.
- **Downloads are not metered** and there is no Wi-Fi-only setting in v1; B1,
  the largest pack, is about 12 MB.

## 5. Refund or expiry

- **Access ends immediately.** When the Adapty profile no longer holds the
  entitlement (expiry, refund, or cancellation reaching its paid-through date),
  paid bands lock at once. This is the existing client gate, unchanged.
- **Progress is never deleted.** XP, checkmarks, streaks and SRS history stay.
- **Cached packs are kept for 30 days, locked,** then deleted to free storage.
  A user who resubscribes within 30 days is back instantly with no download.
  (Alternative for Paul: delete at once.)

## 6. The server function `content-pack-url`

- **Input:** the signed-in user's JWT and a pack name.
- **Checks:** the user holds the right access level, using the Adapty server API
  for that user as the authority (the `entitlements` mirror written by
  `adapty-webhook` is advisory, per its own header; it is the fallback only if
  Adapty is unreachable).
- **Returns:** a signed URL to `content-packs/<band>/v<N>.json` in a PRIVATE
  bucket, valid for 10 minutes. It returns nothing for a free user.
- **Guests:** a guest cannot hold premium today (entitlement needs an identified
  profile), so a guest never receives a pack.

## 7. Publishing

- `content:publish` writes the core snapshot (public), each pack (private
  bucket), and a manifest listing pack versions and checksums.
- **Changeover:** it keeps publishing the old full snapshot to the old public
  path, so installs from before the update keep working. The full public
  snapshot is removed once most users are on the new app version; until then,
  paid content is still publicly downloadable.
- `SEED_CUT` becomes: `tracks: ['sons', 'a1']`, paid units as skeletons only.
  B1 leaves the bundle (this replaces the 2026-09-27 choice to keep B1 bundled,
  which was made to avoid the size ceiling).

## 8. Shipping

One app update carries: pack download and cache, the skeleton trail, the 80 MiB
ceiling raise. Proven on the Pixel with two accounts:
- free: no paid content reaches the device (check the file system and the
  network log), locked lessons show the upgrade screen;
- premium: packs download, work offline in airplane mode, and a simulated
  expiry locks them and keeps progress.

## Decisions (Paul, 2026-09-27)

1. After expiry, cached packs stay on the device, locked, for 30 days, then are deleted.
2. Packs download on any connection, mobile data included.
3. Exam papers are their own `exam` pack behind the exam access level.
4. **Free papers stay in the core** (2026-09-27): paper 1 of each format and its tasks (`FREE_EXAM_PAPERS` = 1, pinned to `RemoteConfig.examFreePapers`), in the core snapshot and the bundled core seed; the `exam` pack holds papers 2 and up. Core seed measured 5.88 MB (24.08 MB today).

## What was built (2026-09-27, code and tests only, nothing deployed)

- `ealch-admin/scripts/content-packs.logic.ts` splits one validated corpus into
  the free core and one pack per paid band plus `exam`. An item goes to exactly
  one place. An item a lesson borrows from a HIGHER band comes down to the
  lowest band that names it (measured on the v76 seed: 5 a2 rows come down to
  a1, 38 b1/b2 rows to a2, 32 b2 rows to b1), so a free lesson never has a
  blank card and A2 never waits on B2. This is the one exception to "a pack
  holds only its own level's items". Core + every pack, merged, equals the
  legacy full snapshot (tested on the committed seed).
- Paid units in the core are skeletons: the whole unit (a few hundred bytes)
  plus a new optional `Unit.outline` (lesson id, title, act titles, card count
  per act, narrated flag). `trail.logic.ts` draws a band's rows from it when
  the lesson bodies are not on the device, so the trail looks the same.
- The public core is ALL free content (every sons/a1 item); the bundled seed is
  a cut of it (`buildCoreSeed` + `CORE_SEED_CUT`: same core themes, speak world
  1). Measured on the current seed: core seed 5.60 MB minified (8.67 MB
  pretty-printed as committed) against 24.08 MB minified today. On the same
  seed: core snapshot 5.68 MB, a2 3.96 MB, b1 12.96 MB, b2 0.14 MB, c1 0.02 MB,
  exam 1.37 MB. The seed is a cut of Postgres, so the published core will be
  larger; a `--dry-run` prints the real figures.
- `content:publish`: every run, dry runs included, splits, validates each
  partial state (core alone, core + each band in fetch order, core + exam
  alone, core seed) and prints every file with its size. `--packs` uploads the
  core (public `content/core/vN.json`), each CHANGED pack (private
  `content-packs/<pack>/vN.json`; an unchanged band keeps its old version and
  is not re-uploaded) and `content/manifest-v2.json` last, and cuts the seed as
  the free core. Without `--packs` the legacy snapshot, `manifest.json` and
  seed publish exactly as before.
- Edge function `content-pack-url`: JWT verified in the function, guests and
  free users refused, the Adapty server API as the authority, the
  `entitlements` mirror as the fallback when Adapty cannot answer
  (unconfigured, 5xx, timeout, unreadable body). A 404 from Adapty
  (`profile_does_not_exist`) is an answer: not entitled. Signs only the path
  manifest-v2 lists, for 600 seconds.
- App: `packs.logic.ts` (pure) and `packs.ts` (I/O). Packs sync on launch and
  on every entitlement change (purchase, restore, foreground reconcile,
  sign-in), A2 first, each streamed to a `.part` file, size-checked, checksum
  verified, validated merged, then promoted to `Paths.document` and recorded.
  A lapse stops merging at once; the bytes stay 30 days, then are deleted;
  progress is never read or written. The app reads `manifest-v2.json` when it
  exists and falls back to the legacy `manifest.json` path when it does not. A
  device holding the legacy full snapshot swaps it for the core, but a
  subscriber only once their packs are cached. `lesson.tsx` no longer falls
  back to a free lesson for an absent paid one: the paywall for a free user,
  "This level is on its way" for a subscriber whose pack is still downloading.

### Done since (2026-09-28, code and tests only, nothing deployed or published)

- **The tests read seed + packs.** `ealch-v2/src/content/seed-packs.json` (the
  PAID LAYER, committed beside seed.json, empty today) holds every row of the
  test cut the bundled seed lacks or holds differently; `seedPlusPacks()`
  (`src/content/seed-plus-packs.ts`, tests and tooling only, kept out of the
  EAS upload and the app's tsc) composes the two with the app's own
  `mergeCorpus`. With an empty layer it IS seed.json, so today's suite is
  unchanged. 95 content test files moved to it; the binary tests
  (catalogue-ships, trail.logic, spine-drift) still read seed.json, and
  seed.backcompat / exam-ships are regime-aware (the core validates as a free
  device holds it; seed + packs validates in full; under packs the binary
  carries paper 1 only). Proof: with `buildCoreSeed(splitCorpus(seed).core,
  CORE_SEED_CUT)` as seed.json and its layer beside it, `npm test` is
  5686/5686; with the committed files 5685 pass + 1 skipped (the packs-only
  exam check); per file the two runs are identical. Before the move, the core
  alone failed 368 tests and silently dropped 154.
- **The publisher writes the layer.** The legacy cut moved verbatim into
  `cutSeed()` (seed-cut.logic.ts; on the committed seed `cutSeed(SEED_CUT)`
  reproduces it exactly). `TEST_CUT` is SEED_CUT with every band a track and
  no unit list. Under `--packs`, `seed-packs.json` = TEST_CUT minus the core
  seed, and the publish refuses if core + layer does not validate in full;
  without `--packs` the layer is written EMPTY.
- **The band merge works in both regimes** (`band-merge.logic.ts`, read off
  the committed layer). Legacy: unchanged; the B1 and `--band b2` merge dry
  runs print byte for byte what they did. Packs: full unit, lesson and new
  rows into the layer, the outlined skeleton into seed.json; no unit list.
  Measured with the core + layer swapped in: the B1 and B2 merge dry runs
  add, replace and re-skeleton nothing (the merge's skeleton is the
  publisher's).
- **The download indicator is drawn** (`components/PackProgress.tsx`): on the
  downloads screen while any pack syncs, and on the Den while the paid band
  on screen is still arriving. Pure parts (`packProgress`,
  `packProgressLine`, `denPackBanner`) and the fr/en copy are tested.

### Not done, and why

- **The B1/B2 lesson sources still import seed.json** (46 files in
  `scripts/data/b1` and `b2`, owned by the B2 authoring session, so not edited
  here). Under packs the rows they borrow move to the layer and every one of
  them throws at import, taking b1-import, the band merge and the preview
  fixture down. `pnpm tsx scripts/lesson-data-seed-plus-packs.ts --apply`
  rewrites that one import to `seedPlusPacks()` (a no-op before packs). Run
  on a scratch copy with the core + layer in place, the B1 and B2 import dry
  runs then print byte for byte what they print today. MUST land before the
  first `--packs` publish.
- `SEED_CUT` itself is unchanged and still what a plain publish bundles;
  `--packs` is still opt-in. `SEED_CUT.units` is now only the legacy seed's
  list; the packs world does not read it.
- `seed.json` was not regenerated (another session is merging into it).
- Old `core/vN.json` and pack versions are not pruned by the publisher yet
  (the legacy `snapshots/` prune is untouched). At about 6 MB of core per
  publish, add them to `planPrune` before many `--packs` publishes pile up.
- Exams, a decision for Paul: today `examGateOn` is false and one paper per
  format is free. With every paper in the `exam` pack, a user without the exam
  level sees NO papers once the seed is the core cut (decision 3 read
  literally). If free papers should stay visible, the change is small: keep
  them and their tasks in the core in `splitCorpus`.

## Rollout steps (needs approval)

**Progress (2026-09-28, approved by Paul):**
- Step 1 DONE: private bucket `content-packs` created (public=false, 80 MiB limit). `storage.objects` has no policies at all, so only the service role and signed URLs can read it; a public URL into it is refused (400).
- Step 2 DONE: `content-pack-url` deployed (v1, ACTIVE, verify_jwt off, JWT checked in code) through the Supabase API; the CLI deploy stalled in Docker. Probed: no auth 401, forged bearer 401, GET 405.
- Adapty secret: Paul sets `ADAPTY_SECRET_KEY` themselves; until then the function decides from the entitlements mirror.
- `ADAPTY_SECRET_KEY` set by Paul 2026-09-28 (present in Supabase secrets; not yet proven against Adapty).
- Steps 4 and 5 DONE 2026-09-29 (approved by Paul): v78 published B2 Unit 1 in the legacy regime; then **v79 = `--packs --allow-noop`** (content identical to v78): core 9.73 MiB public, packs a2 6.99 / b1 16.46 / b2 7.74 / c1 0.35 / exam 1.05 MiB private, legacy snapshot 42.25 MiB still public. seed.json is now the 8.65 MiB core, seed-packs.json the paid layer (`9c6c8b4`). Verified: manifest v79 at 100; manifest-v2 public, 1.2 KB, no content; public URL into content-packs 400; core 200; content-pack-url 401 without a login. Two readers of seed.json fixed to read seed + packs: the publish-time a1.03 figure check and `_a1_genre_remeasure.ts` (`f7537b5`), and `_preview-b1.ts` (`9c6c8b4`). App 5690/5690, admin green, B2 app checks 0.
- Watch at the next B2 wave: `b1-trial-merge.ts` builds its trial seed from the committed seed.json, which is now the core; check it composes the packs layer before trusting a trial.
- Still to do: step 6 (preview build, then the Pixel 9 pass with a free account first, then a premium one).

Nothing below has been run. Project ref: `ogbothupjcivwruesgsu`.

1. **Private bucket** (SQL editor):

   ```sql
   insert into storage.buckets (id, name, public, file_size_limit)
   values ('content-packs', 'content-packs', false, 83886080)
   on conflict (id) do update set public = false;
   -- No storage.objects policy for anon or authenticated, on purpose: only the
   -- service role (the publisher, and content-pack-url when signing) touches
   -- it. Confirm nothing grants it:
   select policyname, roles, cmd from pg_policies
    where schemaname = 'storage' and tablename = 'objects'
      and (qual ilike '%content-packs%' or with_check ilike '%content-packs%');
   ```

2. **Adapty secret** (the SECRET key, `secret_live_...`, Adapty App settings,
   API keys). Optional: without it the function decides on the mirror alone
   and logs `served_from_mirror`.

   ```bash
   npx supabase secrets set ADAPTY_SECRET_KEY=secret_live_... --project-ref ogbothupjcivwruesgsu
   ```

3. **Deploy the function:**

   ```bash
   cd ealch-v2
   npx supabase functions deploy content-pack-url --project-ref ogbothupjcivwruesgsu --no-verify-jwt
   ```

4. **Before the first `--packs` publish:** the app tests, the band merge and
   the download indicator are done (see "Done since"). Left: run the lesson
   source codemod where the B2 lessons are merged (`pnpm tsx
   scripts/lesson-data-seed-plus-packs.ts --apply`, then the app and admin
   suites). A `--packs` publish rewrites BOTH seed.json and seed-packs.json;
   commit them together. Then:

   ```bash
   cd ealch-admin
   pnpm content:publish --dry-run            # every file and size, uploads nothing
   pnpm content:publish --packs --dry-run    # the same, with the core seed cut
   pnpm content:publish --packs              # packs, core, legacy snapshot, manifest.json, manifest-v2.json, seed
   ```

5. **Verify storage and the function:** `manifest-v2.json` is public and holds
   no content; a public URL under `content-packs/` fails; the function answers
   403 for a free account and a working URL for a premium one:

   ```bash
   curl -s -X POST "https://ogbothupjcivwruesgsu.supabase.co/functions/v1/content-pack-url" \
     -H "Authorization: Bearer <user access token>" -H "apikey: <anon key>" \
     -H "Content-Type: application/json" -d '{"pack":"a2"}'
   ```

6. **Ship the app** (EAS build or update carrying packs.ts, the outline trail,
   the lesson gate and the 80 MiB ceiling), then the Pixel pass from section 8
   with a free and a premium account.

7. **Later, once most installs run the new build:** stop publishing the full
   public snapshot (section 7). Until then paid content stays publicly
   downloadable through `snapshots/vN.json`.
