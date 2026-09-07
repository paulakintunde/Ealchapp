// Draw the block E data graphics, and upload them.
//
// ── Why this is not render-plates.ts ───────────────────────────────────────
//
// The block A plates are photographs of objects, and a generative model is the
// right tool: "four punnets of soft fruit, same crate, same framing" has no
// wrong answer a model can produce. This graphic is the opposite. Its numbers
// ARE the answer key — Section E asks which interval carries the largest fall
// (2023→2024, 13 m³) and what the total fall is (148 − 124 = 24 m³) — so a
// model that renders 126 as 128, or draws five bars of almost equal height,
// turns a working item into an unanswerable one and does it invisibly.
//
// So this draws SVG from the authored numbers and rasterises it. The values
// come from one array; nothing between that array and the PNG can invent a
// digit.
//
// ── Why it needed drawing at all ──────────────────────────────────────────
//
// `ce-e-01.png` was authored with an `imageRef` and never produced. On
// 2026-09-05 it was the last 404 of the twenty-one exam images — the block A
// commit drew the CO plates and did not reach this one CE graphic. The app
// degrades to "Image unavailable" plus the French alt, which is why a graphic
// missing for the life of the paper never raised anything.
//
// ── The alt is the contract ────────────────────────────────────────────────
//
// `imageAlt` states every value. It is what a learner reads when the image
// fails, so the drawing must agree with it exactly rather than the other way
// round. VALUES below is transcribed from the alt; if they ever disagree the
// alt wins and this file is wrong.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/tef/render-graphic.ts --dry-run   write the PNG locally, upload nothing
//   pnpm tsx scripts/tef/render-graphic.ts             draw and upload
//   pnpm tsx scripts/tef/render-graphic.ts --force     redraw even if already on the CDN

// '../env' MUST be imported first — see the incident note in migrate.ts.
import '../env';
import { writeFileSync } from 'node:fs';
import { putToR2, r2Configured } from '../lib/r2.ts';

const argv = process.argv.slice(2);
const DRY_RUN = argv.includes('--dry-run');
const FORCE = argv.includes('--force');

const KEY = 'img/exam/tef/blanc-01/ce-e-01.png';
const CDN = process.env.R2_PUBLIC_BASE_URL ?? 'https://cdn.ealch.com';

/** Transcribed from the part's imageAlt. The alt is the source of truth. */
const VALUES: ReadonlyArray<{ year: string; m3: number }> = [
  { year: '2021', m3: 148 },
  { year: '2022', m3: 141 },
  { year: '2023', m3: 139 },
  { year: '2024', m3: 126 },
  { year: '2025', m3: 124 },
];
const NOTE = 'Nouvelle tarification en vigueur depuis 2024.';
const TITLE = 'Consommation d’eau moyenne par ménage';
const SUBTITLE = 'Commune de Corbeny — mètres cubes par an';

const W = 1024;
const H = 1024;

function svg(): string {
  // The axis starts at ZERO. Cropping it would exaggerate a 24 m³ fall into a
  // visual collapse and make "which interval falls most" answerable from bar
  // shape alone, which is a different question from the one asked.
  const max = 160;
  const padL = 130, padR = 70, padT = 250, padB = 190;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const bw = Math.round((plotW / VALUES.length) * 0.56);
  const gap = plotW / VALUES.length;
  const y = (v: number) => padT + plotH - (v / max) * plotH;

  const ticks = [0, 40, 80, 120, 160]
    .map((t) => {
      const yy = y(t);
      return `<line x1="${padL}" y1="${yy}" x2="${padL + plotW}" y2="${yy}" stroke="#D8DEE6" stroke-width="2"/>
        <text x="${padL - 22}" y="${yy + 10}" text-anchor="end" font-family="Georgia, 'Times New Roman', serif" font-size="30" fill="#5A6472">${t}</text>`;
    })
    .join('\n');

  const bars = VALUES.map((d, i) => {
    const cx = padL + gap * i + gap / 2;
    const x = Math.round(cx - bw / 2);
    const yy = y(d.m3);
    const h = padT + plotH - yy;
    return `<rect x="${x}" y="${yy}" width="${bw}" height="${h}" fill="#2F6DB5" rx="6"/>
      <text x="${cx}" y="${yy - 22}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-weight="bold" fill="#1B2430">${d.m3}</text>
      <text x="${cx}" y="${padT + plotH + 52}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="34" fill="#3A4352">${d.year}</text>`;
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#F2F3F5"/>
  <text x="${W / 2}" y="112" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-weight="bold" fill="#1B2430">${TITLE}</text>
  <text x="${W / 2}" y="166" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="32" fill="#5A6472">${SUBTITLE}</text>
  ${ticks}
  <line x1="${padL}" y1="${padT + plotH}" x2="${padL + plotW}" y2="${padT + plotH}" stroke="#8B94A3" stroke-width="3"/>
  <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="#8B94A3" stroke-width="3"/>
  ${bars}
  <text x="${W / 2}" y="${H - 78}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-style="italic" fill="#3A4352">${NOTE}</text>
</svg>`;
}

async function main() {
  if (!DRY_RUN && !r2Configured()) {
    console.error('R2 is not configured — set R2_* in ealch-admin/.env');
    process.exit(1);
  }

  if (!FORCE && !DRY_RUN) {
    const head = await fetch(`${CDN}/${KEY}`, { method: 'HEAD' }).catch(() => null);
    if (head?.ok) {
      console.log(`✓ ${KEY} already on the CDN — nothing to do (use --force to redraw)`);
      return;
    }
  }

  const markup = svg();
  const { chromium } = await import('@playwright/test');
  const b = await chromium.launch();
  const page = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.setContent(
    `<html><body style="margin:0">${markup}</body></html>`,
    { waitUntil: 'load' }
  );
  const png = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: W, height: H } });
  await b.close();

  writeFileSync('ce-e-01.png', png);
  console.log(`drew ce-e-01.png (${png.length.toLocaleString()} bytes, ${W}x${H})`);
  console.log('values:', VALUES.map((v) => `${v.year}=${v.m3}`).join(' '));

  if (DRY_RUN) {
    console.log('dry run — not uploaded. Inspect ./ce-e-01.png');
    return;
  }

  // A fixed key that is being replaced must ask for revalidation, or the CDN
  // keeps serving the old bytes. See the note above putToR2.
  await putToR2(KEY, png, 'image/png', { source: 'render-graphic' }, 'public, max-age=300, must-revalidate');
  console.log(`uploaded → ${CDN}/${KEY}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
