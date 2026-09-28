// The corpus-wide image guard: a lesson imageRef must resolve to a bundled
// asset, and a bundled asset must have alternative text.
//
// WHY THIS EXISTS. Nothing checked this across the corpus. a1-13-couleurs.test
// checks it for ONE lesson and says so in its own comment; lesson-contract.test
// contains no reference to imageRef at all; and schema.ts's promise that
// "publish fails a dangling imageRef" is conditional on a snapshot asset
// manifest that does not exist yet. So a ref can be authored, published and
// shipped with no art behind it, and the only symptom is a card that draws
// nothing. Running this for the first time found fifteen of them.
//
// THE REGISTRY IS READ AS TEXT, NOT IMPORTED. lessonImages.ts is built on bare
// require() calls that Metro resolves statically and Node cannot resolve at
// all — importing it under `node --test` throws before a single assertion
// runs. Parsing its keys is the strongest guard available from here, and it is
// the same approach a1-13-couleurs.test settled on for the same reason.
//
// SCOPE: LESSONS ONLY, AND THAT IS DELIBERATE. An imageRef has two render
// paths and only one of them is the registry:
//
//   registry  LessonRich.RichImage and its vocabThemes row call lessonImage(),
//             which returns undefined on a miss and draws NOTHING. Lesson
//             sections, their cards, their themes and act openers all go here,
//             so for those a missing entry is a silent defect.
//   remote    ExamAudioPart and voiceflash build a URL with contentAssetUrl()
//             and fetch from R2 or the Supabase content bucket. Exam parts and
//             vocabulary items go here and are NOT supposed to be bundled.
//
// Asserting registration over the whole corpus would therefore fail on exam
// and item art that is remote by design. The seed walk is confined to
// corpus.lessons, and the authored-source scan keeps only refs under
// `lessons/`, which is what every lesson ref in both sources uses today.
//
// IT IS A RATCHET, NOT A CLIFF. The debt below predates the test. Listing it
// keeps the suite green while making every item visible and countable, and any
// NEW ref that arrives unregistered or unlabelled fails immediately — which is
// the b1.01 failure mode this was written for. The lists may only shrink: a
// baseline entry that has been fixed makes the staleness test fail until the
// line is deleted.
import { ok } from 'node:assert';
import { test } from 'node:test';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { seedPlusPacks } from './seed-plus-packs.ts';

const here = dirname(fileURLToPath(import.meta.url));
const REGISTRY_PATH = resolve(here, 'lessonImages.ts');
const SEED_PATH = resolve(here, 'seed.json');
// The admin repo is a sibling checkout. The app can be built without it, so
// the authored-source assertions skip cleanly rather than failing the suite.
const ADMIN_DATA = resolve(here, '../../../ealch-admin/scripts/data');

/* ═══ The baseline ════════════════════════════════════════════════════════ */

/** Authored and published, with no bundled asset: these cards draw nothing on
 *  a device. Emptied 2026-09-22 when the four sons lessons got their art
 *  (gen-sons-missing-images.mjs). Keep it empty: a new entry here is a
 *  deliberate decision to ship a blank card. */
const KNOWN_UNREGISTERED = new Set([
]);

/** Bundled and drawn, with no ALT entry: RichImage passes
 *  accessibilityLabel={undefined}, so TalkBack announces an unlabelled image
 *  (UDL 01). Emptied 2026-09-24: the last 22, all sons and A1 art that
 *  predated the ALT table, were written against the images themselves.
 *  Keep it empty: a new entry here is a deliberate decision to ship an image
 *  a screen reader cannot announce. */
const KNOWN_UNLABELLED = new Set([
]);

/* ═══ Reading the registry and the corpus ═════════════════════════════════ */

const IMAGE_FILE = String.raw`[^']+\.(?:jpg|png|webp)`;

/** Parse lessonImages.ts. `keys` maps each registered ref to the require path
 *  it points at; `alts` is every ref the ALT table labels. */
function readRegistry(): { keys: Map<string, string>; alts: Set<string> } {
  const src = readFileSync(REGISTRY_PATH, 'utf8');
  const [regPart, altPart = ''] = src.split(/const ALT\b/);

  const keys = new Map<string, string>();
  for (const m of regPart.matchAll(new RegExp(`'(${IMAGE_FILE})':\\s*require\\(\\s*'([^']+)'\\s*\\)`, 'gi'))) {
    keys.set(m[1], m[2]);
  }
  // A key in the ALT table is `'ref': '…'` — the require lines end in `')`, so
  // this cannot pick one of those up even if the split ever stops working.
  const alts = new Set<string>();
  for (const m of altPart.matchAll(new RegExp(`'(${IMAGE_FILE})':\\s*'`, 'gi'))) alts.add(m[1]);

  return { keys, alts };
}

/** Every string under an `imageRef` key anywhere beneath the given node. Keyed
 *  on the property name rather than on the value's shape, so a ref authored in
 *  a section type nobody has written yet is still caught. */
function imageRefsIn(node: unknown, out: Map<string, string>, where: string): Map<string, string> {
  if (Array.isArray(node)) {
    for (const child of node) imageRefsIn(child, out, where);
    return out;
  }
  if (node && typeof node === 'object') {
    const id = (node as { id?: unknown }).id;
    const scope = typeof id === 'string' ? id : where;
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
      if (k === 'imageRef' && typeof v === 'string' && v) {
        if (!out.has(v)) out.set(v, scope);
      } else imageRefsIn(v, out, scope);
    }
  }
  return out;
}

/** Published lesson refs, from the seed the app ships with. */
function seedLessonRefs(): Map<string, string> {
  const seed = seedPlusPacks() as { lessons?: unknown };
  return imageRefsIn(seed.lessons ?? [], new Map(), 'seed.json');
}

/** Authored lesson refs, from the admin data the seed is cut from. A lesson is
 *  written, reviewed and put on a device weeks before it is published, so
 *  checking only the seed checks the art last rather than first. */
function authoredLessonRefs(): Map<string, string> {
  const byRef = new Map<string, string>();
  if (!existsSync(ADMIN_DATA)) return byRef;
  for (const rel of readdirSync(ADMIN_DATA, { recursive: true, encoding: 'utf8' })) {
    if (!rel.endsWith('.ts')) continue;
    let src: string;
    try {
      src = readFileSync(join(ADMIN_DATA, rel), 'utf8');
    } catch {
      continue; // a directory entry, or something unreadable — not our business
    }
    for (const m of src.matchAll(/imageRef:\s*['"]([^'"]+)['"]/g)) {
      // Only bundled lesson art. Exam part art and item art resolve remotely
      // through contentAssetUrl and must not be required in the registry.
      if (!m[1].startsWith('lessons/')) continue;
      if (!byRef.has(m[1])) byRef.set(m[1], String(rel).replace(/\\/g, '/'));
    }
  }
  return byRef;
}

/** Art that is commissioned but not yet drawn. The B1 playbook writes the
 *  lesson and a `<slug>-image-prompts.md` naming every save path BEFORE the
 *  images exist, and registers them only once they are on disk. So an authored
 *  ref with a committed prompt behind it is pending, not forgotten. This is
 *  deliberately narrow: it never covers a published ref (seed refs are checked
 *  strictly below), and a ref with no prompt naming its exact path still fails,
 *  which is the b1.01 failure mode. */
function commissionedRefs(): Set<string> {
  const out = new Set<string>();
  if (!existsSync(ADMIN_DATA)) return out;
  for (const rel of readdirSync(ADMIN_DATA, { recursive: true, encoding: 'utf8' })) {
    if (!rel.endsWith('-image-prompts.md')) continue;
    const src = readFileSync(join(ADMIN_DATA, rel), 'utf8');
    for (const m of src.matchAll(/assets\/(lessons\/[a-z0-9/_.-]+\.(?:jpg|png|webp))/g)) out.add(m[1]);
  }
  return out;
}

const REG = readRegistry();
const noAdmin = !existsSync(ADMIN_DATA);
const SEED_REFS = seedLessonRefs();
const COMMISSIONED = commissionedRefs();
/** Every lesson ref the product knows about, published or merely authored. */
const ALL_REFS = new Map([...SEED_REFS, ...authoredLessonRefs()]);

const list = (rows: string[]) => rows.map((r) => `  ${r}`).join('\n');

/* ═══ The parser itself ═══════════════════════════════════════════════════ */

test('the registry parses, so the assertions below are checking something', () => {
  ok(REG.keys.size > 0, `parsed no require() keys out of lessonImages.ts — every assertion below would pass vacuously`);
  ok(REG.alts.size > 0, `parsed no ALT keys out of lessonImages.ts — the alt-text assertions would pass vacuously`);
});

test('the corpus walk finds refs, so the assertions below are checking something', () => {
  ok(ALL_REFS.size > 0, 'found no lesson imageRef in seed.json or the admin data — the walk is broken, not the corpus');
});

/* ═══ The registry against the filesystem ═════════════════════════════════ */

test('every registered image exists on disk', () => {
  const missing = [...REG.keys]
    .filter(([, requirePath]) => !existsSync(resolve(here, requirePath)))
    .map(([ref, requirePath]) => `${ref} -> ${requirePath}`);
  ok(missing.length === 0, `lessonImages.ts requires files that are not there, which fails the Metro build outright rather than degrading:\n${list(missing)}`);
});

/* ═══ The ratchet ═════════════════════════════════════════════════════════ */

test('no new lesson imageRef is unregistered', { skip: noAdmin }, () => {
  const bad = [...ALL_REFS]
    .filter(([ref]) => !REG.keys.has(ref) && !KNOWN_UNREGISTERED.has(ref))
    .filter(([ref]) => SEED_REFS.has(ref) || !COMMISSIONED.has(ref))
    .map(([ref, where]) => `${ref}  (${where})`);
  ok(bad.length === 0, `authored against art that is not bundled. lessonImage() returns undefined and RichImage renders null, so the card draws nothing and no other check says so. Commit the asset, add it to lessonImages.ts, and give it alt text (or, for an unpublished lesson, commit its <slug>-image-prompts.md naming this exact save path):\n${list(bad)}`);
});

test('no published lesson ships with art that is only commissioned', () => {
  const bad = [...SEED_REFS.keys()].filter((ref) => !REG.keys.has(ref) && !KNOWN_UNREGISTERED.has(ref));
  ok(bad.length === 0, `these are in seed.json, so they reach a device as blank cards. A prompt file does not excuse a published ref: draw the art and register it before publishing:\n${list(bad)}`);
});

test('no new registered image is missing alt text', () => {
  const bad = [...REG.keys.keys()].filter((ref) => !REG.alts.has(ref) && !KNOWN_UNLABELLED.has(ref));
  ok(bad.length === 0, `registered with no ALT entry, so RichImage passes accessibilityLabel={undefined} and the image is unlabelled to a screen reader (UDL 01):\n${list(bad)}`);
});

/* ═══ Keeping the baseline honest ═════════════════════════════════════════ */

test('the unregistered baseline has not gone stale', { skip: noAdmin }, () => {
  const fixed = [...KNOWN_UNREGISTERED].filter((ref) => REG.keys.has(ref));
  const gone = [...KNOWN_UNREGISTERED].filter((ref) => !REG.keys.has(ref) && !ALL_REFS.has(ref));
  ok(fixed.length === 0, `these now have art, so the debt list is lying about the size of the problem. Delete them from KNOWN_UNREGISTERED:\n${list(fixed)}`);
  ok(gone.length === 0, `these refs are no longer authored anywhere, so the entry protects nothing. Delete them from KNOWN_UNREGISTERED:\n${list(gone)}`);
});

test('the unlabelled baseline has not gone stale', () => {
  const fixed = [...KNOWN_UNLABELLED].filter((ref) => REG.alts.has(ref));
  const gone = [...KNOWN_UNLABELLED].filter((ref) => !REG.keys.has(ref));
  ok(fixed.length === 0, `these now have alt text. Delete them from KNOWN_UNLABELLED:\n${list(fixed)}`);
  ok(gone.length === 0, `these are no longer registered, so the entry protects nothing. Delete them from KNOWN_UNLABELLED:\n${list(gone)}`);
});
