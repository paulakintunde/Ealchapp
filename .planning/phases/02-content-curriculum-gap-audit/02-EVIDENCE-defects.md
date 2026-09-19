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

## 2. Build-note contamination in shipped notes

**Lead:** `[[ealch-flashcard-audit-2026-09-09]]` found 81 `content_items.notes`
rows shipping build-commentary text; a 2026-09-10 memory claims this was fixed
to 0 as of snapshot v70, but the same memory records `content:parity` giving a
false green on a related field the same week (RESEARCH.md Pitfall 6). Re-counted
fresh rather than citing either claim.

### Step A — direct DB count

```sql
select count(*)::int as contaminated
from content_items
where notes ~* '(FIRST DRAFT|STAGE\s+\d|hasPlainNasalFor|§\s*\d|TODO|TBD|FIXME|placeholder|lorem)';
```
Result: `contaminated = 2`.

```sql
select id, kind, level, theme, left(notes, 160) as notes_excerpt
from content_items
where notes ~* '(FIRST DRAFT|STAGE\s+\d|hasPlainNasalFor|§\s*\d|TODO|TBD|FIXME|placeholder|lorem)'
order by theme, id
limit 120;
```
Result (2 rows, full — well under the 120 limit):

| id | kind | level | theme | notes_excerpt |
|---|---|---|---|---|
| `fr.a1.ecole.056` | word | a1 | ecole | "A first draft before the final copy." |
| `fr.a2.au-restaurant.187` | phrase | a2 | au-restaurant | "OFF SCRIPT, and it looks like stage 6 without being it: this is asked mid-meal about bread or water, not about a dessert you might buy." |

Both hits are far below the 2026-09-09 audit's 81 — the fix substantially
landed. The 2026-09-10 "fixed to 0" claim is close but not exactly right: 2
raw hits remain, and Step B below hand-reads each one rather than trusting the
"0 left" memory at face value (D-03, Pitfall 6).

### 2.1 Hand-read classification

Both hits' full row (`fr`, `en`, `notes`) was pulled and read in full before
classifying — a bare regex match on `notes` alone is exactly the failure mode
RESEARCH.md Pitfall 4 warns about.

```sql
select id, kind, level, theme, fr, en, notes
from content_items
where id in ('fr.a2.au-restaurant.187', 'fr.a1.ecole.056');
```

| id | notes_excerpt | real | false positive | reasoning |
|---|---|---|---|---|
| `fr.a1.ecole.056` | "A first draft before the final copy." | | ✓ false positive | Full row: `fr: "le brouillon"`, `en: "the rough draft"`. The note defines the vocabulary word being taught ("brouillon" = a rough/first draft) — plain, learner-facing teaching prose. It only matched the regex because the phrase "first draft" is the word's own English gloss, not because it is leftover build commentary. |
| `fr.a2.au-restaurant.187` | "OFF SCRIPT, and it looks like stage 6 without being it: this is asked mid-meal about bread or water, not about a dessert you might buy." | ✓ real | | Full row: `fr: "Il vous faut autre chose ?"`, `en: "Do you need anything else?"` — a genuine restaurant phrase. The note's SECOND half ("this is asked mid-meal about bread or water, not about a dessert you might buy") is legitimate usage guidance a learner could use. But the FIRST half ("OFF SCRIPT, and it looks like stage 6 without being it") is internal authoring/script-structure jargon — it references an authoring concept (a numbered conversation "stage" in the au-restaurant scenario's scripted flow) that has no meaning to a learner reading this on a flashcard back. This is the same class of defect as the original 81-row finding (authoring commentary bleeding into a learner-facing field), just a single surviving instance rather than 81. |

**Split: 1 real, 1 false positive**, out of 2 raw regex hits.

### 2.2 Seed-side count

The database is not what a fresh install reads; `seed.json` is.

```bash
grep -oE '"notes" *: *"[^"]{0,200}"' ealch-v2/src/content/seed.json \
  | grep -niE 'FIRST DRAFT|STAGE [0-9]|hasPlainNasalFor|TODO|TBD|FIXME|placeholder|lorem'
```
Output (2 lines):
```
507:"notes": "A first draft before the final copy."
5058:"notes": "OFF SCRIPT, and it looks like stage 6 without being it: this is asked mid-meal about bread or water, not about a dessert you might buy."
```

Per the plan's instruction, also ran the counting pass WITHOUT `-i`:
```bash
grep -oE '"notes" *: *"[^"]{0,200}"' ealch-v2/src/content/seed.json \
  | grep -cE 'FIRST DRAFT|STAGE [0-9]|hasPlainNasalFor|TODO|TBD|FIXME|placeholder|lorem'
```
Result: `0`.

This 0 is itself a finding about the check, not about the content: both real
notes are authored in sentence case ("A first draft…", "…stage 6…"), so the
uppercase-only pattern the plan specifies for the case-sensitive counting pass
produces a **false negative** here — a different failure mode than Pitfall 4's
documented "`grep -i` corrupts multibyte matching," but the same practical
lesson (a single regex pass, run either way, cannot be trusted alone). The
case-insensitive pass (2 hits) agrees exactly with the DB-side count (2 hits)
and with Step A's identical excerpts, so 2 is the number carried forward, not 0.

**DB-side count: 2. Seed-side count: 2 (case-insensitive; the plan's literal
case-sensitive counting command returns a false-negative 0). The two sides
agree.** No DB/seed divergence — both surviving contaminated rows are present
on both sides of the pipeline, i.e. they are already shipping to users, not
merely sitting unpublished in Postgres.

### Step D — secondary input (`find-french-notes.ts`)

`ealch-admin/scripts/find-french-notes.ts` is untracked in this repository (not
committed to any branch as of this audit — confirmed via `git ls-tree -r` on
`feat/sons-course`, `build/ealch-v2-expo`, and this worktree's merged HEAD) and
is therefore not present to run in this execution environment. Its header
comment (lines 13-23) and `frenchScore` function (lines 73-95) were read
directly at the shared main-checkout path as the plan's `read_first` required —
its comparative scoring approach informed the hand-classification discipline in
2.1 above (score/read every hit, never trust a single keyword match) — but it
was not executed as a secondary input. This does not weaken section 2's
findings: Step A/B/C together already give a DB-count, a hand-read
classification of every hit, and an agreeing seed-count, which is the
evidence this file requires.

## Findings from section 2

### DEF-01: One build-note contamination row survives in shipped content

**Checked:** Direct regex count + full-row hand read against `content_items`
and `seed.json`, per Steps A-C above.
**Finding:** `fr.a2.au-restaurant.187` ("Do you need anything else?", a2,
au-restaurant theme) carries a `notes` field whose opening clause ("OFF SCRIPT,
and it looks like stage 6 without being it") is internal
authoring/script-structure commentary, not learner-facing teaching content. It
is live in both Postgres and the currently shipped `seed.json` (line 5058), so
every fresh install already ships it.
**Severity:** `info` — a single-item leftover, not a systemic recurrence of the
81-row 2026-09-09 defect. The 2026-09-10 fix substantially worked (81 → 1 real,
after excluding 1 false-positive regex hit); this is a residual miss, not
evidence the fix regressed.
**Scope estimate:** Trivial single-row content edit — rewrite or trim the note
to keep only its learner-useful second clause ("this is asked mid-meal about
bread or water, not about a dessert you might buy"); no re-authoring, no
re-publish-pipeline change needed. Sized as a single-item fix per D-07 (does
not warrant its own roadmap phase).
**Cross-reference (D-09):** new finding — not previously named in project
memory (memory's 2026-09-10 claim was "0 left," which this evidence corrects to
"1 left"). Plan 05 to check against BUG-01/02/03/QA-01/02 for a closer owner;
none of those requirement areas currently name flashcard/content-notes
contamination.
