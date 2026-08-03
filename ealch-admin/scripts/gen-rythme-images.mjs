// Generate the sons.08.l1 lesson illustrations with GPT Image 2 (via Fal).
//
// Same house style and same mechanics as gen-muettes-images.mjs: flat editorial
// illustration, muted warm palette, soft geometric figures, subtle paper grain.
// STYLE is copied verbatim from that script rather than reworded, so the two
// sets sit beside each other instead of looking like different products.
//
// Usage (from ealch-admin/):
//   node scripts/gen-rythme-images.mjs             generate everything missing
//   node scripts/gen-rythme-images.mjs errors      generate one by key
//   node scripts/gen-rythme-images.mjs --force     regenerate even if present
//
// Costs roughly $0.05 per image at quality 'medium'. Existing files are
// skipped unless --force, so a re-run after one failure is cheap.
//
// NOT run as part of the build. It spends real credits, so it is triggered by
// hand. Until it is, `imageRef` on a section resolves to nothing and the card
// simply renders without art (see RichImage) — the same shipping state as an
// unrendered audio clip.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(here, '../../ealch-v2/assets/lessons/rythme');

const FAL_KEY =
  process.env.FAL_KEY ||
  (fs.existsSync(path.resolve(here, '../../ealch-v2/.env'))
    ? fs.readFileSync(path.resolve(here, '../../ealch-v2/.env'), 'utf8').match(/FAL_KEY=(.+)/)?.[1]?.trim()
    : null);

if (!FAL_KEY) {
  console.error('No FAL_KEY found (checked env and ealch-v2/.env).');
  process.exit(1);
}

const ONLY = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const FORCE = process.argv.includes('--force');

/** The house look, appended to every prompt. Copied from the muettes script so
 *  the two sets stay one visual family. */
const STYLE = [
  'Flat editorial vector illustration, in the style of a modern French language textbook.',
  'Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green.',
  'Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading.',
  'Subtle paper grain texture over the whole image. Warm even light.',
  'No text unless explicitly described. Uncluttered composition with generous empty space.',
  'Absolutely no lettering, captions, watermarks or logos beyond what is described.',
].join(' ');

const IMAGES = [
  {
    // s20-errors, mission 22. The card is six wrong-vs-right rows, so the art
    // has to carry the IDEA of a misplaced emphasis without spelling any of it
    // out: evenly spaced beats, one of them wrongly swollen in the middle.
    key: 'errors',
    file: 'errors.jpg',
    size: 'landscape_4_3',
    prompt: `A conceptual illustration about rhythm going wrong. A single horizontal row of seven identical small rounded blocks sits centred on a cream surface, evenly spaced, all in calm dusty slate blue — except one block near the middle which is swollen much larger and rendered in bright terracotta, breaking the even run and pushing its neighbours slightly apart. Soft shadows beneath the row. The subject is the one oversized block interrupting an otherwise perfectly regular rhythm. Minimal, elegant, enormous amount of empty cream space above and below. ${STYLE}`,
  },
  {
    // s01-scene, mission 1. Optional; the scene reads fine without art, but a
    // café counter matches the authored setting.
    key: 'scene-cafe',
    file: 'scene-cafe.jpg',
    size: 'landscape_4_3',
    prompt: `Interior of a small French café early on a weekday morning, seen from behind the customer. A traveller with a canvas bag stands at a zinc counter facing a waiter in a dark apron who is leaning in slightly, head tilted, with a politely puzzled expression, as if he has not quite caught what was said. An espresso machine and a stack of saucers behind him. Morning light through a shopfront window, a Bordeaux street visible outside. Warm, ordinary, a small moment of misunderstanding. ${STYLE}`,
  },
  {
    // s23-roundup, mission 25. Closes the lesson AND the whole sons track.
    key: 'roundup',
    file: 'roundup.jpg',
    size: 'landscape_4_3',
    prompt: `A calm conceptual illustration about even rhythm. Two short horizontal rows of small rounded blocks sit one above the other on a cream surface. Every block is the same size and evenly spaced, in soft dusty slate blue, except the LAST block of each row, which is slightly taller and warm terracotta. A generous gap separates the two rows, as if the phrase breathes between them. Soft shadows. Serene, orderly, resolved. Vast empty cream space around it. ${STYLE}`,
  },
];

async function generate(spec) {
  const dest = path.join(OUT, spec.file);
  if (fs.existsSync(dest) && !FORCE) {
    console.log(`  skip   ${spec.file} (exists, use --force to redo)`);
    return 'skipped';
  }

  const res = await fetch('https://fal.run/openai/gpt-image-2', {
    method: 'POST',
    headers: { Authorization: `Key ${FAL_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: spec.prompt,
      image_size: spec.size ?? 'landscape_4_3',
      quality: 'medium',
      num_images: 1,
      output_format: 'jpeg',
    }),
  });

  const json = await res.json();
  if (!json.images?.length) {
    console.error(`  FAIL   ${spec.file}: ${JSON.stringify(json).slice(0, 300)}`);
    return 'failed';
  }

  const buf = Buffer.from(await (await fetch(json.images[0].url)).arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log(`  ok     ${spec.file}  (${(buf.length / 1024).toFixed(0)} KB)`);
  return 'ok';
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const todo = ONLY.length ? IMAGES.filter((i) => ONLY.includes(i.key)) : IMAGES;
  console.log(`\nGenerating ${todo.length} image(s) into ${OUT}\n`);

  const results = [];
  for (const spec of todo) results.push(await generate(spec));

  const n = (k) => results.filter((r) => r === k).length;
  console.log(`\n  ${n('ok')} generated, ${n('skipped')} skipped, ${n('failed')} failed`);
  console.log('  Then register the files in ealch-v2/src/content/lessonImages.ts,');
  console.log('  or the refs resolve to nothing and the cards render without art.\n');
  if (n('failed')) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
