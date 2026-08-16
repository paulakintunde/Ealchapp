# Band blocking step 4 — the device checks, run

Pixel 6 (oriole), Android 17 / API 37, dev client `app.ealch.mobile` against a
local Metro on 8082. Run 2026-08-16, after a2.27 and a2.28 were merged.

**Blocking step 4 was the last unrun step in the collation's §6 sequence.** It
gated four units and nobody had executed it.

---

## THE ANSWER: two `scenario` sections in one lesson RENDER

**PASS.** Repeated `scenario` works. The gate is closed.

### How it was tested

`scenario` repeats in ZERO shipped lessons, so there was nothing live to look
at. Rather than build a synthetic throwaway, `a2.28.l1`'s `s20-pharma` was
temporarily converted from the `listening` it shipped as back into the
`scenario` it would have been if the check had passed
(`scripts/_a2band_two_scenario_probe.ts`). The section kept its id, its position
in act 5 and its content; only its type changed. That makes the probe the real
question rather than an approximation.

The probe writes **only to `seed.json`** and **only to `a2.28.l1`**. It does not
touch Postgres. The restore is re-running `merge-medecin-into-seed.ts`, which
rewrites the lesson from source, so no `git checkout seed.json` was needed and no
other author's uncommitted work was ever at risk. Verified restored: `s20-pharma`
is a `listening` again, `a2.28.l1` has one `scenario`, and `git status` shows the
seed byte-identical to its commit.

### What was observed

| | first `scenario` (`s10-consult`, mission 10) | second `scenario` (`s20-pharma`, mission 20) |
|---|---|---|
| listed in the mission rail | yes, chip `BULLES` | **yes, chip `BULLES`** |
| opens from the rail | yes | **yes** |
| `setting` line | renders | **renders** |
| title / `frSub` | renders | **renders** |
| first `ai` turn + gloss | renders | **renders** |
| play control on the turn | present | **present** |
| `YOUR TURN` rail, Speak / Show me | present | **present** |
| mission numbering | `MISSION 10 / 24` | **`MISSION 20 / 24`** |

The second scenario is indistinguishable from the first. `ownsLayout` in
`LessonPager.tsx` does handle each section independently, exactly as the
collation guessed it would.

### What this releases

- **a2.28** took the single-scenario fallback pre-emptively and did not need to.
  Promoting `s20-pharma` from `listening` back to `scenario` is now a supported
  change rather than a gamble. It is **not** done here: a2.28 is committed and
  green as it stands, and the promotion is a content decision with its own
  review, not a device-check consequence.
- **a2.29** and **a2.32** are released. Both may author two `scenario` sections
  as designed. Neither needs a fallback.
- **The collation's §6 step 4 is complete** for `scenario`.

---

## Also verified, on a2.27 and a2.28 as shipped

| check | result |
|---|---|
| `a2.27.l1` loads, all 23 missions with correct type chips | PASS |
| `a2.28.l1` loads, all 24 missions with correct type chips | PASS |
| header reads `A2 · LEÇON 26` / `A2 · LEÇON 27` | PASS, formatted label rather than the lowercase slug a2.07 and a2.26 ship |
| **ten `listenChoose` in one quiz round** (a2.27 r1) | **PASS**, see below |
| repeated `tapTable` (a2.27 missions 5 and 6, the `table` fallback) | PASS, both draw as `TABLEAU` |
| stepped `trapDrill` with sub-mission numbering (a2.27 mission 14) | PASS |
| `cardDeck` with term chips, respelling and pagination (a2.27 mission 12) | PASS |
| `reading` with `questionsInModal` (a2.28 mission 16) | listed as `LECTURE`, not opened |
| disclaimer card at `layer: 'more'` (a2.28 mission 14) | listed as `CARTES`, not opened |

### The ten-`listenChoose` round, in detail

This was a2.27's largest unverified risk: the band's shipped maximum is 3 of 30,
`ListenChooseCard`'s own source calls it the tallest card in the quiz, and the
band has had four width defects.

- **Options stay hidden behind "Listen first"** until the clip has played. The
  audio-first behaviour the unit's whole weighting depends on is real.
- **All four options render in full** with roughly 500px of vertical headroom
  before the footer. The `<= 5 words per option` guard in the apply script and
  the test is what bought that.
- **The explanation reveals in full.** It initially reads as truncated at
  « …the bank and the bridge are PASS », and it is **not**: the card scrolls, and
  scrolling shows « …are PASS moves and the lights are a TURN. » Recorded here
  because the first impression is a false alarm and the next author will have it.

---

## Not run

- **The `TrapAudioStep` hardcoded line.** `MissionRich.tsx:870` prints
  « Écoutez la paire. Le R sonne, puis le R se tait. » above the cards on every
  stepped `trapDrill` with an `audio` step. It is proven by reading and its blast
  radius is measured (**43 shipped sections, 40 of them A2**), so a device look
  would confirm rather than discover. Still unfixed and still needs its own commit.
- **Repeated `scene`**, which is a2.07's half of blocking step 4. a2.07 ships
  `scene` x2 and is live at rollout 10, so it can be checked on shipped content
  by anyone with the device. Not done here.
- **`layer: 'more'` behaviour on the core path** for the disclaimer card. Its
  structural properties are pinned by tests; whether a learner on the core path
  visually walks past it was not observed.

---

## Environment note, worth keeping

The Metro that was already running when this session started served
`/status` with `packager-status:running` but returned **nothing at all** for a
manifest request, and the dev client sat on a white screen forever with no JS
error. It was a zombie. The fix was to kill it and start a fresh one with

```
node node_modules/expo/bin/cli start --port 8082
```

from `ealch-v2`, never through `npx`. A first cold bundle after `--clear` takes
**about three minutes** (2,337 modules), and the app shows a blank white screen
for all of it with nothing in `logcat` — that is normal and not a crash. Wait for
`ReactNativeJS: Running "main"` in `adb logcat -s ReactNativeJS:*` before
concluding anything is wrong.

Two adb gotchas on Git Bash: `adb shell screencap -p /sdcard/x.png` fails because
MSYS rewrites the path, so use `adb exec-out screencap -p > file.png`; and a deep
link delivered to an already-running instance is swallowed, so `am force-stop`
first.

---

*This file is `.md` and therefore gitignored: `git add -f` to track it.*
