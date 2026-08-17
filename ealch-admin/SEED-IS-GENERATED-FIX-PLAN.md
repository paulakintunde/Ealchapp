# `seed.json` has two lifecycles, and the tests only knew about one

**Written 2026-08-17, after publishing v51. Every figure below was measured, and
the commands that measure each one are named beside it.**

Two suites went red the first time anyone ran `content:publish` in weeks. Both
were fixed reactively in `1893840`. **This file is the preventive work that was
not done**, and it is sized so the next agent can do it in one sitting.

---

## 0. The one paragraph that matters

`seed.json` is written by two different things and they produce **the same
content in a different shape**:

| written by | when | shape |
|---|---|---|
| `merge-<name>-into-seed.ts` | every lesson build | rows appended in place, key order preserved, empty arrays written |
| `publish-content.ts` | every publish | **regenerated from Postgres**, canonical order, empty arrays omitted, unreferenced rows dropped by the cut |

A test written against the merged shape passes for as long as nobody publishes.
v51 was the first publish since 2026-08-16 and it moved **10,082 of 10,227 ids
to a different index** and changed **667 item bodies**, every one of them only
by `grammarPoints: []` being omitted rather than written.

**Any test that string-compares against the seed, or counts an authored block in
the seed, is a publish away from red.**

---

## 1. Already fixed. Do not redo these.

Commit `1893840`.

| file | was | now |
|---|---|---|
| `a2-30-travail-metiers.test.ts` | `strictEqual(JSON.stringify(shipped), JSON.stringify(L))` | deep-equal ignoring key order and `undefined` |
| `a2-29-hotel.test.ts` | `strictEqual(MINE.length, 59)` against the seed | `58`, with `fr.a2.hebergement.086` named as the row nothing references |

---

## 2. What is NOT broken, measured, so nobody re-audits it

Run after any publish: `pnpm -s tsx scripts/_unreach2.ts`

**The cut drops hundreds of rows per non-cut theme and that is correct.** It is
not a defect and it is not what broke anything:

```
theme                    PG(a2)   inSeed   dropped
au-restaurant              188       67      121
courses                    201       61      140
transports-quotidiens      238      119      119
symptomes                  223       59      164
hebergement                132       77       55
internet                   216       99      117
pronoms-essentiels         336      159      177
metiers                     77       77        0   <- in SEED_CUT.themes
ecole                       76       76        0   <- in SEED_CUT.themes
```

Dropped rows are **OTA-only, not lost**: v51 ships 48,888 items against the
seed's 10,227. `.086` was not special for being dropped. It was special for
being dropped **from inside an authored block that a test was counting**.

**a2.08 is clean and needs nothing.** Measured before it publishes: block
`.133`–`.163`, 31 rows in Postgres, **31 referenced by the lesson, 0
unreferenced**. Its `AUTHORED.length === 31` assertion will survive its publish.
`pnpm -s tsx scripts/_a208_block.ts 133 163`

---

## 3. The fix, in three parts, in priority order

### PART A — stop the row existing (the real fix, ~1 hour)

**The batch already knows every id a lesson references. It should refuse an
authored row that nothing reaches.** Doctrine §E says every item must be
reachable; nothing enforced it, so a2.29 authored `.086` and shipped.

Add to the shared batch path (or to each `author-*-batch.ts`, but shared is the
point):

```ts
// Every authored row must be REACHABLE: named by a section, or released by a
// deckTranche. An unreachable row is invisible to a learner, is dropped by the
// publish cut, and breaks any test that counts the block in the seed.
const reachable = new Set<string>([
  ...strs(LESSON.sections).filter((s) => ITEM_ID_RE.test(s)),
  ...(LESSON.deckTranche ?? []).flat(),
  ...(LESSON.itemIds ?? []),
  ...(LESSON.drills ?? []).flatMap((d) => d.items ?? []),
]);
const orphans = ALL_ROWS.filter((r) => !reachable.has(r.id));
if (orphans.length) die(
  `${orphans.length} authored row(s) are reachable from nothing: ${orphans.map((r) => r.id).join(', ')}.\n`
  + '  Doctrine §E: name it in a section, release it in a deckTranche, or do not author it.\n'
  + '  An unreachable row is dropped by the publish cut and takes the block count with it.');
```

**Verify it works** by running it against a2.29's source: it must name `.086`
and nothing else.

> **Why a warning is not enough.** a2.29 had 33 guards and every one was green.
> The row shipped because nothing asked the question, not because someone
> overrode an answer.

### PART B — count the block where it is authoritative (~1 hour)

Roughly nine suites count an authored block **against the seed**. The seed is a
CUT, so the count is only correct while every row happens to be referenced.

Grep for them: `grep -rn "MINE.length\|AUTHORED.length" ealch-v2/src/content/*.test.ts`

Vulnerable today (derive from `seed.items`): **a2.06, a2.07, a2.08, a2.24,
a2.25, a2.27, a2.28, a2.29, a2.32**. Safe already (derive from the source
file): a2.02, a2.09, a2.10, a2.11, a2.12, a2.31, a1.16, a1.22, a1.23.

**The correct pair of invariants**, and it is two assertions rather than one:

```ts
// 1. THE BLOCK is complete and contiguous where it is authoritative — the
//    SOURCE file, which the cut cannot touch.
strictEqual(SRC.ALL_ROWS.length, 59);

// 2. THE SEED holds every id the lesson REFERENCES, which is the property a
//    learner actually depends on. Rows the cut drops are OTA-only by design.
for (const id of L.itemIds) ok(seedIds.has(id), `${id} is referenced and not in the seed`);
```

Nine files, mechanical, and each one gets shorter.

### PART C — one shared helper, so nobody hand-rolls it again (~30 min)

`ealch-v2/src/content/seed-compare.ts`, exported and tested once:

```ts
/** Deep-equal ignoring key order and omitted-vs-empty. The seed is GENERATED by
 *  a publish and hand-MERGED by a build, and the two serialise differently. Any
 *  byte comparison asserts the serialiser rather than the content. */
export function seedEqual(a: unknown, b: unknown): boolean;

/** What a byte comparison would have told you, minus the noise: the paths that
 *  genuinely differ. For a failure message worth reading. */
export function seedDiff(a: unknown, b: unknown): string[];
```

Then a guard so the old shape cannot come back:

```ts
// seed-compare.test.ts
test('no suite string-compares a lesson against its seed copy', () => {
  // JSON.stringify equality against a seed lesson asserts key order, which a
  // publish changes on every id. Use seedEqual().
});
```

---

## 4. The one content decision, and it is a2.29's owner's

`fr.a2.hebergement.086` — « Le problème n'est pas réglé. » — a rung-2 row that
**no lesson references**. Not a2.29's own, and not a2.30, a2.31 or a2.32, which
cite `.074 / .082 / .087 / .091 / .092`.

| option | cost | effect |
|---|---|---|
| **leave it** | none | OTA-only. Reaches learners in the 48,888-item snapshot, absent from the offline binary. Already named in the test. |
| **make it reachable** | lesson edit → `content:hotel` → merge → publish | joins the offline binary; restore `MINE.length` to 59 and drop `UNREACHABLE` |
| **archive it** | one UPDATE | consistent with `fr.a2.internet.009/.010`, and loses a usable line |

**Recommendation: leave it.** It is a legitimate rung-2 line, it is reachable
over the air, and the two-assertion split in PART B makes the seed count stop
caring. Revisit only if a2.29's deck is ever rebuilt.

---

## 5. Order of work, and how to know it worked

```
1. PART A          the batch guard        run against a2.29 source, expect .086 named
2. PART C          the shared helper      seedEqual + seedDiff + its own test
3. PART B          nine suites            one at a time, suite green after each
4. verification    below
```

**The verification that actually proves it**, and it is the one nobody ran for
weeks:

```bash
cd ealch-v2 && node --test "src/**/*.test.ts"            # green BEFORE
cd ../ealch-admin && pnpm content:publish --dry-run      # regenerates nothing, validates all
cd ../ealch-v2 && node --test "src/**/*.test.ts"         # still green
```

A dry-run publish does not write `seed.json`, so step 3 proves only the
validators. **To prove the tests survive a real regeneration**, use the mutation
approach a2.32 used: write the generated seed, run the suite, restore the
original bytes in a `finally`. `ealch-admin/scripts/_a232_mutate.ts` is the rig.

**The standing rule this should leave behind:**

> Publish at least a `--dry-run` in the same session as any lesson merge, and
> run the suite against a regenerated seed before calling a build done. Six
> lessons went out at once in v51 because nobody had published in a week, and
> the two tests that broke had been wrong the whole time.

---

## 6. What this plan deliberately does NOT do

- **It does not widen `SEED_CUT.themes`.** That file says in its own header it
  is a product decision. Measured, for whoever takes it: adding the band's nine
  themes is **+2,150 items, ~2.85 MiB, 13.57 → 16.4 MiB**, and no seed-size
  ceiling is enforced anywhere in code.
- **It does not change `publish-content.ts`.** The generator is right. The
  tests were wrong about it.
- **It does not touch the 39,082 published rows the cut leaves OTA-only.** That
  is the cut working as designed.

---

*Measured with `scripts/_unreach2.ts`, `scripts/_a208_block.ts` and
`scripts/seeddiff` on 2026-08-17 against v51. This file is `.md` and therefore
gitignored: `git add -f` to track it.*
