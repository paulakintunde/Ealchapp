// Compile the curated stage manifests (scripts/data/gen/speak-path/) into the
// corpus `speakPath` array inside seed.json.
//
// Run AFTER curate-speak-path.mjs. Replaces any existing speakPath wholesale —
// the manifests are the single source of truth for the trail; hand-edits to
// seed.json's speakPath do not survive a recompile, by design.
//
// Stages with no items yet (sons/c1 stations awaiting the gap-fill merge) are
// SKIPPED, not shipped empty: validateSpeakStage requires non-empty blocks, so
// an empty station would fail publish. Rerun after the gap-fill merge and they
// join the path automatically.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SEED = path.join(ROOT, 'ealch-v2', 'src', 'content', 'seed.json');
const MANIFEST_DIR = path.join(ROOT, 'ealch-admin', 'scripts', 'data', 'gen', 'speak-path');

const files = fs
  .readdirSync(MANIFEST_DIR)
  .filter((f) => /^stage-\d+\.\d+\.json$/.test(f))
  .sort();
if (!files.length) {
  console.error('No stage manifests found — run curate-speak-path.mjs first.');
  process.exit(1);
}

const seed = JSON.parse(fs.readFileSync(SEED, 'utf8'));
const itemIds = new Set(seed.items.map((i) => i.id));

const speakPath = [];
const skipped = [];
const errors = [];

for (const f of files) {
  const m = JSON.parse(fs.readFileSync(path.join(MANIFEST_DIR, f), 'utf8'));
  const [world, seq] = m.stage.split('.').map(Number);

  if (!m.blocks?.length || !m.selected) {
    skipped.push(`${m.stage} ${m.title} (empty — awaiting gap-fill)`);
    continue;
  }

  const blocks = m.blocks.map((b) => ({ itemIds: b.items.map((it) => it.id) }));
  for (const b of blocks) {
    for (const id of b.itemIds) {
      if (!itemIds.has(id)) errors.push(`${m.stage}: manifest references "${id}" which is not in seed.json`);
    }
  }

  speakPath.push({
    id: `speak.${world}.${seq}`,
    world,
    seq,
    level: m.level,
    title: m.title,
    themes: m.themes,
    blocks,
    version: 1,
  });
}

if (errors.length) {
  console.error(`REFUSING to write: ${errors.length} dangling reference(s).`);
  console.error(errors.slice(0, 10).join('\n'));
  process.exit(1);
}

seed.speakPath = speakPath;
fs.writeFileSync(SEED, JSON.stringify(seed, null, 2));

const nItems = speakPath.reduce((s, st) => s + st.blocks.reduce((x, b) => x + b.itemIds.length, 0), 0);
console.log(`speakPath written: ${speakPath.length} stages, ${nItems} item refs.`);
if (skipped.length) console.log(`Skipped (empty until gap-fill merges):\n  ${skipped.join('\n  ')}`);
