// Generate the sons.06.l1 lesson illustrations with GPT Image 2 (via Fal).
//
// House style is set by the existing bundled art (assets/lessons/salutations/
// story-bakery.jpg, assets/lessons/alphabet/*): flat editorial illustration,
// muted warm palette of cream / dusty blue / terracotta / sage, soft geometric
// figures with no outlines, real French signage, subtle paper grain. Every
// prompt below inherits STYLE so the new set sits beside the old one rather
// than looking like a different product.
//
// Usage (from ealch-admin/):
//   node scripts/gen-muettes-images.mjs            generate everything missing
//   node scripts/gen-muettes-images.mjs scene      generate one by key
//   node scripts/gen-muettes-images.mjs --force    regenerate even if present
//
// Costs roughly $0.05 per image at quality 'medium'. Existing files are
// skipped unless --force, so a re-run after one failure is cheap.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(here, '../../ealch-v2/assets/lessons/muettes');

const FAL_KEY =
  process.env.FAL_KEY ||
  (fs.existsSync(path.resolve(here, '../../ealch-v2/.env'))
    ? fs.readFileSync(path.resolve(here, '../../ealch-v2/.env'), 'utf8').match(/FAL_KEY=(.+)/)?.[1]?.trim()
    : null);

if (!FAL_KEY) {
  console.error('No FAL_KEY found (checked env and ealch-v2/.env).');
  process.exit(1);
}

/** The house look, appended to every prompt. Kept in one place so the set
 *  stays coherent and a style change is a one-line edit. */
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
    key: 'scene-boulangerie',
    file: 'scene-boulangerie.jpg',
    size: 'landscape_4_3',
    prompt: `Interior of a small French neighbourhood bakery early on a weekday morning, seen from behind the customer. A young traveller with a canvas shoulder bag stands at the counter facing a friendly baker in a white apron. Between them, a glass case of croissants and pains au chocolat, and behind her tall wicker baskets of baguettes. A small chalkboard on the counter. Morning light through a shopfront window, Lyon street visible outside. Calm, warm, slightly hesitant mood. ${STYLE}`,
  },
  {
    key: 'scene-marche',
    file: 'scene-marche.jpg',
    size: 'landscape_4_3',
    prompt: `An outdoor French market stall on a bright Saturday morning. A stallholder in a canvas apron stands behind a table of folded cloth bags and woven baskets, handing one to a customer who is smiling and confident. Striped awning overhead in sage green and cream, plane trees and shuttered stone buildings behind. Crates of vegetables at the edge of frame. Cheerful, easy, transaction going well. ${STYLE}`,
  },
  {
    key: 'cover',
    file: 'cover.jpg',
    size: 'landscape_4_3',
    prompt: `A conceptual illustration about silent letters in French. A large cream page or card floats centred, and on it a few oversized letterforms are arranged in a row: most are solid warm slate blue, but the final letters are rendered as pale ghosted outlines, faint and translucent, as if fading away. Soft shadow beneath the page. Minimal, elegant, no words, just abstract letterforms. Plenty of empty cream space around the card. ${STYLE}`,
  },
  {
    key: 'careful',
    file: 'careful.jpg',
    size: 'landscape_4_3',
    prompt: `A friendly educational illustration of four wooden alphabet blocks standing in a row on a cream surface, each block showing one large capital letter: C, R, F, L. The four blocks are solid, warm and brightly lit in terracotta and slate blue, casting soft shadows. Behind them, four more blocks lie tipped over and faded pale grey, out of focus, as if asleep. The contrast between the four standing blocks and the fallen ones is the whole subject. Clean, uncluttered, lots of cream space. ${STYLE}`,
  },
  {
    key: 'ghost-h',
    file: 'ghost-h.jpg',
    size: 'landscape_4_3',
    prompt: `A gentle, slightly playful illustration of a single large letter H rendered as a translucent pale ghost, soft edges, floating just above a cream surface and casting almost no shadow. It is friendly rather than spooky. Beside it, two small solid words-shaped blocks in slate blue sit close together, one touching the ghost and passing through it. Minimal composition, enormous amount of empty cream space, calm. ${STYLE}`,
  },
  {
    key: 'alarm-clock',
    file: 'alarm-clock.jpg',
    size: 'landscape_4_3',
    prompt: `A small round vintage alarm clock in terracotta and brass sits on a cream surface, mid-ring, with two soft motion arcs on either side. Directly beside it a sleeping letter block in dusty slate blue is waking up, tilting upright, small sleep-lines lifting away from it. Warm, charming, simple. Generous empty space around the objects, soft shadows. No text. ${STYLE}`,
  },
  {
    key: 'the-stop',
    file: 'the-stop.jpg',
    size: 'landscape_4_3',
    prompt: `A close, calm illustration of a human hand with a single index finger resting over the end of a printed word on a cream page, covering the last letter. The visible part of the word is crisp warm slate blue; the covered end is hidden beneath the fingertip. Simple soft-skinned rounded hand, no jewellery. Shot from slightly above at a gentle angle. Quiet, instructional, uncluttered, lots of empty page. ${STYLE}`,
  },
  {
    key: 'roundup',
    file: 'roundup.jpg',
    size: 'landscape_4_3',
    prompt: `A warm closing illustration: a confident traveller walking along a French street in soft morning light, canvas bag over one shoulder, reading a shop sign above a doorway with an easy expression. Stone buildings with pale blue shutters, a striped awning, a plane tree. Behind them the street recedes gently. Optimistic, unhurried, a sense of arrival and competence. ${STYLE}`,
  },
];

const FORCE = process.argv.includes('--force');
const ONLY = process.argv.slice(2).filter((a) => !a.startsWith('--'));

async function generate(spec) {
  const dest = path.join(OUT, spec.file);
  if (fs.existsSync(dest) && !FORCE) {
    console.log(`  skip   ${spec.file} (exists)`);
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
  // Sequential: Fal rate-limits bursts, and eight images is fast enough.
  for (const spec of todo) results.push(await generate(spec));

  const n = (k) => results.filter((r) => r === k).length;
  console.log(`\n  ${n('ok')} generated, ${n('skipped')} skipped, ${n('failed')} failed\n`);
  if (n('failed')) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
