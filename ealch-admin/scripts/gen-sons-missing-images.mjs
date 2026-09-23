// Generate the fifteen sons illustrations that are authored, published, and
// have no art behind them.
//
// These refs ship in seed.json today. lessonImage() returns undefined for each
// one, RichImage renders null, and the card draws nothing on a device. Found
// by src/content/image-refs.test.ts, which had never been run before because
// it had never been written.
//
//   accents      1   anchor-marks
//   elision      5   collision, ear, blocked, no-gap, roundup
//   liaison      4   waiting, the-stop, scene-guichet, roundup
//   masterclass  5   phrase, group, push, speed, roundup
//
// Every prompt is built from the section the ref actually sits in — its head,
// its body, its reframe line — not from the filename. The reframe of each
// lesson is quoted in the comment above its block so the art can be checked
// against the teaching rather than against taste.
//
// House style is inherited from gen-muettes-images.mjs, gen-rythme-images.mjs
// and gen-imparfait-images.mjs. Do not edit STYLE here alone: change it in all
// four or the corpus stops matching itself.
//
// Usage (from ealch-admin/):
//   node scripts/gen-sons-missing-images.mjs               everything missing
//   node scripts/gen-sons-missing-images.mjs elision       one whole unit
//   node scripts/gen-sons-missing-images.mjs liaison/waiting   one image
//   node scripts/gen-sons-missing-images.mjs --force       regenerate
//
// Roughly $0.05 per image at quality 'medium', so the full set is about $0.75.
//
// AFTER GENERATING: add each file to ealch-v2/src/content/lessonImages.ts, in
// BOTH the REG table and the ALT table, then delete the matching lines from
// KNOWN_UNREGISTERED in image-refs.test.ts. The script prints all three lists.
// The test fails until the baseline is trimmed, which is the point of it.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ASSETS = path.resolve(here, '../../ealch-v2/assets/lessons');

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

/** These four lessons teach how sounds behave when words touch. The set leans
 *  on physical contact: things meeting, joining, refusing to join, stopping. */
const CONTACT = 'The subject is contact between two things. Keep it physical and legible at a glance.';

const IMAGES = [
  // ── accents ─────────────────────────────────────────────────────────────
  // REFRAME: "The mark is part of the letter, not decoration on it."
  {
    unit: 'accents',
    file: 'anchor-marks.jpg',
    alt: 'Small marks sit as structural parts of stone blocks rather than as ornament laid on top.',
    prompt: `Three solid cream stone blocks stand in a row on a slate blue surface. Each block has a small terracotta wedge that is clearly cut INTO the stone and load-bearing, part of the block's structure, not painted or resting on it. Beside them, a fourth block lies broken where its wedge has been removed, showing the two are inseparable. Architectural, weighty, tactile. No letters or words. ${STYLE}`,
  },

  // ── elision ─────────────────────────────────────────────────────────────
  // REFRAME: "Two vowels collide, the little word gives way."
  {
    unit: 'elision',
    file: 'collision.jpg',
    alt: 'A large sphere and a much smaller one meet, and the small one compresses flat against it.',
    prompt: `Two smooth spheres meet head on against a cream background: a large terracotta one moving from the right, and a much smaller sage green one from the left. At the point of contact the small sphere has squashed flat against the large one, which is entirely unchanged. Motion lines are implied by soft trailing shadows only. The asymmetry of the collision is the subject. ${CONTACT} ${STYLE}`,
  },
  {
    unit: 'elision',
    file: 'ear.jpg',
    alt: 'An ear shape listens to a shape whose outer shell is transparent and whose core is solid.',
    prompt: `A simple stylised ear in warm ochre fills the left third of frame, facing right. To its right, a single rounded object whose outer shell is drawn as a pale translucent outline and whose inner core is solid slate blue. The ear is clearly attending to the solid core and not to the transparent shell around it. Quiet, focused, no letters. ${STYLE}`,
  },
  {
    unit: 'elision',
    file: 'blocked.jpg',
    alt: 'Three identical doorways, one of them bricked up with no sign on the outside.',
    prompt: `Three identical cream archways stand side by side in a warm plaster wall. Two are open, showing sage green space beyond. The middle one is filled in with matching cream brick, flush and seamless, so from a distance the three look the same. Nothing marks the closed one. Soft shadow, still, slightly unsettling. No letters or signs. ${STYLE}`,
  },
  {
    unit: 'elision',
    file: 'no-gap.jpg',
    alt: 'Two shapes pushed flush together with no space between them, beside a pair with a gap.',
    prompt: `Foreground: two terracotta rounded blocks pressed flush together on cream, their touching edges forming one continuous silhouette with no gap at all. Behind and smaller, faded and pale, the same two blocks with a visible gap between them. The closed pair is crisp and dominant, the gapped pair is receding. Abstract, clean, generous empty space. ${STYLE}`,
  },
  {
    unit: 'elision',
    file: 'roundup.jpg',
    alt: 'A small cloth bag holding a few smooth stones, ready to be carried.',
    prompt: `A small open canvas bag in warm ochre sits on a cream surface, holding four or five smooth slate blue stones, each a slightly different shape. One stone rests on the surface just outside the bag. Soft shadow beneath. Calm, finished, portable. Nothing else in frame, plenty of empty space. ${STYLE}`,
  },

  // ── liaison ─────────────────────────────────────────────────────────────
  // REFRAME: "The letter was never gone. It was waiting for a vowel."
  {
    unit: 'liaison',
    file: 'waiting.jpg',
    alt: 'A dormant seed under soil, intact and waiting, with a sprouting one beside it.',
    prompt: `A cross section through warm ochre soil against a cream sky. Below the surface, a single slate blue seed sits whole and dormant, clearly intact rather than dead. Beside it, a second identical seed has just met a drop of water and sent one small sage shoot up through the surface. Same seed, two states. Patient, quiet, no letters. ${STYLE}`,
  },
  {
    unit: 'liaison',
    file: 'the-stop.jpg',
    alt: 'A hand held flat and firm to hold back two shapes that are leaning toward each other.',
    prompt: `Two rounded terracotta shapes lean toward one another from either side of frame, clearly wanting to meet. Between them a single open hand is held flat and vertical, palm out, holding them apart. The hand is the effort in the picture: braced, deliberate. Cream background, soft shadows, lots of empty space above. ${CONTACT} ${STYLE}`,
  },
  {
    unit: 'liaison',
    file: 'scene-guichet.jpg',
    alt: 'A traveller speaks to a clerk through the window of a station ticket office.',
    prompt: `A French railway station ticket window seen slightly from the side. A traveller with a shoulder bag stands at the counter speaking to a clerk behind the glass, who is leaning in to listen. A small brass tray under the window, a departures board blurred in the background, tiled floor, high arched hall beyond. Mid morning light. Calm, ordinary, a conversation going well. ${STYLE}`,
  },
  {
    unit: 'liaison',
    file: 'roundup.jpg',
    alt: 'A short loop of rope with a few beads threaded onto it, tied closed.',
    prompt: `A short loop of soft sage cord lies on a cream surface, tied closed with a simple knot. Four smooth terracotta beads are threaded onto it, spaced unevenly. Soft shadow beneath the loop. Tactile, complete, small enough to pocket. Nothing else in frame. ${STYLE}`,
  },

  // ── masterclass ─────────────────────────────────────────────────────────
  // REFRAME: "French pronounces the phrase, not the word."  PIPELINE: group, join, push.
  {
    unit: 'masterclass',
    file: 'phrase.jpg',
    alt: 'Loose beads on the left are gathered into one strung group on the right.',
    prompt: `Left half of frame: six separate slate blue beads scattered loosely on cream, each casting its own small shadow. Right half: the same six beads threaded tight onto a single sage cord, touching, reading as one object with one long shadow. The transformation from six things into one thing is the subject. Clean, abstract, no letters. ${STYLE}`,
  },
  {
    unit: 'masterclass',
    file: 'group.jpg',
    alt: 'Stones in a stream form two clusters with a clear channel of water between them.',
    prompt: `Seen from directly above: smooth cream stones resting in shallow slate blue water, arranged into two distinct clusters with a clear open channel of water running between them. Within each cluster the stones touch; across the channel nothing touches. The gap is the subject and it is unmistakable. Calm, top down, no figures. ${STYLE}`,
  },
  {
    unit: 'masterclass',
    file: 'push.jpg',
    alt: 'A row of shapes where only the last one is raised and larger than the rest.',
    prompt: `Five rounded terracotta shapes stand in a row on a cream surface, evenly spaced and identical, except the last one on the right which is noticeably larger and raised slightly higher than the others, casting a longer shadow. All emphasis falls at the end of the row. Nothing marks the others. Spare, rhythmic, no letters. ${STYLE}`,
  },
  {
    unit: 'masterclass',
    file: 'speed.jpg',
    alt: 'A hand catches a falling object without looking, the movement already complete.',
    prompt: `A hand catches a small terracotta ball out of the air, fingers already closed around it, the catch finished rather than in progress. A faint trailing blur above shows where the ball fell from. The face is out of frame; only the forearm and hand. Cream background, warm light, a sense of reflex rather than effort. ${STYLE}`,
  },
  {
    unit: 'masterclass',
    file: 'roundup.jpg',
    alt: 'Three nested measuring tools stacked together into one compact object.',
    prompt: `Three simple nested wooden forms in warm ochre, terracotta and sage, stacked inside one another into a single compact object on a cream surface, like measuring cups put away. One sits slightly proud so all three are visible. Soft shadow. Orderly, complete, satisfying. No letters or markings. ${STYLE}`,
  },
];

const args = process.argv.slice(2);
const force = args.includes('--force');
const wanted = args.filter((a) => !a.startsWith('--'));

/** Accepts a unit ("elision"), a unit/stem ("liaison/waiting") or nothing. */
const matches = (img) =>
  wanted.length === 0 ||
  wanted.includes(img.unit) ||
  wanted.includes(`${img.unit}/${img.file.replace(/\.jpg$/, '')}`);

const todo = IMAGES.filter(matches);
if (!todo.length) {
  console.error(`Nothing matched ${wanted.join(', ')}. Units: accents, elision, liaison, masterclass.`);
  process.exit(1);
}

async function generate(img) {
  const dir = path.join(ASSETS, img.unit);
  fs.mkdirSync(dir, { recursive: true });
  const dest = path.join(dir, img.file);
  const label = `${img.unit}/${img.file}`;
  if (fs.existsSync(dest) && !force) {
    console.log(`skip  ${label} (exists)`);
    return true;
  }
  process.stdout.write(`gen   ${label} ... `);
  const res = await fetch('https://fal.run/openai/gpt-image-2', {
    method: 'POST',
    headers: { Authorization: `Key ${FAL_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: img.prompt,
      image_size: 'landscape_4_3',
      quality: 'medium',
      num_images: 1,
      output_format: 'jpeg',
    }),
  });
  if (!res.ok) {
    console.log(`FAILED ${res.status}`);
    console.log((await res.text()).slice(0, 400));
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
const bad = results.filter(([, r]) => !r).map(([i]) => `${i.unit}/${i.file}`);

console.log('');
console.log(`${ok.length} of ${todo.length} present under ${path.relative(process.cwd(), ASSETS)}`);
if (bad.length) console.log(`failed: ${bad.join(', ')}`);

if (ok.length) {
  const ref = (i) => `lessons/${i.unit}/${i.file}`;
  console.log('');
  console.log('1. Add to the REG table in ealch-v2/src/content/lessonImages.ts:');
  console.log('');
  for (const i of ok) console.log(`  '${ref(i)}': require('../../assets/lessons/${i.unit}/${i.file}'),`);
  console.log('');
  console.log('2. Add to the ALT table in the same file:');
  console.log('');
  for (const i of ok) console.log(`  '${ref(i)}': '${i.alt.replace(/'/g, "\\'")}',`);
  console.log('');
  console.log('3. Delete these from KNOWN_UNREGISTERED in src/content/image-refs.test.ts');
  console.log('   (it fails until you do, which is how the debt list stays true):');
  console.log('');
  for (const i of ok) console.log(`  '${ref(i)}',`);
}
