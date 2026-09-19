---
phase: 02-content-curriculum-gap-audit
plan: 04
evidence_for: CONTENT-01
surface: known content-quality defects (D-08) + seed-vs-DB shipping check
read_at: 2026-09-19T23:34:10Z
---

# Evidence — Known Quality Defects, Re-measured (D-08)

Severity taxonomy and finding-id scheme per `GAPS.md`. Local ids `DEF-nn` are
mapped to `GAP-nn` by Plan 05. The D-09 cross-reference against BUG-01/02/03 and
QA-01/02 is Plan 05's task, not this file's.

## Method

Every claim below is a test exit status, a `path:line` source quote, or a pasted
SELECT result. No finding cites a project-memory entry as its evidence; memory is
cited only as the LEAD that prompted the check (D-03, RESEARCH.md Pitfall 6).

## 1. Fixes re-verified against current code

### 1.1 Numbers scored wrong
**Lead:** project memory, 2026-09-07 — reported fixed.
**Test run:**
```bash
cd ealch-v2 && node --test src/utils/frNumbers.logic.test.ts
```
→ `EXIT=0`, 9 pass / 0 fail (`tests 9`, `pass 9`, `fail 0`, `duration_ms 206.4307`).

**Covering test:** `digits already present fold to the same place as the words`
at `ealch-v2/src/utils/frNumbers.logic.test.ts:84-91` — asserts
`fold('cinquante') === fold('50')`, i.e. the exact "learner said cinquante,
recognizer wrote 50" collision from the bug report, folds to the same token on
both sides.

**Source:** `ealch-v2/src/utils/frNumbers.logic.ts:136-146`
```typescript
export function foldNumberTokens(toks: string[]): string[] {
  const out: string[] = [];
  let i = 0;
  for (const r of numberRuns(toks)) {
    while (i < r.start) out.push(toks[i++]);
    out.push(String(r.value));
    i = r.start + r.len;
  }
  while (i < toks.length) out.push(toks[i++]);
  return out;
}
```
This is the symmetric fold described in the file's own header comment
(`frNumbers.logic.ts:1-39`): both the expected French text and the heard
transcript are folded through this same function before comparison, so
`"cinquante"` and `"50"` land on the identical canonical token `"50"` regardless
of which side the recognizer wrote digits on.

**Verdict:** STILL FIXED — pinned test suite green (9/9), the specific
collision-case assertion exists and passes, and the fold function that performs
the digit/word normalisation is present and unchanged in shape from what the
header comment documents.

### 1.2 Nineteen playlists, one voice deck
**Lead:** project memory + commits 694e6c4, a63a11a.
**Test run:**
```bash
cd ealch-v2 && node --test src/utils/speakDeck.logic.test.ts
```
→ `EXIT=0`, 21 pass / 0 fail (`tests 21`, `pass 21`, `fail 0`, `duration_ms 428.0225`).

**Source:** `ealch-v2/src/utils/speakDeck.logic.ts:99-103`
```typescript
export function playlistDeck(pl: Playlist): SpeakCard[] {
  return pl.tracks.flatMap((tk) =>
    tk.lines.map((ln, i) => ({ id: `${tk.id}.l${i}`, fr: ln.fr, en: ln.en }))
  );
}
```
The deck is derived directly from the specific `Playlist` object passed in
(`pl.tracks`), not from any shared trail/corpus default — the fix's whole shape.

**Call sites:**
```
ealch-v2/app/speak.tsx:25:} from '@/utils/speakDeck.logic';
ealch-v2/app/player.tsx:19:} from '@/utils/speakDeck.logic';
ealch-v2/app/player.tsx:74:  // The flatten and this arithmetic live in speakDeck.logic so the mic below
```
The bare grep for `speakDeck|playlistId|deckFor` only surfaces import lines
(both screens now delegate this logic entirely to `speakDeck.logic.ts` rather
than keeping local copies), so the actual wiring was confirmed by reading both
files in full:

- `ealch-v2/app/speak.tsx:119` — `const asked = useMemo(() => resolvePlaylistParam(params.playlist, pool), ...)`
- `ealch-v2/app/speak.tsx:155-166` — the `deck` memo: when `asked.kind === 'found'`,
  `cards: playlistDeck(asked.playlist)` (the requested playlist's own deck, not
  the trail's `items`); the trail-mode branch (`items` from the current
  stage/block) is only reached when `asked.kind === 'none'`, i.e. no
  `?playlist=` was passed at all.
- `ealch-v2/app/player.tsx:46` — `const asked = useMemo(() => resolvePlaylistParam(params.playlist, pool), ...)`
- `ealch-v2/app/player.tsx:55` — `asked.kind === 'found' ? playlistDeck(asked.playlist) : ...` (same pattern, listening side)
- `ealch-v2/app/player.tsx:197` — `router.push(speakRouteFor(pl?.id, pl ? playlistTrackAt(pl, ix) : 0));` — the
  practice CTA explicitly threads `pl.id` through to the Speak route rather than
  pushing a bare `/speak`, which is the exact defect described in the bug report
  ("the player's practice out loud button pushed a bare `/speak`").

**Live data:**
```sql
select body->>'id'                                            as playlist_id,
       body->>'word'                                          as word,
       body->>'minLevel'                                      as min_level,
       coalesce(jsonb_array_length(body->'tracks'), 0)        as n_tracks,
       md5(coalesce(body->'tracks', '[]'::jsonb)::text)       as tracks_fingerprint,
       status
from content_units
where kind = 'playlist'
order by body->>'id';
```
Result: 20 playlist rows returned (`pl.a1.chiffres` … `pl.sons.la-voix`), every
one `status: 'published'`. All 20 `tracks_fingerprint` values are distinct —
`grep -c playlist_id` gave 20 rows, `grep -o '"tracks_fingerprint": ...' | sort -u | wc -l`
gave 20 unique fingerprints. No two playlists share their track content.

20 playlists, 20 distinct track fingerprints.

**Verdict:** STILL FIXED — pinned test suite green (21/21), the deck-derivation
function reads from the specific playlist argument (not a shared default), both
call sites (`speak.tsx`, `player.tsx`) resolve and thread the requested
playlist's own id/deck through rather than falling back to the trail, and the
live data confirms all 20 published playlists carry genuinely distinct track
content (no fingerprint collisions).

Note: the bug report's headline figure was "19 playlists"; the live count today
is 20 (one playlist — `pl.a2.l-oreille`, the smallest, 2 tracks — appears to have
been added since the fix). This is a bookkeeping delta, not a regression: the
fix is structural (derives from the passed-in playlist, not a fixed set of 19),
so it covers the current 20 exactly the same way it covered the original 19.

## Findings from section 1

No findings. Both fixes are still in place, proven by a green pinned test plus
a source read: the numbers-scoring fold is symmetric and the collision case is
directly asserted; the playlist voice-deck derives from the requested playlist
object at both call sites, and all 20 published playlists carry distinct,
non-colliding track content.
