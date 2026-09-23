// Generate the b1.01.l1 « L'imparfait : la formation » illustrations with
// GPT Image 2 (via Fal).
//
// Twelve act openers, already referenced by the lesson data as
// `lessons/imparfait/actNN.jpg`, plus three images the Trail spine adds:
// the unit cover for the pull-up sheet, the unit-complete moment, and the
// empty state for a band that has no content yet.
//
// House style is inherited from gen-muettes-images.mjs / gen-rythme-images.mjs
// so this set sits beside the existing bundled art rather than looking like a
// different product. Do not edit STYLE here alone: change it in all three or
// the corpus stops matching itself.
//
// Usage (from ealch-admin/):
//   node scripts/gen-imparfait-images.mjs            generate everything missing
//   node scripts/gen-imparfait-images.mjs act05      generate one by key
//   node scripts/gen-imparfait-images.mjs --force    regenerate even if present
//
// Roughly $0.05 per image at quality 'medium', so the full set is about $0.75.
// Existing files are skipped unless --force.
//
// AFTER GENERATING: each file must be added to ealch-v2/src/content/
// lessonImages.ts or the ref resolves to nothing and the section renders
// text-only. The map lines are printed at the end of a successful run.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(here, '../../ealch-v2/assets/lessons/imparfait');

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

/** The imparfait is the tense of memory and of scenery: things that were
 *  going on, not things that happened once. Every act opener leans on that,
 *  so the set reads as one story rather than twelve grammar diagrams. */
const MOOD = 'Warm nostalgic mood, as if remembering. Soft, unhurried.';

const IMAGES = [
  {
    key: 'act01',
    file: 'act01.jpg',
    size: 'landscape_4_3',
    alt: 'An old photograph of a family garden lying on a kitchen table, with a modern phone beside it showing the same garden today.',
    prompt: `A single old square photograph with a white border lies on a scrubbed wooden kitchen table, showing a summer garden with a swing and two small children. Beside it, a hand rests next to a plain notebook. Soft late-afternoon light from a window off frame. The photograph is the clear subject and everything else is quiet. Nothing else on the table. ${MOOD} ${STYLE}`,
  },
  {
    key: 'act02',
    file: 'act02.jpg',
    size: 'landscape_4_3',
    alt: 'A group of people at a long table, one of them standing to speak for everyone.',
    prompt: `Five friends around a long table in a warm kitchen, mid-conversation, all leaning slightly toward one person who is speaking with an open hand gesture. The group is drawn as a single cluster so it reads as a we rather than as individuals. Bowls and a carafe on the table. Simple, companionable, ordinary evening. ${MOOD} ${STYLE}`,
  },
  {
    key: 'act03',
    file: 'act03.jpg',
    size: 'landscape_4_3',
    alt: 'Six small cards in a row, four of them identical in colour and two different.',
    prompt: `Six plain cream cards stand in a neat row on a slate blue surface, each casting a soft shadow. Four of the cards are exactly the same shade of terracotta and sit together; the remaining two are sage green and warm ochre. The sameness of the four and the difference of the two is the entire subject. Abstract, calm, no letters, no words, lots of empty space above the row. ${STYLE}`,
  },
  {
    key: 'act04',
    file: 'act04.jpg',
    size: 'landscape_4_3',
    alt: 'A steep rocky path that flattens into an easy level walk.',
    prompt: `A walking path seen from the side: on the left it climbs steeply over broken rock, on the right it levels out into a smooth wide track through grass. One small walking figure has just reached the flat part and is striding easily. Low hills and a few plane trees behind. The contrast between the hard climb and the easy stretch is the subject. ${MOOD} ${STYLE}`,
  },
  {
    key: 'act05',
    file: 'act05.jpg',
    size: 'landscape_4_3',
    alt: 'One key of a different shape among a row of identical keys.',
    prompt: `A row of seven old brass keys hanging from small hooks on a cream plaster wall. Six of them are identical in shape and warm ochre; the seventh, roughly in the middle, is a completely different shape, larger and slate blue, and hangs slightly lower than the rest. Soft shadows on the wall. Still, quiet, nothing else in frame. ${STYLE}`,
  },
  {
    key: 'act06',
    file: 'act06.jpg',
    size: 'landscape_4_3',
    alt: 'Hands folding an extra layer into dough on a floured board.',
    prompt: `A close view of two hands folding a soft sheet of dough over onto itself on a floured wooden board, so one extra layer is clearly visible in the fold. A small bowl of flour and a rolling pin at the edge of frame. Warm kitchen light. The single added fold is the subject. Calm, tactile, domestic. ${STYLE}`,
  },
  {
    key: 'act07',
    file: 'act07.jpg',
    size: 'landscape_4_3',
    alt: 'A small tail-shaped mark appearing beneath one shape in a row.',
    prompt: `Five identical smooth terracotta pebbles arranged in a row on cream sand. Beneath the middle pebble alone, a small curved tail-like groove has been drawn into the sand, like a comma or a hook. The groove is delicate and clearly deliberate. Soft raking light casting long low shadows. Minimal, abstract, no letters. ${STYLE}`,
  },
  {
    key: 'act08',
    file: 'act08.jpg',
    size: 'landscape_4_3',
    alt: 'Two identical thin columns standing directly side by side.',
    prompt: `Two slender identical cream columns stand touching side by side in the centre of a wide empty slate blue space, each topped with a small round dot. They are so close they almost read as one. A third, far away at the edge of frame, stands alone for contrast. Architectural, spare, generous empty space. No letters, no words. ${STYLE}`,
  },
  {
    key: 'act09',
    file: 'act09.jpg',
    size: 'landscape_4_3',
    alt: 'A village street seen through a rain-streaked window on a grey winter afternoon.',
    prompt: `The view from inside a warm room through a rain-streaked window onto a quiet French village street in winter. Wet cobbles, a shuttered stone house, a bare plane tree, grey sky, a little snow gathered on a low wall. No people. The weather itself is the subject. Warm interior tones at the very edges of frame, cool blues and greys beyond the glass. ${MOOD} ${STYLE}`,
  },
  {
    key: 'act10',
    file: 'act10.jpg',
    size: 'landscape_4_3',
    alt: 'A person putting on a coat in a hallway, a small shape staying at their side.',
    prompt: `A figure standing in a narrow hallway shrugging into a coat in front of a mirror, seen from behind and slightly to one side. A small round sage-green shape hovers steadily at their elbow, close and unmoving, like a companion that goes everywhere with them. Coat hooks, a folded scarf, a closed door. Early morning, unhurried. ${MOOD} ${STYLE}`,
  },
  {
    key: 'act11',
    file: 'act11.jpg',
    size: 'landscape_4_3',
    alt: 'Three nearly identical shapes side by side, only one clearly in focus.',
    prompt: `Three identical smooth terracotta ovals stand in a row on cream, casting identical shadows. The left and right ones are softly blurred and slightly transparent; the centre one is crisp and fully saturated. Nothing distinguishes them but that focus. Behind them, a faint suggestion of a sound wave drawn as a single thin slate blue line. Abstract, quiet, no letters. ${STYLE}`,
  },
  {
    key: 'act12',
    file: 'act12.jpg',
    size: 'landscape_4_3',
    alt: 'A person writing at a desk by a window, surrounded by pinned photographs.',
    prompt: `A person sits writing longhand in a notebook at a small desk beneath a window, seen from behind over their shoulder. On the wall above the desk, eight or nine small photographs are pinned in a loose grid, each showing a different scene: a garden, a street, snow, a kitchen. Evening light, a lamp on. Everything gathered in one place. ${MOOD} ${STYLE}`,
  },

  // ── What the Trail spine adds ────────────────────────────────────────────
  {
    key: 'cover',
    file: 'cover.jpg',
    size: 'landscape_4_3',
    alt: 'A cream card with a soft recurring wave printed on it, floating above a shadow.',
    prompt: `A conceptual illustration about a tense used for things that were going on. A large cream card floats centred against a warm bone background, and printed on it is a single soft repeating wave that runs off both edges of the card, never starting and never ending. The wave is dusty slate blue with one terracotta trough. Soft shadow beneath the card. Elegant, minimal, no words, no letterforms, plenty of empty space around the card. ${STYLE}`,
  },
  {
    key: 'unit-complete',
    file: 'unit-complete.jpg',
    size: 'square_hd',
    alt: 'A wax seal pressed into cream paper, with small shapes drifting away from it.',
    prompt: `A round terracotta wax seal freshly pressed into a sheet of heavy cream paper, seen straight on from above. The seal carries a simple abstract impression, no letters. Rising and drifting away from the seal, eight or nine very small sage-green and ochre shapes scatter upward and outward, light as seeds. Warm, quiet, finished. Generous empty cream space around the seal. ${STYLE}`,
  },
  {
    key: 'coming-soon',
    file: 'coming-soon.jpg',
    size: 'landscape_4_3',
    alt: 'A path continuing past the last finished marker into open ground.',
    prompt: `A simple path of flat stepping stones crossing a wide cream field from the bottom of frame toward the horizon. The nearest stones are solid terracotta and fully drawn; further along they become paler and more widely spaced, and the last few are only faint sage outlines, not yet laid. No figures. Wide sky, plenty of empty space. Hopeful rather than empty. ${STYLE}`,
  },
];

const wanted = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const force = process.argv.includes('--force');
const todo = IMAGES.filter((i) => (wanted.length ? wanted.includes(i.key) : true));

fs.mkdirSync(OUT, { recursive: true });

async function generate(img) {
  const dest = path.join(OUT, img.file);
  if (fs.existsSync(dest) && !force) {
    console.log(`skip  ${img.file} (exists)`);
    return true;
  }
  process.stdout.write(`gen   ${img.file} ... `);
  const res = await fetch('https://fal.run/openai/gpt-image-2', {
    method: 'POST',
    headers: { Authorization: `Key ${FAL_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: img.prompt,
      image_size: img.size,
      num_images: 1,
      quality: 'medium',
      output_format: 'jpeg',
    }),
  });
  if (!res.ok) {
    console.log(`FAILED ${res.status}`);
    console.log(await res.text());
    return false;
  }
  const json = await res.json();
  const url = json?.images?.[0]?.url;
  if (!url) {
    console.log('FAILED (no image url in response)');
    console.log(JSON.stringify(json).slice(0, 400));
    return false;
  }
  const bytes = Buffer.from(await (await fetch(url)).arrayBuffer());
  fs.writeFileSync(dest, bytes);
  console.log(`ok (${Math.round(bytes.length / 1024)} KB)`);
  return true;
}

const results = [];
for (const img of todo) results.push([img, await generate(img)]);

const ok = results.filter(([, r]) => r).map(([i]) => i);
const bad = results.filter(([, r]) => !r).map(([i]) => i.key);

console.log('');
console.log(`${ok.length} of ${todo.length} present in ${path.relative(process.cwd(), OUT)}`);
if (bad.length) console.log(`failed: ${bad.join(', ')}`);

if (ok.length) {
  console.log('');
  console.log('Add these to ealch-v2/src/content/lessonImages.ts:');
  console.log('');
  for (const i of ok) {
    console.log(`  'lessons/imparfait/${i.file}': require('../../assets/lessons/imparfait/${i.file}'),`);
  }
  console.log('');
  console.log('Alt text (UDL 01 — an image with no alt must not ship):');
  for (const i of ok) console.log(`  ${i.file}  ${i.alt}`);
}
