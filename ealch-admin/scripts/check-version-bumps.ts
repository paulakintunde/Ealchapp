// Did a lesson's `version` move for a reason the runtime cares about?
//
//   pnpm content:versions              compare the working seed against HEAD
//   pnpm content:versions <ref>        against any git ref
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY THIS EXISTS: THE HOUSE RULE AND THE RUNTIME DISAGREE
// ══════════════════════════════════════════════════════════════════════════
//
// `A2-BRIEF-CORRECTIONS.md` §10 says, flatly:
//
//     Move the version counter rather than correcting under the same number.
//     Two different bodies under one version is the drift this project has
//     lost work to twice.
//
// That is a rule about AUTHORING PROVENANCE and it is good advice for it. It is
// also, read literally, an instruction to bump on every edit — and the RUNTIME
// reads `Lesson.version` for something else entirely:
//
//     // progress.logic.ts, markMission()
//     const base = rec && rec.v === version ? rec : { v: version, done: [], xp: 0 };
//
// A version mismatch DISCARDS the learner's completed-mission list and their
// lesson-local XP. The comment above it says exactly why:
//
//     `v` mirrors Lesson.version — a re-authored lesson (sections added or
//     reordered) starts a fresh record rather than mis-checking rows by stale
//     index.
//
// So the reset exists to protect against SECTION INDEX DRIFT. `done` holds
// section INDEXES; if the section list changes, stored indexes point at the
// wrong missions and the record has to go. If the section list is unchanged,
// the indexes are still valid and the reset costs the learner their checkmarks
// and XP for nothing.
//
//     BUMP        when the section list changes: added, removed, reordered
//     DO NOT      for a text-only edit inside a section
//
// Blast radius of a needless bump, measured: `lessonMissions` is read by
// `app/missions.tsx` for the mission checkmarks, is persisted, and is NOT in
// `sync.ts`, so it is device-local. Attempts, SRS, sessions and streak are
// separate stores and are untouched. It is not catastrophic; it is every A2
// learner losing every A2 checkmark and per-lesson XP, which is not a thing to
// ship for a reworded sentence.
//
// FOUND BY a2.35, which had itself bumped four lessons for a five-string jargon
// repair before measuring any of this.
//
// A NOTE ON THE BASELINE. `content_snapshots` stores version, path, checksum
// and counts — not the bodies — so the last PUBLISHED state cannot be diffed
// from the database. git is the baseline, which is why this takes a ref.

import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

/** Repo-relative, because that is how `git show` names it, and resolved from
 *  this file rather than from the caller's cwd: pnpm runs scripts with the cwd
 *  at `ealch-admin/`, and the first version of this read `ealch-admin/ealch-v2/…`
 *  and died on ENOENT. */
const SEED = 'ealch-v2/src/content/seed.json';
const ROOT = join(import.meta.dirname, '../..');
const BASE = process.argv[2] ?? 'HEAD';

type Lesson = { id: string; version: number; sections: { id: string }[] };
type Seed = { lessons: Lesson[] };

const h = (o: unknown) => createHash('md5').update(JSON.stringify(o)).digest('hex').slice(0, 10);
const sectionIds = (l: Lesson) => l.sections.map((s) => s.id).join('|');

let before: Seed;
try {
  before = JSON.parse(execSync(`git show ${BASE}:${SEED}`, { maxBuffer: 1e9, cwd: ROOT }).toString());
} catch {
  console.error(`\n  cannot read ${SEED} at ${BASE}\n`);
  process.exit(1);
}
const after: Seed = JSON.parse(readFileSync(join(ROOT, SEED), 'utf8'));

const B = new Map(before.lessons.map((l) => [l.id, l]));

const needless: string[] = [];
const missing: string[] = [];
const correct: string[] = [];

for (const now of after.lessons) {
  const was = B.get(now.id);
  if (!was || h(was) === h(now)) continue;
  const structural = sectionIds(was) !== sectionIds(now);
  const bumped = now.version > was.version;
  const line = `${now.id.padEnd(12)} v${was.version} -> v${now.version}   sections ${was.sections.length} -> ${now.sections.length}`;
  if (bumped && !structural) needless.push(line);
  else if (!bumped && structural) missing.push(line);
  else correct.push(line);
}

const changed = needless.length + missing.length + correct.length;
console.log(`\n  ${changed} lesson body/bodies changed since ${BASE}\n`);
console.log(`  correct                             ${correct.length}`);
console.log(`  bumped for a TEXT-ONLY edit         ${needless.length}`);
console.log(`  section list changed, version held  ${missing.length}`);

if (needless.length) {
  console.log('\n  ✖ BUMPED WITHOUT A SECTION CHANGE. Each of these resets every');
  console.log('    learner\'s mission checkmarks and lesson XP for nothing:');
  for (const l of needless) console.log(`      ${l}`);
}
if (missing.length) {
  console.log('\n  ✖ SECTION LIST CHANGED AND THE VERSION HELD. Stored indexes now');
  console.log('    point at the wrong missions:');
  for (const l of missing) console.log(`      ${l}`);
}
if (correct.length && !needless.length && !missing.length) {
  console.log('\n  ✓ every version move matches what the runtime does with it');
}

// Advisory by design: it cannot know that a bump was a deliberate decision to
// reset a lesson, and a script that blocks a commit on a judgement call gets
// disabled. It reports; a human decides.
console.log('');
