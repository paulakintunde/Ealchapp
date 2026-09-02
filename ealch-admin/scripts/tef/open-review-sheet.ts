// Build the open-task review sheet: the sixteen tasks of papers 2 to 5, laid
// out so the mandated full review can actually be finished.
//
// Same reasoning as blanc-01's marking-sheet.ts. A review that means opening
// four TypeScript files and scrolling between a prompt, a rubric and a model
// answer is a review nobody completes, and the parts that go unchecked are the
// parts that need checking.
//
// Three decisions in the page are about the failure modes, not decoration:
//
//   - PROMPT, RUBRIC and MODEL ANSWER sit side by side. The reviewer's question
//     is whether the three agree: does the prompt ask for what the rubric marks,
//     and does the model answer demonstrate it? That is a comparison, and a
//     comparison you have to hold in your head is one you get wrong.
//   - The WORD COUNT is shown against the task's own bound. It is the one number
//     a reviewer would otherwise count by hand, and the model answer is the
//     grader's only worked example of a strong answer.
//   - The INTERLOCUTOR BANK is shown as fact-and-answer pairs beside the advert,
//     because the real question is whether the bank answers everything the
//     advert withholds. Reading the bank alone cannot tell you that.
//
// Progress is kept in localStorage, per task, so the review survives a closed
// tab. It is the reviewer's own record, not a score.
//
//   pnpm tsx scripts/tef/open-review-sheet.ts
import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Newlines become paragraphs; the prompts and model answers are written with
 *  real paragraph breaks and lose their shape as one block. */
const para = (s: string) =>
  esc(s).split(/\n{2,}/).map((p) => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');

/** What the reviewer is being asked to decide, per task type. Written as
 *  questions rather than as a checklist of nouns, because a noun ("register")
 *  can be ticked without being checked. */
const ASKS: Record<string, string[]> = {
  pe_short: [
    'Does the opening give enough to continue, without giving away what the candidate must add?',
    'Could a strong answer contradict the opening without noticing? (If so, the opening is under-specified.)',
    'Is the model answer in the third person throughout, with no opinion and no evaluation?',
    'Does every rubric descriptor separate a 3 from a 4, or does it merely restate the criterion?',
  ],
  pe_essay: [
    'Does the prompt state the counter-argument the rubric marks, in the same words?',
    'Is the position arguable both ways, or does one side plainly win?',
    'Does the model answer concede something real before answering it?',
    'Is the model answer at or above the word floor the prompt sets?',
  ],
  po_interaction: [
    'Does the advert withhold every fact the bank answers? (An answer to something already printed is unreachable.)',
    'Would a strong candidate plausibly ask for each fact, in these words?',
    'Is the bank one person talking, in one register, throughout?',
    'Does the coverage criterion list the same facts the bank holds?',
  ],
  po_monologue: [
    'Is the objection ladder genuinely a ladder — does each rung cost more to answer than the last?',
    'Does the model answer climb past the first rung?',
    'Does the prompt give enough about the activity to present it without inventing?',
    'Is the register that of one person talking to someone they know?',
  ],
};

type Row = { paper: string; task: ExamTask };

function taskCard(r: Row, i: number): string {
  const t = r.task;
  const spec = t.responseSpec;
  const n = words(t.modelAnswer ?? '');
  const bound =
    spec?.kind === 'text'
      ? spec.maxWords !== undefined
        ? `${spec.minWords}–${spec.maxWords} mots`
        : `${spec.minWords}+ mots`
      : 'parlé';
  // THREE states, not two. A spoken task has no word bound to be inside or
  // outside of, and colouring it red said "this model answer breaks its spec"
  // about all eight EO tasks. A badge that cries wolf is a badge the reviewer
  // stops reading.
  const fit: 'ok' | 'bad' | 'na' =
    spec?.kind !== 'text'
      ? 'na'
      : (spec.minWords === undefined || n >= spec.minWords) && (spec.maxWords === undefined || n <= spec.maxWords)
        ? 'ok'
        : 'bad';

  const rubric = (t.rubric?.criteria ?? [])
    .map(
      (c) =>
        `<div class="crit"><b>${esc(c.label)}</b> <span class="pts">/${c.maxPoints}</span>` +
        `<ul>${(c.descriptors ?? []).map((d) => `<li>${esc(d)}</li>`).join('')}</ul></div>`
    )
    .join('');

  const bank = t.interlocutor
    ? `<div class="bank"><h4>Banque de l’interlocuteur — ${t.interlocutor.answers.length} faits</h4>` +
      `<table><tr><th>Ce que le document tait</th><th>Ce que l’interlocuteur répond</th><th>Amorces</th></tr>` +
      t.interlocutor.answers
        .map(
          (a) =>
            `<tr><td class="covers">${esc(a.covers)}</td><td>${esc(a.text)}</td>` +
            `<td class="cues">${a.cues.map((c) => `<code>${esc(c)}</code>`).join(' ')}</td></tr>`
        )
        .join('') +
      `</table>` +
      `<p class="aside">Ouverture, relance et clôture se jouent par position et ne portent aucune amorce : ` +
      `${esc(t.interlocutor.opening.text)}</p></div>`
    : '';

  const asks = (ASKS[t.taskType] ?? [])
    .map((q, k) => `<li><label><input type="checkbox" data-i="${i}-${k}"> ${esc(q)}</label></li>`)
    .join('');

  return `
<section class="task" id="t${i}">
  <header>
    <h2>${esc(r.paper)} · ${esc(t.label ?? t.id)}</h2>
    <span class="tag">${esc(t.taskType)}</span>
    <span class="tag">${esc(t.level)}</span>
    <span class="tag">${Math.round(t.timingS / 60)} min${t.prepS ? ` · ${t.prepS}s de préparation` : ''}</span>
  </header>
  <div class="cols">
    <div class="col">
      <h3>Consigne</h3>
      ${para(t.prompt)}
      ${bank}
    </div>
    <div class="col">
      <h3>Grille</h3>
      ${rubric}
    </div>
    <div class="col">
      <h3>Réponse modèle <span class="count ${fit}">${n} mots · ${esc(bound)}</span></h3>
      ${para(t.modelAnswer ?? '')}
    </div>
  </div>
  <div class="asks"><h3>À décider</h3><ul>${asks}</ul></div>
</section>`;
}

async function main() {
  const rows: Row[] = [];
  for (const p of ['02', '03', '04', '05']) {
    const m = await import(pathToFileURL(resolve(HERE, `../tef-blanc${p}/paper.ts`)).href);
    for (const t of [...m.EE_TASKS, ...m.EO_TASKS] as ExamTask[]) rows.push({ paper: `blanc-${p}`, task: t });
  }

  const html = `<!doctype html><meta charset="utf-8"><title>Open-task review — TEF papers 2 to 5</title>
<style>
  :root { color-scheme: light; }
  body { margin: 0; padding: 24px; font: 15px/1.55 -apple-system, "Segoe UI", system-ui, sans-serif;
         background: #f6f6f4; color: #1b1b1a; }
  h1 { font-size: 22px; margin: 0 0 4px; }
  .lede { color: #55554f; max-width: 62ch; margin: 0 0 22px; }
  .task { background: #fff; border: 1px solid #e0e0da; border-radius: 10px; padding: 18px 20px; margin: 0 0 20px; }
  .task.done { opacity: .5; }
  header { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; margin-bottom: 12px;
           border-bottom: 1px solid #eee; padding-bottom: 10px; }
  h2 { font-size: 17px; margin: 0; }
  .tag { font-size: 12px; color: #55554f; background: #f0f0ec; border-radius: 4px; padding: 2px 7px; }
  .cols { display: grid; grid-template-columns: 1.1fr 1fr 1.1fr; gap: 22px; }
  @media (max-width: 1100px) { .cols { grid-template-columns: 1fr; } }
  h3 { font-size: 13px; text-transform: uppercase; letter-spacing: .05em; color: #7a7a72;
       margin: 0 0 8px; display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
  h4 { font-size: 13px; margin: 16px 0 6px; }
  p { margin: 0 0 9px; }
  .col p { white-space: normal; }
  .count { font-size: 12px; text-transform: none; letter-spacing: 0; padding: 2px 7px; border-radius: 4px; }
  .count.ok { background: #e6f2e6; color: #2c5f2c; }
  .count.bad { background: #f7e3e3; color: #8a2b2b; }
  .count.na  { background: #f0f0ec; color: #55554f; }
  .crit { margin: 0 0 10px; }
  .crit ul { margin: 4px 0 0; padding-left: 18px; color: #3c3c38; }
  .crit li { margin: 2px 0; }
  .pts { color: #7a7a72; font-size: 12px; }
  .bank table { border-collapse: collapse; width: 100%; font-size: 13px; margin-top: 4px; }
  .bank th { text-align: left; font-weight: 600; color: #7a7a72; font-size: 11px; text-transform: uppercase;
             border-bottom: 1px solid #e6e6e0; padding: 4px 6px 4px 0; }
  .bank td { vertical-align: top; padding: 5px 6px 5px 0; border-bottom: 1px solid #f2f2ee; }
  .covers { font-weight: 600; white-space: nowrap; }
  .cues code { font-size: 11px; background: #f0f0ec; border-radius: 3px; padding: 1px 4px; }
  .aside { font-size: 12px; color: #7a7a72; margin-top: 8px; }
  .asks { margin-top: 16px; border-top: 1px solid #eee; padding-top: 12px; }
  .asks ul { margin: 0; padding-left: 0; list-style: none; }
  .asks li { margin: 5px 0; }
  .asks label { display: flex; gap: 8px; align-items: flex-start; cursor: pointer; }
  #bar { position: sticky; top: 0; background: #f6f6f4; padding: 10px 0 14px; margin: -24px -24px 0;
         padding-left: 24px; border-bottom: 1px solid #e0e0da; z-index: 2; font-size: 13px; color: #55554f; }
</style>
<div id="bar"><span id="prog"></span></div>
<h1>Open-task review — TEF papers 2 to 5</h1>
<p class="lede">Sixteen tasks at the full-review tier. Each card puts the consigne, the grille and the
réponse modèle side by side, because the question is whether the three agree. The questions under
«&nbsp;À décider&nbsp;» are the ones an automated pass cannot answer.</p>
${rows.map(taskCard).join('')}
<script>
  var KEY = 'ealch-open-review';
  var done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
  var boxes = [].slice.call(document.querySelectorAll('input[type=checkbox]'));
  function paint() {
    var n = 0;
    boxes.forEach(function (b) { if (done[b.dataset.i]) { b.checked = true; n++; } });
    document.getElementById('prog').textContent = n + ' of ' + boxes.length + ' checks done';
    [].slice.call(document.querySelectorAll('.task')).forEach(function (s, i) {
      var mine = boxes.filter(function (b) { return b.dataset.i.split('-')[0] === String(i); });
      s.classList.toggle('done', mine.length > 0 && mine.every(function (b) { return done[b.dataset.i]; }));
    });
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

  const out = resolve(HERE, '../../open-review.html');
  writeFileSync(out, html, 'utf8');
  console.log(`  wrote ${out}`);
  console.log(`  ${rows.length} tasks · ${rows.filter((r) => r.task.interlocutor).length} with an interlocutor bank`);
}

main().catch((e) => { console.error(String(e)); process.exit(1); });
