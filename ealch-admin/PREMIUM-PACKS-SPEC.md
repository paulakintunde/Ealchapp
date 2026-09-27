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
