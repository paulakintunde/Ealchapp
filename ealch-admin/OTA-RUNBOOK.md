# OTA Runbook — staged rollout, kill switch, rollback

The content OTA channel's safety controls (master plan Phase 2, "Content OTA
release safety"). Read this BEFORE a risky publish, and again the moment one
goes wrong. All commands run from `ealch-admin/` and need `.env` populated
(`DATABASE_URL`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`).

## How the mechanism works (one paragraph)

Snapshots (`snapshots/v{n}.json`) are immutable and retained in Storage;
`manifest.json` is the one mutable pointer, fetched by every device on launch.
The manifest carries `rollout` (0-100). Each install draws a stable lot number
0-99 once and adopts a new version only when `lot < rollout` — so raising the
rollout only ever adds devices, and nobody flaps between versions. Version
handling on device is strictly monotonic on purpose, which is why healing is
"republish good bytes as a NEW version", never a downgrade.

## Publishing with a staged rollout

```bash
pnpm content:publish -- --rollout 10   # ship to ~10% of devices
# watch for trouble (see "What to watch"), then widen without republishing:
pnpm content:rollout 50
pnpm content:rollout 100
```

Default is `--rollout 100`. Stage anything risky: the first LLM-generated
batch, a schema-adjacent change, anything touching audio refs. A bad snapshot
at rollout 10 is an incident for a tenth of the fleet instead of all of it.

## INCIDENT: a bad snapshot is live

A snapshot that passed `validateCorpus` but is pedagogically wrong, has broken
refs the validator cannot see, or contains bad French. The plan calls this the
highest-probability incident once generation scales. Two moves, in order:

### 1. Stop the bleed (seconds)

```bash
pnpm content:rollout 0
```

The kill switch. No device adopts anything; every device freezes on whatever
it already holds. Devices that had not yet fetched the bad version now never
will. This does NOT fix devices that already adopted it.

### 2. Heal the fleet (a minute)

```bash
pnpm content:rollback -- --dry-run   # verify what it will do
pnpm content:rollback                # content of the previous version, shipped as a new one
# or, if the last GOOD version is further back:
pnpm content:rollback -- --to 51
```

This downloads the good snapshot, verifies it byte-for-byte against its
recorded checksum, re-stamps it with the next version number, and publishes it
at rollout 100. Devices holding the bad version see a strictly newer manifest
and upgrade onto the good content through the same verified path as any
update. Rollback refuses to run if the good snapshot's bytes in Storage no
longer match what its version recorded.

### 3. Afterwards

- **The DB still holds the content that shipped bad.** Fix or unpublish those
  rows before the next `content:publish`, or you re-ship the incident.
- `seed.json` is untouched by rollback (it follows real publishes only). The
  next real publish restores full coherence: DB → snapshot → seed.
- Write down what the validator missed. If it is machine-checkable, it belongs
  in `validateCorpus` or the publish gates, not in this runbook.

## What to watch during a staged rollout

There is no cohort telemetry yet (PostHog wiring is future work), so watching
means: run the app on the dev device (it fetches on every launch — force-stop
and relaunch to re-roll), exercise the surfaces the publish touched, and check
the Metro/device logs for verify failures. When telemetry lands, adoption per
version belongs on a dashboard and this section should be rewritten.

## Snapshot retention: how far back rollback can reach

Every publish uploads a full-corpus `snapshots/v{n}.json` and, until
2026-09-01, nothing ever deleted one. At v56 that was 56 objects and 1039 MiB
against a 1 GB Storage limit. Postgres was 46 MB, so the bucket was always the
only thing near a quota.

**`content:publish` now trims itself.** After a successful publish it prunes to
the newest 10 by default, so the bucket stays flat without anyone remembering.
It runs last and is never fatal: a retention failure prints a warning and
leaves the publish standing, because the bytes are already live and recorded.
A `--dry-run` or `--no-upload` publish prunes nothing.

```bash
pnpm content:publish --prune-keep 20   # keep a deeper history for this publish
pnpm content:publish --no-prune        # leave old bytes alone entirely

pnpm content:prune                     # dry run, keeps the newest 10
pnpm content:prune --keep 10 --apply   # manual reclaim, or a tighter window
```

Raise `--prune-keep` before a risky publish if you want more versions to fall
back through. Which snapshots die is decided in `scripts/prune.logic.ts` and
unit-tested in `scripts/prune.logic.test.ts`.

**This bounds the rollback window.** `content:rollback --to <n>` downloads that
version's bytes, so a pruned version can no longer be rolled back onto. It
fails loudly on the download, never silently onto wrong bytes. v1 to v46 were
pruned on 2026-09-01; the window starts at v47. Run the dry run to see the
current floor before you plan a rollback to an old version.

Prune deletes Storage BYTES only, never `content_snapshots` ROWS. The version
counter is `max(version)` from that table, so dropping rows would make publish
reissue numbers devices already hold. A row whose object is gone is the correct
end state.

**Do not pre-compress snapshot uploads.** Storage does not preserve an uploaded
`Content-Encoding: gzip`: the object comes back tagged `br` with the raw gzip
bytes underneath, which do not parse as JSON. The CDN already compresses on the
fly, and better than we would (measured 2026-09-01 on a 73,915 B object:
73,915 B raw, 1,647 B with `Accept-Encoding: gzip`, 890 B with `br`). Egress
has always been compressed. The only real cost of a snapshot is storage at
rest, and pruning is what addresses it. See `scripts/_gzip_probe.ts` and
`scripts/_gzip_probe2.ts`.

## Sharp edges

- `content:rollout` edits the LIVE manifest in place. There is no undo other
  than setting it again; it prints before → after so a typo is visible.
- The kill switch stops CONTENT updates only. It has no effect on JS/native
  releases (that is `expo-updates`/store channel territory, CC-A).
- Rollback consumes a version number (v9 bad, v10 = healed v8). That is by
  design; version numbers are a counter, not a semantic.
- If `content:rollback` reports a checksum mismatch on the GOOD snapshot,
  stop. Storage has been altered; do not publish anything until you know why.
