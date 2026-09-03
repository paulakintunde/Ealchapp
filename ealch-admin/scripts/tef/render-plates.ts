// Render the block A image plates with GPT Image 2 (via Fal), and upload them.
//
// ── Why this exists ────────────────────────────────────────────────────────
//
// Every TEF paper authors four block A parts with an `imageRef`. None of those
// files had ever been produced: on 3 September 2026 all twenty 404'd on the
// CDN, on the published blanc-01 as much as on the new papers. The app degrades
// to "Image unavailable" plus the French alt, so the item stayed answerable and
// nothing complained — which is why a full human review and a sat paper both
// missed it. STANDARD-tef Block A is unambiguous: "The images are the options."
//
// ── The ordering contract ──────────────────────────────────────────────────
//
// Every alt used to end "Chaque panneau correspond a une option, dans l'ordre
// ou les options sont affichees." That was FALSE on 15 of 20 plates, because
// the alt lists panels as AUTHORED and `scatterKeys` reorders the options
// afterwards. Drawing a plate to match such an alt would have upgraded a
// missing image into a misleading one.
//
// So the claim is gone (paper-rules.ts guards its return) and this script draws
// the panels in the ALT's own order. The alt is the single source of truth for
// what the plate shows, the learner picks a TEXT option and matches it by
// content, and nothing here is coupled to the scatter — so a future re-scatter
// cannot silently invalidate twenty images.
//
// ── Cost and idempotence ───────────────────────────────────────────────────
//
// One API call per plate. A plate already on the CDN is skipped unless
// --force, so a re-run after a partial failure costs only what failed.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/tef/render-plates.ts --dry-run     show prompts, call nothing
//   pnpm tsx scripts/tef/render-plates.ts 2             one paper
//   pnpm tsx scripts/tef/render-plates.ts               all five
//   pnpm tsx scripts/tef/render-plates.ts 3 --force     redraw even if present

// '../env' MUST be imported first — see the incident note in migrate.ts.
import '../env';
import { describeTarget } from '../env';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { putToR2, r2Configured } from '../lib/r2.ts';
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const DRY_RUN = argv.includes('--dry-run');
const FORCE = argv.includes('--force');
const NUMS = argv.filter((a) => /^\d+$/.test(a)).map(Number);
const PAPERS = NUMS.length ? NUMS : [1, 2, 3, 4, 5];

const FAL_ENDPOINT = 'https://fal.run/openai/gpt-image-2';

type Plate = { variant: string; label: string; ref: string; alt: string; opts: string[] };

/** The house style, fixed here rather than per paper: four panels have to be
 *  confusable on CONTENT, so every other variable — background, lighting,
 *  framing, scale — must be constant or the plate gives the answer away for
 *  free. STANDARD-tef Block A: "four unrelated pictures make the item free". */
const STYLE = [
  'A single flat image divided into a 2x2 grid of four equal panels, separated by thin neutral gutters.',
  'Each panel shows exactly one subject, photographed straight on, centred, at the same apparent scale,',
  'on the same plain neutral light-grey background, under the same soft even lighting.',
  'Consistent realistic photographic style across all four panels. No text, no letters, no numbers,',
  'no labels, no captions, no watermarks, no borders, and no people unless a panel description names one.',
].join(' ');

function promptFor(p: Plate): string {
  // The alt is the source of truth: it is what a screen-reader user is told the
  // plate shows, so a plate that disagrees with it is a defect by construction.
  //
  // Its closing sentence is addressed to a READER ("these four panels are the
  // four options"), not a description of anything visible, so it is dropped
  // before the prompt goes to an image model — the surest way to get the words
  // themselves rendered into the picture is to feed them in as subject matter.
  const panels = p.alt.replace(/\s*Les quatre panneaux montrent[^.]*\.\s*$/u, '').trim();
  const order = 'The four panels, in this exact order (top-left, top-right, bottom-left, bottom-right):';
  return `${STYLE}\n\n${order}\n${panels}`;
}

async function load(n: number): Promise<{ variant: string; CO_TASKS: ExamTask[] }> {
  const dir = `tef-blanc${String(n).padStart(2, '0')}`;
  // pathToFileURL: a Windows absolute path is not a valid ESM specifier.
  const m = (await import(pathToFileURL(resolve(HERE, `../${dir}/paper.ts`)).href)) as {
    CO_TASKS: ExamTask[];
    PAPER: { variant: string };
  };
  return { variant: m.PAPER.variant, CO_TASKS: m.CO_TASKS };
}

function platesOf(variant: string, coTasks: ExamTask[]): Plate[] {
  const blockA = coTasks[0];
  const out: Plate[] = [];
  for (const part of blockA?.parts ?? []) {
    if (!part.imageRef) continue;
    if (!part.imageAlt) {
      throw new Error(`${variant} ${part.label}: imageRef with no imageAlt — nothing to draw from`);
    }
    out.push({
      variant,
      label: part.label,
      ref: part.imageRef,
      alt: part.imageAlt,
      opts: part.items[0]?.opts ?? [],
    });
  }
  return out;
}

/** Is the plate already on the CDN? Cheap HEAD against the public base. */
async function alreadyThere(ref: string): Promise<boolean> {
  const base = process.env.R2_PUBLIC_BASE_URL;
  if (!base) return false;
  try {
    const res = await fetch(`${base.replace(/\/$/, '')}/${ref}`, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

async function generate(prompt: string, key: string): Promise<Buffer> {
  const res = await fetch(FAL_ENDPOINT, {
    method: 'POST',
    // Fal wants "Key", not "Bearer".
    headers: { Authorization: `Key ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt,
      image_size: 'square_hd',
      quality: 'high',
      num_images: 1,
      output_format: 'png',
    }),
  });
  if (!res.ok) {
    throw new Error(`fal HTTP ${res.status}: ${(await res.text().catch(() => '')).slice(0, 300)}`);
  }
  const body = (await res.json()) as { images?: { url?: string }[] };
  const url = body.images?.[0]?.url;
  if (!url) throw new Error(`fal returned no image url: ${JSON.stringify(body).slice(0, 300)}`);
  const img = await fetch(url);
  if (!img.ok) throw new Error(`could not download the generated image: HTTP ${img.status}`);
  return Buffer.from(await img.arrayBuffer());
}

async function main() {
  const key = process.env.FAL_KEY;
  const plates: Plate[] = [];
  for (const n of PAPERS) {
    const { variant, CO_TASKS } = await load(n);
    plates.push(...platesOf(variant, CO_TASKS));
  }

  console.log(`\n  target: ${describeTarget()}`);
  console.log(`  ${plates.length} block A plate(s) across ${PAPERS.length} paper(s)\n`);

  if (DRY_RUN) {
    for (const p of plates) {
      console.log(`  ${p.variant} · ${p.label}`);
      console.log(`    ref     : ${p.ref}`);
      console.log(`    options : ${p.opts.join(' | ')}`);
      console.log(`    prompt  : ${promptFor(p).replace(/\n/g, ' ')}`);
      console.log('');
    }
    console.log(`✓ dry run — ${plates.length} plate(s) would be drawn. Nothing called, nothing written.\n`);
    return;
  }

  if (!key) {
    throw new Error('FAL_KEY is not set (ealch-v2/.env carries it; copy it into ealch-admin/.env)');
  }
  if (!r2Configured()) {
    throw new Error('R2 upload needs R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET in ealch-admin/.env');
  }

  let drawn = 0;
  let skipped = 0;
  const failed: string[] = [];
  for (const p of plates) {
    const where = `${p.variant} · ${p.label}`;
    if (!FORCE && (await alreadyThere(p.ref))) {
      skipped += 1;
      console.log(`  · ${where} — already on the CDN, skipped`);
      continue;
    }
    try {
      const png = await generate(promptFor(p), key);
      await putToR2(p.ref, png, 'image/png');
      drawn += 1;
      console.log(`  ✓ ${where} — ${(png.length / 1024).toFixed(0)} KB → ${p.ref}`);
    } catch (e) {
      // One plate failing must not cost the other nineteen their API calls.
      failed.push(`${where}: ${String(e).slice(0, 160)}`);
      console.log(`  ✗ ${where} — ${String(e).slice(0, 160)}`);
    }
  }

  console.log(`\n✓ ${drawn} drawn, ${skipped} already present, ${failed.length} failed`);
  if (failed.length) {
    console.log('\n  failures (re-run to retry only these):');
    for (const f of failed) console.log(`    ${f}`);
  }
  console.log('\n  The refs are already authored, so nothing needs re-applying to the database.');
  console.log('  Run pnpm content:publish only if a paper changed for another reason.\n');
  if (failed.length) process.exit(1);
}

main().catch((e) => {
  console.error(`\n✖ ${String(e)}\n`);
  process.exit(1);
});
