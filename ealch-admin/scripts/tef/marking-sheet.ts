// Build the marking sheet: every rendered clip beside the transcript it was
// rendered from.
//
// A clip is "marked" when a person has listened to it against its transcript
// and signed it off (E8). Doing that from the database means pasting 30 URLs by
// hand; doing it in the app means the transcript is a tap away rather than
// beside the audio. Neither is a review anyone finishes.
//
// Two decisions in the page are about the failure modes, not decoration:
//
//   - The transcript is set in a MONOSPACE face and every number, time and
//     price in it is highlighted. Misread numbers are the first thing the
//     casting file says to listen for, and they are frequently the answer to
//     the item.
//   - Blocks C, E and F are flagged. They are the multi-voice documents, and
//     "can you tell these speakers apart" is what decides whether those items
//     work at all.
import './../env';

/** Which paper to build the sheet for. One tool for five papers: this was
 *  `blanc-01` in two places, which is exactly the kind of literal that gets
 *  copied four times and edited three. */
const VARIANT = (process.argv[2] ?? 'blanc-01').replace(/^blanc-?/, 'blanc-');
import { writeFileSync } from 'node:fs';

type Row = {
  block: string;
  task: string;
  part: string;
  url: string;
  durationS: number;
  transcript: string;
  voices: number;
};

/** Blocks whose items depend on telling speakers apart. */
const MULTIVOICE = new Set(['C', 'E', 'F']);

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Wrap numbers, times and prices so a listener's eye lands on them. */
function markNumbers(escaped: string): string {
  return escaped.replace(
    /(\d+(?:\s*h(?:\s*\d+)?)?(?:\s*(?:€|euros?|kilogrammes?|minutes?|heures?|mois|jours?|semaines?|places?|ans?))?)/gi,
    '<b class="num">$1</b>'
  );
}

/** Speaker labels become a quiet lead-in, so the eye reads the speech. */
function formatTranscript(text: string): string {
  return text
    .split('\n')
    .map((line) => {
      const m = /^([A-ZÀ-Ý0-9'’ .-]{2,32})\s*:\s*(.*)$/.exec(line.trim());
      if (!m) return markNumbers(esc(line));
      return `<span class="spk">${esc(m[1]!.trim())}</span>${markNumbers(esc(m[2]!))}`;
    })
    .join('\n');
}

const mmss = (n: number) => `${Math.floor(n / 60)}:${String(n % 60).padStart(2, '0')}`;

async function main() {
  const base = process.env.R2_PUBLIC_BASE_URL;
  if (!base) throw new Error('R2_PUBLIC_BASE_URL is not set');
  const out = `marking-sheet-${VARIANT}.html`;

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();
  const rows: Row[] = [];
  try {
    const res = await client.query<{
      label: string | null;
      parts: { label: string; text?: string; audioRef?: string | null; durationS?: number }[];
    }>(
      `select label, parts from content_exam_tasks
        where variant=$1 and format='tef_canada' and skill='CO'
        order by id`,
      [VARIANT]
    );
    for (const r of res.rows) {
      const task = r.label ?? '';
      const block = task.replace(/^Section\s+/i, '').trim().slice(0, 1).toUpperCase();
      for (const p of r.parts ?? []) {
        if (!p.audioRef || !p.text) continue;
        const speakers = new Set(
          p.text.split('\n')
            .map((l) => /^([A-ZÀ-Ý0-9'’ .-]{2,32})\s*:/.exec(l.trim())?.[1]?.trim())
            .filter(Boolean)
        );
        rows.push({
          block,
          task,
          part: p.label,
          url: `${base.replace(/\/$/, '')}/${p.audioRef}`,
          durationS: p.durationS ?? 0,
          transcript: p.text,
          voices: Math.max(1, speakers.size),
        });
      }
    }
  } finally {
    client.release();
    await pool.end();
  }

  const total = rows.reduce((n, r) => n + r.durationS, 0);

  // Grouped by block, because that is how a reviewer works through a paper and
  // because the multi-voice blocks need their own warning.
  const blocks = [...new Set(rows.map((r) => r.block))];
  let idx = 0;
  const sections = blocks
    .map((b) => {
      const inBlock = rows.filter((r) => r.block === b);
      const secs = inBlock.reduce((n, r) => n + r.durationS, 0);
      const clips = inBlock
        .map((r) => {
          const i = idx++;
          return `
      <article class="clip${MULTIVOICE.has(r.block) ? ' key' : ''}" id="c${i}">
        <div class="head">
          <span class="n">${i + 1}</span>
          <span class="part">${esc(r.part)}</span>
          <span class="meta">${r.voices > 1 ? `${r.voices} voix · ` : ''}${mmss(r.durationS)}</span>
          <label class="mark"><input type="checkbox" data-i="${i}"><span>marked</span></label>
        </div>
        <audio controls preload="none" src="${esc(r.url)}"></audio>
        <pre class="tx">${formatTranscript(r.transcript)}</pre>
      </article>`;
        })
        .join('\n');
      return `
    <section class="block">
      <h2><span class="letter">${b}</span> ${esc(inBlock[0]!.task)}<em>${inBlock.length} document${inBlock.length > 1 ? 's' : ''} · ${mmss(secs)}</em></h2>
      ${MULTIVOICE.has(b) ? '<p class="warn">Multi-voice. If two speakers here are hard to tell apart, the items do not work however good the French is.</p>' : ''}
      ${clips}
    </section>`;
    })
    .join('\n');

  const html = `<title>Examen 1 Listening Marking</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap">
<style>
  :root {
    color-scheme: light dark;
    --bg:#eef1f3; --card:#ffffff; --ink:#12171a; --muted:#5a656d;
    --line:#d9e0e4; --accent:#166b66; --accent-soft:#dcece9;
    --done:#2c7a52; --warn-bg:#fdf3e3; --warn-ink:#7a5312; --num:#0f5f8f; --num-bg:#e2eef7;
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --bg:#0e1214; --card:#161b1e; --ink:#e4eaec; --muted:#8a959c;
      --line:#242c31; --accent:#5ac8c0; --accent-soft:#14302f;
      --done:#5fb583; --warn-bg:#2a2114; --warn-ink:#e0bd78; --num:#7cc4ee; --num-bg:#14293a;
    }
  }
  :root[data-theme="dark"] {
    --bg:#0e1214; --card:#161b1e; --ink:#e4eaec; --muted:#8a959c;
    --line:#242c31; --accent:#5ac8c0; --accent-soft:#14302f;
    --done:#5fb583; --warn-bg:#2a2114; --warn-ink:#e0bd78; --num:#7cc4ee; --num-bg:#14293a;
  }

  * { box-sizing: border-box; }
  body {
    background: var(--bg); color: var(--ink); margin: 0;
    font: 400 15px/1.55 Archivo, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    padding: 32px 20px 80px;
  }
  .wrap { max-width: 880px; margin: 0 auto; display: flex; flex-direction: column; gap: 26px; }

  header.top { display: flex; flex-direction: column; gap: 6px; }
  h1 { font-size: 26px; font-weight: 700; letter-spacing: -.015em; margin: 0; text-wrap: balance; }
  .sub { color: var(--muted); margin: 0; font-variant-numeric: tabular-nums; }

  .brief { background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 18px 20px; display: flex; flex-direction: column; gap: 10px; }
  .brief h3 { margin: 0; font-size: 11.5px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); }
  .brief ol { margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 7px; }
  .brief li::marker { color: var(--muted); font-variant-numeric: tabular-nums; }

  .bar { position: sticky; top: 0; z-index: 5; background: var(--bg); padding: 12px 0 10px; border-bottom: 1px solid var(--line); display: flex; align-items: center; gap: 12px; font-variant-numeric: tabular-nums; }
  .track { flex: 1; height: 5px; border-radius: 3px; background: var(--line); overflow: hidden; }
  .fill { height: 100%; width: 0; background: var(--done); transition: width .18s ease; }
  .bar b { font-weight: 600; }

  section.block { display: flex; flex-direction: column; gap: 12px; }
  section.block h2 { display: flex; align-items: center; gap: 10px; margin: 8px 0 0; font-size: 15px; font-weight: 600; letter-spacing: .01em; }
  .letter { width: 25px; height: 25px; flex: none; display: grid; place-items: center; border-radius: 6px; background: var(--accent-soft); color: var(--accent); font-weight: 700; font-size: 13px; }
  section.block h2 em { margin-left: auto; font-style: normal; font-weight: 400; font-size: 13px; color: var(--muted); font-variant-numeric: tabular-nums; }
  .warn { margin: 0; background: var(--warn-bg); color: var(--warn-ink); border-radius: 8px; padding: 9px 13px; font-size: 13.5px; }

  .clip { background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 14px 16px 15px; display: flex; flex-direction: column; gap: 11px; }
  .clip.key { border-left: 3px solid var(--accent); }
  .clip.ok { opacity: .5; }
  .head { display: flex; align-items: center; gap: 11px; flex-wrap: wrap; }
  .n { width: 24px; height: 24px; flex: none; display: grid; place-items: center; border-radius: 50%; background: var(--line); color: var(--muted); font-size: 11.5px; font-weight: 600; font-variant-numeric: tabular-nums; }
  .part { flex: 1 1 220px; min-width: 0; font-weight: 500; }
  .meta { color: var(--muted); font-size: 13px; font-variant-numeric: tabular-nums; }
  .mark { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--muted); cursor: pointer; user-select: none; }
  .mark input { accent-color: var(--done); width: 15px; height: 15px; cursor: pointer; }
  .clip.ok .mark span { color: var(--done); }
  audio { width: 100%; height: 34px; }

  .tx {
    margin: 0; padding: 11px 0 0; border-top: 1px solid var(--line);
    font: 400 13px/1.75 "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
    white-space: pre-wrap; overflow-x: auto; color: var(--ink);
  }
  .spk { display: inline-block; min-width: 118px; color: var(--muted); font-weight: 600; font-size: 11.5px; letter-spacing: .04em; }
  .num { background: var(--num-bg); color: var(--num); font-weight: 600; border-radius: 3px; padding: 0 3px; }

  :focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 4px; }
  @media (prefers-reduced-motion: reduce) { .fill { transition: none; } }
  @media (max-width: 560px) { .spk { min-width: 0; display: block; } }
</style>
<div class="wrap">
  <header class="top">
    <h1>Examen 1 · listening marking</h1>
    <p class="sub">${rows.length} documents · ${mmss(total)} of audio · TEF Canada ${VARIANT}</p>
  </header>

  <div class="brief">
    <h3>What a transcript check will not catch</h3>
    <ol>
      <li><b>Numbers, times and prices.</b> Highlighted below. Synthesis reads them inconsistently, and they are frequently the answer to the item.</li>
      <li><b>Speaker distinctness</b> in the multi-voice blocks, marked with a rule. If two speakers in one document are hard to tell apart, the item is broken however good the French is.</li>
    </ol>
  </div>

  <div class="bar">
    <b id="count">0</b><span class="sub">of ${rows.length} marked</span>
    <div class="track"><div class="fill" id="fill"></div></div>
  </div>
${sections}
</div>
<script>
  var KEY = 'ealch-marking-blanc01';
  var boxes = Array.prototype.slice.call(document.querySelectorAll('input[type=checkbox]'));
  var done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { done = {}; }
  function paint() {
    var n = 0;
    boxes.forEach(function (b) {
      var on = !!done[b.dataset.i];
      b.checked = on;
      b.closest('.clip').classList.toggle('ok', on);
      if (on) n++;
    });
    document.getElementById('count').textContent = String(n);
    document.getElementById('fill').style.width = (boxes.length ? (n / boxes.length) * 100 : 0) + '%';
  }
  boxes.forEach(function (b) {
    b.addEventListener('change', function () {
      done[b.dataset.i] = b.checked;
      try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {}
      paint();
    });
  });
  paint();
</script>`;

  writeFileSync(out, html, 'utf8');
  console.log(`  wrote ${out}`);
  console.log(`  ${rows.length} clips, ${mmss(total)} of audio, ${blocks.length} blocks`);
}

main().catch((e) => { console.error(e); process.exit(1); });
