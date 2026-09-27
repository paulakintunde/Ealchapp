// Generate a B1 lesson's act-opener art with GPT Image 2 (via Fal), straight
// from its `<slug>-image-prompts.md`.
//
// Same request as gen-rythme-images.mjs (quality 'medium', landscape 4:3,
// JPEG). The prompt file is the source of truth: each `## Act NN` heading is
// followed by a `**Save the image as:** \`<path>\`` line and one prompt
// paragraph that already carries the house STYLE block in full, so this script
// adds nothing to the prompt.
//
// Usage (from ealch-admin/):
//   node scripts/gen-b1-images.mjs medias emotions      every missing act image
//   node scripts/gen-b1-images.mjs medias --force       regenerate even if present
//   node scripts/gen-b1-images.mjs medias --dry         list what it would make
//
// Costs roughly $0.05 per image. Existing files are skipped unless --force, so
// a re-run after one failure is cheap. NOT part of any build: it spends real
// credits. Register the files in ealch-v2/src/content/lessonImages.ts after.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const B1 = path.resolve(here, 'data/b1');
const ENV = path.resolve(here, '../../ealch-v2/.env');
const FAL_KEY =
  process.env.FAL_KEY || (fs.existsSync(ENV) ? fs.readFileSync(ENV, 'utf8').match(/FAL_KEY=(.+)/)?.[1]?.trim() : null);

const SLUGS = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const FORCE = process.argv.includes('--force');
const DRY = process.argv.includes('--dry');

/** Pure: one spec per `## Act` heading, with its save path and prompt. */
export function parsePromptFile(md) {
  const specs = [];
  const blocks = md.split(/^## /m).slice(1);
  for (const b of blocks) {
    const head = b.split('\n')[0];
    const act = head.match(/^Act\s+(\d+)/i);
    if (!act) continue;
    const save = b.match(/\*\*Save the image as:\*\*\s*`([^`]+)`/);
    if (!save) throw new Error(`Act ${act[1]}: no "Save the image as" line`);
    const rest = b.slice(b.indexOf(save[0]) + save[0].length);
    const para = rest.split(/\n\s*\n/).map((p) => p.trim()).find((p) => p && !p.startsWith('**') && !p.startsWith('---'));
    if (!para) throw new Error(`Act ${act[1]}: no prompt paragraph`);
    specs.push({ act: Number(act[1]), dest: save[1], prompt: para.replace(/\s*\n\s*/g, ' ') });
  }
  return specs;
}

async function generate(spec) {
  if (fs.existsSync(spec.dest) && !FORCE) return 'skipped';
  const res = await fetch('https://fal.run/openai/gpt-image-2', {
    method: 'POST',
    headers: { Authorization: `Key ${FAL_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: spec.prompt,
      image_size: 'landscape_4_3',
      quality: 'medium',
      num_images: 1,
      output_format: 'jpeg',
    }),
  });
  const json = await res.json();
  if (!json.images?.length) {
    console.error(`  FAIL   ${spec.dest}: ${JSON.stringify(json).slice(0, 300)}`);
    return 'failed';
  }
  const buf = Buffer.from(await (await fetch(json.images[0].url)).arrayBuffer());
  fs.mkdirSync(path.dirname(spec.dest), { recursive: true });
  fs.writeFileSync(spec.dest, buf);
  console.log(`  ok     ${spec.dest}  (${(buf.length / 1024).toFixed(0)} KB)`);
  return 'ok';
}

async function main() {
  if (!SLUGS.length) throw new Error('name at least one slug, e.g. medias');
  if (!FAL_KEY && !DRY) throw new Error('No FAL_KEY found (checked env and ealch-v2/.env).');
  const results = [];
  for (const slug of SLUGS) {
    const specs = parsePromptFile(fs.readFileSync(path.join(B1, `${slug}-image-prompts.md`), 'utf8'));
    console.log(`\n${slug}: ${specs.length} prompts`);
    for (const s of specs) {
      if (!s.dest.includes(`/assets/lessons/${slug}/`)) throw new Error(`${slug} act ${s.act}: save path ${s.dest} is outside assets/lessons/${slug}/`);
      if (DRY) { console.log(`  act${String(s.act).padStart(2, '0')}  ${fs.existsSync(s.dest) ? 'exists' : 'missing'}  ${s.prompt.length} chars`); continue; }
      results.push(await generate(s));
    }
  }
  const n = (k) => results.filter((r) => r === k).length;
  if (!DRY) console.log(`\n  ${n('ok')} generated, ${n('skipped')} skipped, ${n('failed')} failed`);
  if (n('failed')) process.exit(1);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((e) => { console.error(e.message ?? e); process.exit(1); });
}
