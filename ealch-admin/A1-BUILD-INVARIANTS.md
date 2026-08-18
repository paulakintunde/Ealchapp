# A1 build invariants

**Read this once per lesson, before the lesson's own brief.**

This file holds the rules that do not change between lessons: the ways this
project has shipped broken content, the layout traps, the gates, and the wiring
pattern. Every one of them was learned by being burned.

It exists because the same 200 lines were being copied into every lesson brief,
where three copies immediately began to drift and each copy carried its own
errors forward. A lesson brief should now contain only what is true of *that
lesson*: its teaching problem, its measured corpus, its own test list.

> **The split to keep in your head.** Rules in THIS file are durable and were
> paid for in shipped bugs. Measurements in a LESSON brief decay in days,
> because the corpus and the track move. Trust this file. Verify the brief.

---

## 0. Before you believe a single corpus claim

Three lesson briefs in a row told their author that vocabulary did not exist
when it did:

| Brief said | Reality |
|---|---|
| a1.08: "not one day exists as a headword" | all seven existed |
| a1.09: "ten of the twelve months are absent" | all twelve existed |
| a1.13: "`couleurs` does not exist, 0 items" | 322 published rows |

Every one had the same cause: **the claim was measured against `seed.json`,
which is a CUT of Postgres, and an absence in the cut was read as an absence in
the corpus.** For a theme outside `SEED_CUT.themes` the cut can be under 10% of
the database. Following any of the three would have failed the build, because
`flashhub-coverage.test.ts` treats two rows sharing an `fr` in one theme as one
card served twice.

**So: run the probe before you author anything.**

```bash
cd ealch-admin
pnpm corpus:probe --theme <yourtheme> --words "le vent,la pluie" --tokens "il fait" --unit a1.10
```

It prints the Postgres count and the seed count side by side for every theme,
reports the next free id in each sequence, probes each word bare **and with
every article**, and flags competing respellings. It never shows you one number
without the other.

Three search traps, all live in this corpus at once:

- **`\b` is ASCII-only in JavaScript.** `/\ben été\b/` matches **nothing**,
  because the trailing `é` is not a word character. A regex that returns zero
  looks exactly like an absence.
- **Substring matching without a boundary is confidently wrong the other way.**
  `vent` matches `ventre`, `ventilateur`, `vente`.
- **The corpus stores gendered nouns WITH their article.** `le vent` exists;
  `vent` does not. Searching bare forms reports present words as absent. This is
  what actually broke the weather brief.

Never build a regex out of a search term. Walk the string and check the
neighbouring character against an accent-aware class, the way `probe-corpus.ts`
does.

---

## 1. The failure this project keeps shipping: authored, valid, invisible

Every item below passed schema validation, passed the whole suite, and drew
**nothing**. All were found on a device.

| What was authored | Why nothing drew it |
|---|---|
| a1.01's 12 final-exam questions | a second `quiz` section; the pager renders only the first |
| a1.01's 5 reading glossary entries | `reading` without `questionsInModal` never reaches the glossary renderer |
| 10 glossary entries across sons.05/.07/.09 | the lookup key was normalised differently from the passage token |
| a1.01 mission 5, a fully blank screen | `commonErrors` without `swipe` hit a `break` that fell out of the switch and returned `undefined` |
| `autoplay: true` in six seed sections | declared in `schema.ts`, implemented in no component, to this day |
| sons.06's 4th and later term chips | the renderer shows 3 and collapses the rest |
| a1.08's 43 declared `itemIds` | resolved perfectly, named by no section, drawn by nothing |

**The rule: after authoring any field, grep for a component that reads it.** A
field with no reader is worse than an absent one, because it looks like the job
is done.

The ones most likely to catch you:

- **One `quiz` section, carrying `rounds`.** `lessonPager.logic.ts` appends
  exactly one quiz page via `sections.find(s => s.type === 'quiz')`.
- **`reading` + `glossary` needs `questionsInModal: true` AND questions.**
- **A `sheetId` must name a sheet the lesson declares**, and every declared
  sheet must be reachable from some section.
- **Do not author `autoplay`.** Use `audioFirst`, which ScenePlayer implements.
- **Every `itemId` must be on a screen**, not merely resolvable. Ask "did the
  learner see it", not "does this id resolve".
- **`imageRef` is validated by nothing.** `lesson-contract.test.ts` contains no
  reference to it. `lessonImage(ref)` is a plain lookup in a statically
  enumerated `REG` in `src/content/lessonImages.ts`, and an unregistered ref
  draws a blank box. The comment in `schema.ts` promising a check says
  *"Once the snapshot carries an asset manifest, **publish** fails a dangling
  imageRef"*: a conditional future promise about publish, not a guard that runs
  today. If you author an image, register the ref and **write your own test**.

---

## 2. Layout rules, each of which is a bug that shipped

- **`ownsLayout()` in `LessonPager.tsx:162`** decides which sections get the
  viewport: swipe-flagged sections, `cardDeck`, `groupDrill` at `xl`, stepped
  `trapDrill`, `flashcards`, `reviewDeck`, `practice`, and `reading` with
  `questionsInModal`. **`tapTable`, `vocabThemes`, `story` and `scene` are NOT
  in it** and render inside a scrolling page.
- **`size` looks decorative and is not.** `ownsLayout()` ignores it;
  `density.logic.ts` reads `xl` as a **12-word cap on every string in the
  section**. Correct on a one-word card, fatal anywhere a sentence appears. This
  cost a session on a1.01.
- **The flex belongs to a wrapper View, never to the Text.** A `<TX>` carrying
  `flex` inside a hug-content container is measured at its natural width,
  capped, then shrunk without re-wrapping, so the tail is cut while the audio
  speaks it in full. Copy `FrenchLine` in `LessonDeck.tsx`.
- **Measure, never guess.** `useMeasuredCardHeight(chrome, reserve)`.
- **Exactly one child absorbs the slack** (`flex: 1`, `minHeight: 0`).
- **44dp minimum tap target**, `hitSlop` when the visual must stay smaller.
- **Three term chips per section, maximum.** The renderer shows three.
- **`commonErrors` wants `swipe: true, size: 'lg'`**, one error per screen.
- **A `groupDrill` control page carries `items: []` explicitly and no `size`.**
  An `xl` groupDrill must never stack words and a check in one group.
- **Never call a prop callback during render.** ScenePlayer fired `onPlay` from
  its render body and put a red "Cannot update a component while rendering a
  different component" toast over every scene lesson's break card.
- **U+203F renders as a low underscore on a Pixel 6.** It is already in shipped
  sons.10 respellings. Do not introduce a new one.
- **A reading passage is ONE BLOCK.** `PassagePage` splits on
  `/(?<=[.!?»])\s+/`, so an authored newline is silently discarded.
- **A glossary key of five or more words can never match.** `MAX_GLOSS_WORDS` is
  four, and longest-match-first means a short entry inside a longer one
  underlines nothing. Check with the real `segmentSentence`, comparing matched
  **keys**, not matched text.
- **A glossary key must appear in the passage VERBATIM.** a2.08 authored
  `la vue` and `le choix` while the passage read « la plus belle vue » and
  « le meilleur choix »: the article sits three words from the noun, so neither
  key underlines anything.
- **A `table` in a reference sheet clips at FOUR columns on a Pixel 6.** Three
  is the ceiling. A sheet does not scroll sideways, `validateDensity` exempts a
  sheet, the schema takes any number of `cols`, and the seed is correct either
  way — **only the phone finds this one.** Put the fourth column's content in
  `rowDetails`, which opens on tap and has the room.

---

## 3. Respelling convention, and where the checker is wrong

House convention: hyphenated syllables, stressed syllable capitalised, **nasal
vowels closed with a superscript `ⁿ`, never a plain n or m**, `/ø œ/` as `EU`,
`/y/` as `Ü`. Import `hasPlainNasalFor` from `density.logic.ts`; never write
your own.

**But know its two blind spots before you trust it.**

**It cannot see a word-internal nasal.** Its test needs the n or m to end a
token, so `sep-TAHNBR`, `noh-VAHNBR`, `day-SAHNBR` and `dee-MAHNSH` all pass
while being wrong. a1.09 had three such rows out of five. **If your lesson has
nasal-carrying words, assert the superscript on them BY NAME as well as calling
the shared checker.**

**It false-positives on words with a real /n/ that it reads as a nasal.**
Measured 2026-08-06:

| word | pronunciation | flagged | correct fix |
|---|---|---|---|
| `jaune` | /ʒon/, real n | `ZHOHN` flagged | `ZHON` (**not** a superscript) |
| `automne` | /ɔ.tɔn/, silent m, real n | `o-TON`, `oh-TUHN`, `loh-TOHN` all flagged | `o-TONN` or `oh-TONN` |
| `la saison` | /sɛ.zɔ̃/, genuine nasal | `seh-ZOHN` flagged | `seh-ZOHⁿ` |

The first two have **no nasal vowel at all**, so "fixing" them with `ⁿ` teaches
a sound that is not there. `automne` cannot pass with any single-N respelling,
because the checker looks for a vowel after the n in the French spelling and
`automne` has `mne`. Choose a form that avoids a token-final vowel+N, and say in
your header that you did and why.

### And NOTHING in this project checks a liaison

`hasPlainNasalFor` looks at nasals. `validateDensity` looks at notation
delimiters. The schema looks at neither. **No layer checks that a respelling
carries a liaison the French requires**, and a2.08 shipped four `est aussi`
frames respelled `eh oh-see`, with the t missing, past every gate.

The house is unambiguous across 109 respelled rows and writes the moving
consonant **onto the following syllable**, never as a tie:

| French | respelling |
|---|---|
| c'est en panne | `SEH TAHN PAHN` |
| il est une heure | `EEL EH TÜN UHR` |
| des écouteurs | `day-zay-koo-TUR` |

That is also what avoids **U+203F**, which renders as a low underscore on a
Pixel 6 and is already live in shipped sons.10 content.

The contexts worth a by-name table in any lesson whose frames create one:
`est` + vowel, `plus` + vowel, `moins` + vowel, `des` + vowel. An **h aspiré
blocks it** (`plus haut` is `PLÜ OH`), so the rule is worth stating rather than
inferred.

**`plus` is three sounds, not two**: silent before a consonant (`plü GRAHⁿ`), a
/z/ before a vowel (`plü-zoo-MWAN`), an /s/ with nothing after it (`PLÜS`).
a2.08 shipped a card calling `plus intéressant` silent.

---

## 4. Quiz rules

Six legal `format` values, from `schema.ts:955`, and there are exactly six:

```
mcq | tapSilent | listenChoose | typeIn | speak | errorSpot
```

- **At most half may be `mcq`.** a1.08 landed at 11/24, a1.09 at 10/24.
- **Every question needs a `why` that teaches the rule** and a `ref` naming a
  section that exists. Every built A1 lesson is at 100%; a1.04 came off the
  waiver list on 2026-08-05 to get there. Do not reverse it.
- **Correct answers must not cluster**: the density validator fails any option
  slot holding more than 40% of closed-format questions.
- **Every free-text question must accept the answer it displays.** Check through
  the real `matchesAccept`.
- **Each round names `targets`, and `drillForRound` fires the drill of the FIRST
  resolving target only, then stops.** A drill named in second place is dead
  content. a1.05 shipped two such drills and a1.07's first draft a third. Make
  each teaching drill the first resolving target of exactly one round, and
  assert it.

### What `fold()` can and cannot test

Free text is compared through `fold()`, which strips accents, case, punctuation
and **all whitespace**.

**No free-text format can test a capital letter.** `errorSpot` runs the *same*
`matchesAccept` → `fold()` path as `typeIn`. Both the a1.08 and a1.09 briefs
recommended `errorSpot` for the capital and both were wrong. **Only `mcq` can**,
because its options are picked rather than typed and `quiz-duplicate-option`
compares them case-sensitively.

`fold()` also cannot test a space (`le douze mars` folds to `ledouzemars`) or an
accent (`ete`, `Été`, `été` all fold together). It **does** keep a final `-e` and
`-s`, so agreement is genuinely testable by `typeIn`.

---

## 5. Wiring

Model on the newest precedent, which is `author-mois-batch.ts` /
`merge-mois-into-seed.ts` / `mois-{corpus,lesson,terms}.ts`.

- **`scripts/author-<name>-batch.ts`** writes to Postgres. Validate everything
  before touching the database, upsert in one transaction, idempotent by id,
  `--dry-run` reports without writing.
- **`scripts/data/<name>-{corpus,lesson,terms}.ts`** holds the content. The
  corpus file is the single source of truth for every `fr`, `ipa`, `respell` and
  `en` the lesson displays; the lesson reads them through helpers and never
  restates them.
- **`scripts/merge-<name>-into-seed.ts`** writes `seed.json`. It must **name the
  lessons it must not disturb rather than counting them**: a count alone lets a
  one-for-one swap through.
- Add **`content:<name>`** to `package.json` beside the other `content:` scripts.
- **Assert the reframe count against an explicit constant**, not a figure
  derived from the lesson. A derived count compares the content to itself and
  passes on any rewording.
- **Run the real functions in your guards.** a1.08 shipped a hand-rolled copy of
  `endingPopulation` carrying a `level === 'a1'` filter the real one does not
  have, let four rows through, and moved two of a1.03's printed cards. A guard
  that reimplements the thing it guards is free to drift from it.
- **Gendered single-word nouns are radioactive.** Anything with `gender` set,
  `kind: 'word'`, and no space in its bare noun joins a1.03's measured ending
  population, and `a1-03-genre.test.ts` re-measures twenty printed figures from
  the seed on every run. Multi-word phrases and ungendered rows are safe. Check
  through the real `endingPopulation` and withdraw rather than argue.

### The publish hazard, which has cost real work twice

`seed.json` and Postgres are two copies and they drift. `content:publish`
regenerates the seed **from the database**, so publishing before applying the
batch silently deletes the lesson from the seed. `sons.07.l1` was written to the
seed, erased by someone else's publish, and survived only because its source
files were intact.

**Order: apply to Postgres first, merge into the seed second, publish only when
both agree.**

**Never `git checkout seed.json`** to undo something. It discards other authors'
uncommitted lessons. Re-run the merge scripts.

Run `pnpm content:parity` before you start and again before you finish. It has
been exiting 1 on three pre-existing divergences (`sons.09.l1` seed-only,
`b2.01.l1` db-only, `sons.08.l1` shape drift) that are not yours to fix. If it
names **your** lesson, that is yours.

### `seed.version` is not your counter

`seed.version` is the **OTA snapshot number**. `publish-content.ts` derives it
from `content_snapshots` as `previous + 1`, and `content.ts` compares it against
the downloaded manifest to decide whether to adopt an update. **A merge must
never hand-bump it.** Earlier briefs said "move the version counter forward from
19" and meant the *lesson's* own `version`, which the merge prints as
"replacing vX with vY". Move that one; leave `seed.version` alone.

---

## 6. The gates

```bash
cd ealch-v2
npx tsc --noEmit
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
```

**Measure the baseline yourself before you start.** It moves every time a lesson
lands: 1419 before a1.08, 1480 before a1.09, 1559 after. A lesson brings roughly
60 to 80 tests. Yours must not reduce whatever it is when you begin.

Use `node --test`, the command in `package.json`. `npx tsx --test` reports
failures in `i18n.test.ts` and `content.logic.test.ts` that do not reproduce
under the real runner; do not chase them.

`npx tsc --noEmit` in **`ealch-v2` must be 0**. `ealch-admin` carries five
pre-existing errors in older lesson data files; do not add to them.

`lesson-contract.test.ts` runs over every lesson and fails, naming your lesson
and mission number, if a `practiceOn` / `itemIds` / `sheetId` / `terms` id does
not resolve, a quiz question or control check has no `why`, an act names a
missing section or two acts claim one, a quiz `ref` names a section not in the
lesson, a section renders empty, a sub-dividing section does not own its layout,
an authored quiz question is unreachable, or a reading glossary is authored
where nothing renders it. **It does not check `imageRef`.**

### Your own test

Model on `a1-09-mois.test.ts` (newest, 79 tests) and `sons-07-elision.test.ts`
(most thorough). Beyond your lesson's specific assertions, always include:

- the spine in order, and the act structure
- the reframe verbatim, the exact number of times authored
- tranches release every taught item exactly once and nothing untaught, and no
  tranche releases an item the acts before it have not shown
- no duplicate `fr` within a theme, computed the way
  `flashhub-coverage.test.ts` computes it (article stripped)
- no dead corpus entry, and every declared `itemId` on a screen
- the exam is at most half `mcq`, every question has a `why`, and every
  free-text question accepts the answer it displays
- seed parity that **derives** every figure from the authored source

**Do not reimplement app logic inside a test.** An earlier a1.01 test inlined its
own glossary lookup, copied the version that was already broken, and passed
while the feature was dead. Import the real function.

**A hardcoded count fails on itself** the first time content legitimately
changes, and the fix is then to edit the test, which is how a test comes to
certify a bug. The exceptions are numbers that are the SHAPE of the lesson (the
seven days, the twelve months, the four seasons), where a quiet drop is exactly
what you are guarding against.

**Mutation-test your own assertions before you claim they work.** Break the
contrast, drop a vocabulary item, leak a neighbour's content, un-repair a
respelling, and confirm each one goes red. An assertion that cannot fail is
worse than no assertion.

---

## 7. Device verification

The suite passing is necessary and not sufficient. Four failure classes are
invisible to tests and obvious in ten seconds on a phone: a card sized by
guessing that runs past the bottom and takes its buttons with it; a field
authored, schema-valid and rendered by nothing; a gesture that silently stops
meaning anything; and chrome repeated on one screen.

```bash
cd ealch-v2 && node node_modules/expo/bin/cli start --port 8082
```

- The dev-launcher scheme comes from the **slug**:
  `exp+wonerock://expo-development-client/?url=http://127.0.0.1:8082`.
- **Do not use `adb shell input keyevent`.** It crashes this New Architecture
  dev build with a native NPE in `ReactActivityDelegate.onKeyDown` and looks
  exactly like an app crash. Use `input tap` and `input swipe` only.
- **Pre-build the bundle on the host** before pointing the phone at Metro. An
  18 MB cold build over `adb reverse` dies with `unexpected end of stream`.
- **An adb daemon restart silently drops `adb reverse`.** The symptom is a
  full-screen `java.net.ConnectException` that looks like Metro died. Re-run
  `adb reverse tcp:8082 tcp:8082`.
- Metro wants ~2 GB free and takes a while to bind; poll for the listener.
- The app takes 40 to 60 seconds to render. A white screen is usually patience.
- **Taps on the pager's Back/Next frequently do not register.** Horizontal
  swipes do. **Deck sections eat horizontal swipes**, so swiping drifts: read
  the mission number off the header rather than counting.
- The reliable jump is the overview's **"See all N missions"** list.
- A resume interstitial swallows the first tap.

### When there is no device

adb is not always reachable. **Do the host half rather than skipping
verification, and say plainly which half you did.** This catches real defects:

```bash
curl -s -o /tmp/entry.bundle -w "%{http_code} %{size_download}\n" \
 "http://127.0.0.1:8082/.expo/.virtual-metro-entry.bundle?platform=android&dev=true&hot=false&transform.engine=hermes&transform.routerRoot=app"
```

Then **grep the served bundle for your new strings and for the strings you
removed**. Also grep the renderer for a `case` handling every section type you
used.

What this cannot tell you is whether a card fits. Name that gap in your report.

### "Metro is serving a stale bundle" was a misdiagnosis. Fixed 2026-08-06.

Two sessions were reported done on the strength of a device that appeared not to
pick up new content, and the cause was recorded as Metro caching. **It was not
Metro.** The bundle was fresh every time.

The app loads content in three layers: the bundled `seed.json`, then a cached OTA
snapshot from AsyncStorage, then the network. `mergeCorpus` overlays the snapshot
**on top of** the seed, so **for any id present in both, the cache won**.
`refreshFromRemote` had been dev-guarded since the Phase 10 sons.02/03 incident,
which stopped a dev build ACQUIRING a stale overlay, but `initContent` still read
a cache the device already held. On any phone that had run a release build or
fetched once, an edited lesson or a repaired respelling stayed invisible through
any number of rebuilds, and nothing in the app could clear it.

The tell, if it ever comes back: **a newly added lesson appears and an edited one
does not.** New ids have nothing to lose to; edited ids lose to the cache.

`adoptedForLaunch()` in `content.logic.ts` now returns null in `__DEV__`, so a
dev build shows exactly what is in your seed. Production is unchanged.
`clearContentCache()` in `content.ts` drops the snapshot on demand, which is the
remedy for a release build holding something bad. Both are pinned by tests in
`content.logic.test.ts`.

**So a device test now means what it says.** If content still does not appear
after a rebuild, look for a genuine cause rather than assuming the cache.

---

## 8. House rules

- **No em dashes anywhere.** Enforced by test.
- **No "honest"/"honesty"** in authored content. Enforced by test, and it catches
  "honestly" too.
- **English UI chrome, French content.** The existing guard only reads component
  source, so an authored French label passes CI and reaches the screen. `frSub`
  is the one field that is deliberately French.
- **Instruction and context are English, even inside French content.** Paul's
  rule, 2026-08-04: in an A1 passage, anything not inside `« »` is English.
- **No grammar jargon on a learner surface.** `grammarIntroduced` is addressed to
  the curriculum and may use the precise words; cards may not.
- `*.md` is gitignored here; a doc you write needs `git add -f`.
- Do not use AI-tell phrasing. Banned: "falls fast", "trip up", "half of
  everything", "this is the big one", "listen to the trap", "get those two
  right", "this is the part that pays", "here is the catch", and anything of
  that register.

---

## 9. Known debt: do not copy these

- `sons.02.l1`, `sons.03.l1` and `a2.01.l1` sit on the `why` waiver list in
  `lesson-contract.test.ts`. The list can only shrink.
- Seven sons.06 sections declare more than 3 term chips.
- sons.06 missions 20 and 23 are both `practice` doing the same job.
- `TapRow.say`, `TapRow.detail.say` and `flashcards cards[].say` are device-TTS
  only and cannot hold a rendered clip: only a section has an `audioRef`.
- The `ɥ` glide is respelled three ways across shipped content (`WEET`, `NWEE`,
  `LÜEE`). Do not add a fourth.
- Several common words carry competing respellings in different themes
  (`orange` has five, `le vent` three, `l'automne` three). Repair only what
  breaks a stated rule; a variant is not a violation.

---

## 10. Audio: briefs only

Author every audio spec so the lesson is render-ready, then stop.
`Lesson.audio.recorded` entries with real `recordingId`s, section-level specs,
and narration in `warm → focus → input → practice → produce → check → cheat`
order.

**Do not run `pnpm audio:render`.** It spends real ElevenLabs credits.
`CLIP_MANIFEST` is empty by design, so every card falls back to device TTS until
the studio delivers; a `recordingId` resolving to nothing is the correct
shipping state. `ELEVENLABS_API_KEY` is not set in `ealch-admin/.env`, so even
`--dry-run` exits 1 on the dictée scope. Never run it unscoped: a global run
enumerates over 15,000 units.

**Write the constraints that cannot be recovered later into `desc`.** A rule
about how something is recorded becomes invisible the moment the clip is
delivered. In particular: anything the learner must hear **as a contrast** is
one take with one voice, because two recordings are two performances and the
learner will hear the performance rather than the language.
