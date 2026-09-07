// Build the plate contact sheet: all twenty block A plates, each beside the
// options it has to serve and the alt it was drawn from.
//
// Twenty AI-generated images went live to learners. A plate whose panels
// contradict their French description makes the item unanswerable, and block A
// is the A1-A2 on-ramp where a candidate is least equipped to recover. No test
// can catch it: the file is present, the ref resolves, the bytes are a valid
// PNG. Only a person looking at the picture can say whether it shows what the
// options claim.
//
// Three decisions in the page are about the failure modes, not decoration:
//
//   - Each plate sits at full width. It is drawn as a 2x2 grid and the whole
//     question is whether the four panels are individually identifiable, which
//     a thumbnail cannot answer.
//   - The four OPTIONS are listed beside it, because the defect that matters is
//     the plate disagreeing with them — not the plate being ugly.
//   - The ALT is shown verbatim underneath. It is the prompt the plate was
//     drawn from AND the accessibility label a screen-reader user hears, so a
//     plate that disagrees with it is wrong twice over.
//
// The panel order deliberately does NOT have to match the option order: the
// alt stopped claiming one (see render-plates.ts), because scatterKeys moves
// the options after authoring. Do not flag a plate for that.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/tef/plate-sheet.ts          all five papers
//   pnpm tsx scripts/tef/plate-sheet.ts 3        one paper
import './../env';
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const NUMS = process.argv.slice(2).filter((a) => /^\d+$/.test(a)).map(Number);
const PAPERS = NUMS.length ? NUMS : [1, 2, 3, 4, 5];

type Row = { variant: string; paperNo: number; label: string; ref: string; alt: string; opts: string[] };

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

async function load(n: number) {
  const dir = `tef-blanc${String(n).padStart(2, '0')}`;
  // pathToFileURL: a Windows absolute path is not a valid ESM specifier.
  return (await import(pathToFileURL(resolve(HERE, `../${dir}/paper.ts`)).href)) as {
    CO_TASKS: ExamTask[];
    PAPER: { variant: string; paperNo: number };
  };
}

async function main() {
  const base = process.env.R2_PUBLIC_BASE_URL;
  if (!base) throw new Error('R2_PUBLIC_BASE_URL is not set');
  const cdn = base.replace(/\/$/, '');

  const rows: Row[] = [];
  for (const n of PAPERS) {
    const { CO_TASKS, PAPER } = await load(n);
    for (const part of CO_TASKS[0]?.parts ?? []) {
      if (!part.imageRef) continue;
      rows.push({
        variant: PAPER.variant,
        paperNo: PAPER.paperNo,
        label: part.label,
        ref: part.imageRef,
        alt: part.imageAlt ?? '',
        opts: part.items[0]?.opts ?? [],
      });
    }
  }

  const cards = rows
    .map(
      (r, i) => `
    <section class="card">
      <header>
        <span class="n">${i + 1}</span>
        <span class="who"><b>Examen ${r.paperNo}</b> · ${esc(r.label)}</span>
        <label class="mark"><input type="checkbox" data-k="${esc(r.ref)}"><span>Checked</span></label>
      </header>
      <div class="body">
        <a class="plate" href="${cdn}/${r.ref}" target="_blank" rel="noreferrer">
          <img src="${cdn}/${r.ref}" alt="${esc(r.alt)}" loading="lazy">
        </a>
        <div class="side">
          <h4>The four options a candidate reads</h4>
          <ol class="opts">${r.opts.map((o) => `<li>${esc(o)}</li>`).join('')}</ol>
          <h4>The alt it was drawn from, and screen readers hear</h4>
          <p class="alt">${esc(r.alt)}</p>
          <p class="ref">${esc(r.ref)}</p>
        </div>
      </div>
    </section>`
    )
    .join('');

  const html = `<title>TEF block A plates</title>
<style>
  :root {
    --bg: #f7f6f4; --card: #fff; --ink: #14110e; --muted: #6c655c;
    --line: #e2ddd6; --accent: #8a6a2f; --accent-soft: #f2ead9; --done: #2f7a4f;
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink);
    font: 400 15px/1.55 ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif; }
  .wrap { max-width: 1040px; margin: 0 auto; padding: 30px 20px 80px; }
  header.top h1 { margin: 0 0 4px; font-size: 22px; letter-spacing: .01em; }
  .sub { margin: 0 0 18px; color: var(--muted); font-size: 14px; }
  .brief { background: var(--accent-soft); border-radius: 12px; padding: 14px 18px; margin: 0 0 22px; }
  .brief h3 { margin: 0 0 8px; font-size: 14px; letter-spacing: .04em; text-transform: uppercase; color: var(--accent); }
  .brief ol { margin: 0; padding-left: 20px; }
  .brief li + li { margin-top: 5px; }
  .brief em { font-style: normal; color: var(--muted); }

  .bar { position: sticky; top: 0; z-index: 5; background: var(--bg); padding: 10px 0 12px;
    display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--line); margin-bottom: 18px; }
  .track { flex: 1; height: 5px; border-radius: 3px; background: var(--line); overflow: hidden; }
  .fill { height: 100%; width: 0; background: var(--done); transition: width .18s ease; }

  .card { background: var(--card); border: 1px solid var(--line); border-radius: 14px;
    padding: 16px 18px 18px; margin-bottom: 16px; }
  .card.ok { opacity: .5; }
  .card header { display: flex; align-items: center; gap: 11px; margin-bottom: 12px; flex-wrap: wrap; }
  .n { width: 25px; height: 25px; flex: none; display: grid; place-items: center; border-radius: 50%;
    background: var(--line); color: var(--muted); font-size: 12px; font-weight: 600; font-variant-numeric: tabular-nums; }
  .who { flex: 1 1 240px; min-width: 0; }
  .mark { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--muted); cursor: pointer; user-select: none; }
  .mark input { accent-color: var(--done); width: 15px; height: 15px; cursor: pointer; }
  .card.ok .mark span { color: var(--done); }

  .body { display: flex; gap: 20px; flex-wrap: wrap; }
  .plate { flex: 1 1 380px; min-width: 300px; display: block; }
  .plate img { width: 100%; border-radius: 10px; border: 1px solid var(--line); background: #fff; display: block; }
  .side { flex: 1 1 300px; min-width: 260px; }
  .side h4 { margin: 0 0 6px; font-size: 12px; letter-spacing: .05em; text-transform: uppercase; color: var(--accent); }
  .side h4 + * { margin-top: 0; }
  .opts { margin: 0 0 16px; padding-left: 20px; }
  .opts li { margin-bottom: 3px; }
  .alt { margin: 0 0 12px; color: var(--ink); }
  .ref { margin: 0; color: var(--muted); font: 400 12px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace; word-break: break-all; }

  :focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 4px; }
  @media (prefers-reduced-motion: reduce) { .fill { transition: none; } }
</style>
<div class="wrap">
  <header class="top">
    <h1>Block A plates · TEF Canada</h1>
    <p class="sub">${rows.length} plate${rows.length === 1 ? '' : 's'} across ${PAPERS.length} paper${PAPERS.length === 1 ? '' : 's'} · already live to learners</p>
  </header>

  <div class="brief">
    <h3>What to look for</h3>
    <ol>
      <li><b>Does the plate show what the options name?</b> This is the one that breaks an item. If an option says <em>un colis</em> and no panel shows a parcel, the question is unanswerable.</li>
      <li><b>Is each panel identifiable on its own?</b> Four panels that read as one scene, or a subject too small to name, make the item harder than the blueprint asks.</li>
      <li><b>Where the difference is a COUNT or a COLOUR</b> rather than a category, check it panel by panel. That is where image models fail quietly.</li>
      <li><b>Any text, hands, faces or watermarks.</b> The prompt forbids them; a slip is worth catching.</li>
      <li><em>Panel order does NOT have to match the option order.</em> The alt stopped claiming one, because the options are scattered after authoring. Do not flag that.</li>
    </ol>
  </div>

  <div class="bar">
    <b><span id="done">0</span> / ${rows.length}</b>
    <div class="track"><div class="fill" id="fill"></div></div>
    <span class="sub" style="margin:0">checked</span>
  </div>
${cards}
</div>
<script>
  // Progress is kept per browser so a review can be done over two sittings.
  var KEY = 'ealch-plate-sheet';
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { saved = {}; }
  var boxes = Array.prototype.slice.call(document.querySelectorAll('.mark input'));
  function paint() {
    var n = 0;
    boxes.forEach(function (b) {
      if (b.checked) n++;
      b.closest('.card').classList.toggle('ok', b.checked);
    });
    document.getElementById('done').textContent = String(n);
    document.getElementById('fill').style.width = (boxes.length ? (n / boxes.length) * 100 : 0) + '%';
  }
  boxes.forEach(function (b) {
    if (saved[b.dataset.k]) b.checked = true;
    b.addEventListener('change', function () {
      saved[b.dataset.k] = b.checked;
      try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) {}
      paint();
    });
  });
  paint();
</script>`;

  const out = 'plate-sheet.html';
  writeFileSync(out, html, 'utf8');
  console.log(`\n  wrote ${out}`);
  console.log(`  ${rows.length} plate(s) across ${PAPERS.length} paper(s)\n`);
}

main().catch((e) => {
  console.error(String(e));
  process.exit(1);
});
