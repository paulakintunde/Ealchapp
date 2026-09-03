// The rules every TEF Canada paper must satisfy, as runnable assertions.
//
// STANDARD-tef §6 is a checklist a human is supposed to walk before review. A
// checklist nobody can fail is a wish, so it lives here as tests instead, and
// any paper gets the whole verifier by calling `paperRules(...)` from its own
// test file.
//
// SCOPE: only what is true of EVERY paper. A rule that names a topic, a figure
// or a turn of phrase belongs in that paper's own test file, not here.
//
// CONSOLIDATED. blanc-01 used to carry its own inline copies of 31 of these,
// written before this module existed; they have been removed rather than left
// to drift, and both papers now call `paperRules(...)`. Where the two versions
// of a rule differed, blanc-01's was kept: its length rule counts WORDS and
// only counts the key as longest when it is the unique maximum, where the
// replacement counted characters and counted ties. That mattered — the weaker
// version reported 35 of 80 on the shipped paper that passes the real one.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  validateExamPaper,
  validateExamTask,
  type ExamPaper,
  type ExamTask,
  type QcmItem,
} from '../../../ealch-v2/src/content/schema.ts';
import { cueMatches, selectTurn } from '../../../ealch-v2/src/utils/interlocutor.logic.ts';
import { keyPositionCounts, allItems, scatterKeys } from './finalise.ts';
import { CO_SCORING, CE_SCORING } from './scoring.ts';
import { scaledFor, nclcFor } from '../../../ealch-v2/src/utils/nclc.logic.ts';

export type PaperUnderTest = {
  name: string;
  paperNo: number;
  variant: string;
  PAPER: ExamPaper;
  TASKS: ExamTask[];
  CO_TASKS: ExamTask[];
  CE_TASKS: ExamTask[];
  EE_TASKS: ExamTask[];
  EO_TASKS: ExamTask[];
  /** The po_interaction task, for the interlocutor rules. */
  interaction: ExamTask;
};

const itemsOf = (t: ExamTask): QcmItem[] => (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []));
const countOf = (t: ExamTask) => itemsOf(t).length;
const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

/** Document length the blueprint expects per CO block, in seconds
 *  (STANDARD-tef §2). Only the floor is enforced as a test; the ceiling is
 *  reported by scripts/tef/check-speech-rate.ts against the rendered audio,
 *  because overrunning is a pacing judgement rather than a missing document. */
const LENGTH_ENVELOPE_S: Record<string, [number, number]> = {
  A: [15, 30], B: [20, 35], C: [45, 75], D: [45, 75], E: [60, 120], F: [120, 180], G: [15, 40],
};

/** The MEAN words per minute each block actually renders at, measured over all
 *  150 listening documents in the pack.
 *
 *  Not STANDARD-common §2's target rate, which is what the audio is aimed at
 *  rather than what it does: block A is aimed at 120 wpm and renders at 127,
 *  block E at 160 and renders at 172. Using the target made this guard miss
 *  short documents in the fast blocks.
 *
 *  Nor the fastest observed rate, which was the first correction and was worse:
 *  block G's fastest document runs at 185 wpm against a mean of 141, so a floor
 *  built on 185 flagged twenty documents where the rendered audio shows three.
 *  A guard that cries wolf on 85% of its findings gets switched off.
 *
 *  So: the mean, and what that buys is honest. This is a SMOKE TEST with about
 *  15% error either way. It catches the failure it was written for — four
 *  reportages authored at half length — and it does not adjudicate a document
 *  that misses its floor by a second. The precise instrument is
 *  scripts/tef/check-speech-rate.ts, which measures rendered audio and needs no
 *  model of the renderer at all. Re-measure these if the voices or the speed
 *  multipliers change; that script prints them. */
const RENDERED_WPM: Record<string, number> = {
  A: 127, B: 141, C: 155, D: 167, E: 172, F: 167, G: 141,
};

/** Everything a candidate or a grader actually reads. */
function candidateFacing(tasks: ExamTask[]): string[] {
  const out: string[] = [];
  for (const t of tasks) {
    out.push(t.prompt, t.label ?? '', t.modelAnswer ?? '');
    for (const part of t.parts ?? []) out.push(part.label, part.text ?? '', part.imageAlt ?? '');
    for (const it of itemsOf(t)) out.push(it.q, it.why ?? '', ...it.opts);
    for (const c of t.rubric?.criteria ?? []) out.push(c.label, ...(c.descriptors ?? []));
    const b = t.interlocutor;
    if (b) for (const turn of [b.opening, b.catchAll, b.closing, ...b.answers]) out.push(turn.text, turn.covers);
  }
  return out.filter(Boolean);
}

export function paperRules(p: PaperUnderTest): void {
  const n = p.name;

  /* ─── structure ────────────────────────────────────────────────────────── */

  test(`${n}: four épreuves in the published order`, () => {
    deepStrictEqual(p.PAPER.sections.map((s) => s.skill), ['CO', 'CE', 'PE', 'PO']);
    strictEqual(p.PAPER.id, `paper.tef_canada.${p.variant}.${p.paperNo}`);
    strictEqual(p.PAPER.paperNo, p.paperNo);
  });

  test(`${n}: CO is 40 questions in the blueprint's block counts`, () => {
    // A 4 · B 4 · C 6 · D 2 · E 6 · F 1 · G 17. The last is the G-elastic fill
    // rule: the published breakdown sums to 33 and block G carries the rest.
    deepStrictEqual(p.CO_TASKS.map(countOf), [4, 4, 6, 2, 6, 1, 17]);
    strictEqual(p.CO_TASKS.reduce((a, t) => a + countOf(t), 0), 40);
  });

  test(`${n}: CE is 40 questions in the blueprint's block counts`, () => {
    // A 7 · B 6 · C 4 · D+E 5 · F 10 · G 8. Fully published and it sums exactly,
    // unlike CO's.
    deepStrictEqual(p.CE_TASKS.map(countOf), [7, 6, 4, 5, 10, 8]);
    strictEqual(p.CE_TASKS.reduce((a, t) => a + countOf(t), 0), 40);
  });

  test(`${n}: the paper carries 84 scored units`, () => {
    strictEqual(80 + p.EE_TASKS.length + p.EO_TASKS.length, 84);
  });

  test(`${n}: the fill rule is recorded where a later correction can find it`, () => {
    const co = p.PAPER.sections.find((s) => s.skill === 'CO')!;
    ok(co.blueprintId.includes('G-elastic'), `CO blueprintId does not record the fill rule: ${co.blueprintId}`);
    for (const s of p.PAPER.sections) ok(s.blueprintId.startsWith('tef-canada-2025.09'));
  });

  test(`${n}: every task is dated against the blueprint it was written for`, () => {
    for (const t of p.TASKS) strictEqual(t.formatVersion, 'tef-canada-2025.09', t.id);
  });

  test(`${n}: each section's task clocks sum to the section clock`, () => {
    const sum = (ts: ExamTask[]) => ts.reduce((a, t) => a + t.timingS, 0);
    const by = (skill: string) => p.PAPER.sections.find((s) => s.skill === skill)!.timingS;
    strictEqual(sum(p.CO_TASKS), by('CO'));
    strictEqual(sum(p.CE_TASKS), by('CE'));
    strictEqual(sum(p.EE_TASKS), by('PE'));
    strictEqual(sum(p.EO_TASKS), by('PO'));
    // 2 h 55 for the whole sitting, per the blueprint.
    strictEqual(p.PAPER.sections.reduce((a, s) => a + s.timingS, 0), 2400 + 3600 + 3600 + 900);
  });

  test(`${n}: every id belongs to this paper's variant`, () => {
    // A task copied from another paper and left with its old id would be
    // published under that paper and silently replace it.
    for (const t of p.TASKS) {
      ok(t.id.includes(`.${p.variant}.`), `${t.id} does not carry variant ${p.variant}`);
      strictEqual(t.variant, p.variant, t.id);
    }
    const ids = p.TASKS.map((t) => t.id);
    strictEqual(new Set(ids).size, ids.length, 'two tasks share an id');
  });

  /* ─── the CO block rules ───────────────────────────────────────────────── */

  test(`${n}: block C is the only three-option block`, () => {
    // Changed 1 September 2025. Getting it wrong dates the paper immediately.
    p.CO_TASKS.forEach((t, i) => {
      const expected = i === 2 ? 3 : 4;
      for (const item of itemsOf(t)) {
        strictEqual(item.opts.length, expected, `${t.label}: expected ${expected} options, got ${item.opts.length}`);
      }
    });
  });

  test(`${n}: every listening part sets playCount, and only block E may play twice`, () => {
    p.CO_TASKS.forEach((t, i) => {
      for (const part of t.parts ?? []) {
        ok(part.playCount !== undefined, `${t.label} / ${part.label}: playCount must be explicit, never defaulted`);
        const max = i === 4 ? 2 : 1;
        ok(part.playCount! <= max, `${t.label} / ${part.label}: playCount ${part.playCount} exceeds ${max}`);
      }
    });
    ok((p.CO_TASKS[4]!.parts ?? []).every((x) => x.playCount === 2), 'block E is the two-play block and must use it');
  });

  test(`${n}: every listening part has a transcript, a window and a duration`, () => {
    for (const t of p.CO_TASKS) {
      for (const part of t.parts ?? []) {
        ok((part.text ?? '').length > 0, `${t.label} / ${part.label}: no transcript, so nothing renders and nothing speaks`);
        ok(part.readWindowS !== undefined && part.readWindowS > 0, `${t.label} / ${part.label}: no reading window`);
        ok(part.durationS !== undefined && part.durationS > 0, `${t.label} / ${part.label}: no duration`);
      }
    }
  });

  test(`${n}: every listening document is long enough for its block`, () => {
    // STANDARD-tef §2 fixes a length envelope per block, and block F's entry is
    // emphatic: "the longest transcript... Budget for it. Do not economise by
    // making it a monologue." Nothing enforced it, and four papers drifted to
    // roughly half length on exactly that document.
    //
    // The authored `durationS` cannot be the check: it is the author's estimate,
    // and the four short reportages all carried an estimate inside the envelope
    // while the rendered audio came in at 68-81s. The renderer overwrites the
    // estimate with the measured value, so a test reading it measures the guess
    // before a render and the truth after, which is not a test.
    //
    // The TRANSCRIPT is what the author controls, so the floor is expressed in
    // words: at the block's target rate, how long does this text take to say?
    // That is checkable the moment it is typed.
    // Collected rather than thrown one at a time: a paper with three short
    // documents should say so in one run, not reveal them across three fixes.
    const short: string[] = [];
    for (const [i, t] of p.CO_TASKS.entries()) {
      const block = 'ABCDEFG'[i]!;
      const [lo] = LENGTH_ENVELOPE_S[block]!;
      const wpm = RENDERED_WPM[block]!;
      for (const part of t.parts ?? []) {
        // Speaker labels are stage directions, not speech, so they do not count.
        const w = (part.text ?? '').replace(/^[^\n:]{2,24}:/gm, '').split(/\s+/).filter(Boolean).length;
        const impliedS = Math.round((w / wpm) * 60);
        if (impliedS < lo) {
          short.push(`${t.label} / ${part.label}: ${w} words is about ${impliedS}s at ${wpm} wpm, under block ${block}'s ${lo}s floor`);
        }
      }
    }
    ok(short.length === 0, `${short.length} document(s) under the blueprint floor:\n      ${short.join('\n      ')}`);
  });

  test(`${n}: block A carries an image brief and an alt on every part`, () => {
    // An image with no alt fails UDL 01 and must not ship.
    for (const part of p.CO_TASKS[0]!.parts ?? []) {
      ok(part.imageRef, `${part.label}: block A parts are image-option items and need a plate`);
      ok((part.imageAlt ?? '').length > 60, `${part.label}: the alt must describe all four panels, not name the file`);
    }
  });

  test(`${n}: no block A alt claims the panels follow the option order`, () => {
    // The alt is also the image's accessibilityLabel, so a screen-reader user
    // hears it and maps panels to options by whatever it says.
    //
    // Every block A alt used to end "Chaque panneau correspond à une option,
    // dans l'ordre où les options sont affichées." That was measured FALSE on
    // 15 of the 20 plates: the alt lists panels in the order they were
    // AUTHORED, and `scatterKeys` reorders the options afterwards. It went
    // unnoticed only because the plates 404 and nobody could see the panels.
    //
    // A plate drawn to match such an alt would have turned a missing image into
    // a wrong one, so the claim is gone rather than the ordering "fixed": the
    // learner picks a TEXT option and matches it by content, so panel position
    // carries no information, and dropping the claim keeps plate and alt true
    // through any future re-scatter.
    for (const part of p.CO_TASKS[0]!.parts ?? []) {
      const alt = part.imageAlt ?? '';
      ok(
        !/l['’]ordre où les options|dans cet ordre|ordre des options|premier panneau|panneau \d/i.test(alt),
        `${part.label}: the alt claims a panel order it cannot guarantee — scatterKeys moves the options after authoring`
      );
    }
  });

  test(`${n}: no image brief claims an option order it cannot know`, () => {
    // The brief describes the panels; the stored `opts` array decides which
    // panel is which, because scatterKeys moves the key AFTER authoring.
    for (const t of [...p.CO_TASKS, ...p.CE_TASKS]) {
      for (const part of t.parts ?? []) {
        ok(!/\([A-D]\)/.test(part.imageAlt ?? ''), `${part.label}: the alt labels panels (A)..(D), an order it cannot know`);
      }
    }
  });

  test(`${n}: a transcript reads as speech, not as prose read aloud`, () => {
    for (const t of p.CO_TASKS) {
      const all = (t.parts ?? []).map((x) => x.text ?? '').join('\n');
      ok(/^[A-ZÀ-Ý0-9' ’-]+ ?:/m.test(all), `${t.label}: turns must be marked speaker-first for the render pipeline`);
    }
    const spontaneous = p.CO_TASKS.filter((t) =>
      /\b(euh|bon|alors|enfin|franchement|hein)\b/i.test((t.parts ?? []).map((x) => x.text ?? '').join('\n'))
    );
    ok(spontaneous.length >= 4, `only ${spontaneous.length} listening blocks carry any disfluency at all`);
  });

  /* ─── item quality ─────────────────────────────────────────────────────── */

  test(`${n}: the answer key is scattered, not parked on the first option`, () => {
    // The runner renders authored order and never shuffles, so a paper authored
    // key-first and shipped that way is answerable without listening or reading
    // a word. This is the assertion that scatterKeys actually ran.
    const counts = keyPositionCounts([...p.CO_TASKS, ...p.CE_TASKS]);
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    strictEqual(total, 80);
    for (const [pos, k] of Object.entries(counts)) {
      ok(k / total <= 0.35, `position ${pos} holds ${k} of ${total} keys (${Math.round((k / total) * 100)}%)`);
    }
  });

  test(`${n}: every closed item carries a justification and a band`, () => {
    for (const t of [...p.CO_TASKS, ...p.CE_TASKS]) {
      for (const item of itemsOf(t)) {
        ok((item.why ?? '').length > 20, `${t.label} · "${item.q}": no usable justification`);
        ok(item.band, `${t.label} · "${item.q}": no band`);
      }
    }
  });

  test(`${n}: no item repeats an option inside itself`, () => {
    // Two identical options make one of them unchoosable and the item unfair
    // whichever the key is.
    for (const t of [...p.CO_TASKS, ...p.CE_TASKS]) {
      for (const item of itemsOf(t)) {
        strictEqual(new Set(item.opts).size, item.opts.length, `${t.label} · "${item.q}" repeats an option`);
      }
    }
  });

  test(`${n}: no option set gives the key away by length`, () => {
    // D5: options within ±40% of each other in word count, and across a whole
    // section the key is the longest no more than 30% of the time.
    //
    // This is blanc-01's original rule, moved here rather than reimplemented.
    // The version that briefly stood in its place counted CHARACTERS and
    // counted a TIE as the key being longest, which is wrong twice over: a tie
    // gives a candidate no way to pick the key, and character length punishes
    // long words rather than long answers. It reported 35 of 80 on the shipped
    // paper that passes this one.
    const items = allItems([...p.CO_TASKS, ...p.CE_TASKS]);
    let keyLongest = 0;
    // Collected rather than asserted one at a time: a spread problem is usually
    // a habit across a block, and failing on the first one hides the other nine.
    const spread: string[] = [];
    for (const it of items) {
      const lens = it.opts.map(words);
      const lo = Math.min(...lens);
      const hi = Math.max(...lens);
      // Very short option sets are exempt: 'à' vs 'pour' is a 100% spread and
      // tells a candidate nothing.
      if (hi > 3 && hi > lo * 2.2) spread.push(`(${lo}..${hi}) ${it.q}`);
      if (lens[it.correct] === hi && lens.filter((l) => l === hi).length === 1) keyLongest += 1;
    }
    deepStrictEqual(spread, [], `option lengths spread too far:\n${spread.join('\n')}`);
    ok(keyLongest / items.length <= 0.3, `the key is the longest option in ${keyLongest} of ${items.length} items`);
  });

  test(`${n}: no em dash and no banned word in anything a candidate reads`, () => {
    // Ported from blanc-01, where it was written inline. `honnête` and its
    // relatives are barred corpus-wide, and the em dash is barred in every
    // learner-facing string.
    const bad = candidateFacing(p.TASKS).filter((s) => s.includes('—'));
    strictEqual(bad.length, 0, `em dash in: ${bad.slice(0, 3).join(' | ')}`);
    const honest = candidateFacing(p.TASKS).filter((s) => /honn[êe]t/i.test(s));
    strictEqual(honest.length, 0, `banned word in: ${honest.slice(0, 3).join(' | ')}`);
  });

  test(`${n}: no question is a stem with nothing in it`, () => {
    for (const it of allItems([...p.CO_TASKS, ...p.CE_TASKS])) {
      ok(it.q.trim().length > 8, `stem too short to be a question: "${it.q}"`);
      // A gap-fill stem is a sentence with a hole in it, and an `Espace (n)`
      // label points at a hole in a text. Neither is a question, and demanding a
      // question mark of them would be demanding the wrong shape.
      ok(
        it.q.includes('?') || it.q.includes('___') || it.q.startsWith('Espace'),
        `stem is neither a question nor a gap: "${it.q}"`
      );
    }
  });

  test(`${n}: the negative stem is used sparingly, and marked`, () => {
    // A stem asking what is NOT true is legitimate but exhausting, and one that
    // hides its negation is a trap rather than a test.
    const neg = allItems([...p.CO_TASKS, ...p.CE_TASKS]).filter((it) => /\bPAS\b/.test(it.q));
    ok(neg.length <= 2, `${neg.length} negative stems in the paper`);
    for (const it of neg) ok(/PAS/.test(it.q), `negative stem not marked: ${it.q}`);
  });

  test(`${n}: every closed task routes a miss back to real corpus items`, () => {
    for (const t of [...p.CO_TASKS, ...p.CE_TASKS]) {
      ok((t.targetItemIds ?? []).length > 0, `${t.id}: a miss decomposes into nothing`);
      for (const id of t.targetItemIds ?? []) {
        ok(/^fr\.[a-c][12]\./.test(id), `${t.id}: "${id}" is not a corpus item id`);
      }
    }
    // And an open task carries none by design: it has no wrong answers to
    // decompose, and validateExamTask refuses the field.
    for (const t of [...p.EE_TASKS, ...p.EO_TASKS]) {
      deepStrictEqual(t.targetItemIds ?? [], [], `${t.id}: an open task decomposes into nothing`);
    }
  });

  test(`${n}: scattering twice is refused rather than silently re-scattering`, () => {
    // The apply script is idempotent by design. If scatterKeys were applied to
    // already-scattered tasks it would move the key again and invalidate every
    // attempt logged against the old one, so it throws instead.
    let threw = false;
    try {
      scatterKeys(p.CO_TASKS[0]!);
    } catch {
      threw = true;
    }
    ok(threw, 'scatterKeys must refuse an already-scattered task');
  });

  /* ─── scoring ──────────────────────────────────────────────────────────── */
  //
  // The tables are shared across papers (`../tef/scoring.ts`), so these hold for
  // every paper and a failure here is a format-level fault, not a content one.

  test(`${n}: the scoring maps rise and land on the published maxima`, () => {
    strictEqual(scaledFor(40, CO_SCORING.map), 360);
    strictEqual(scaledFor(40, CE_SCORING.map), 300);
    strictEqual(scaledFor(0, CO_SCORING.map), 0);
    for (const s of [CO_SCORING, CE_SCORING]) {
      for (let raw = 1; raw <= 40; raw += 1) {
        ok(scaledFor(raw, s.map)! >= scaledFor(raw - 1, s.map)!, `raw ${raw} scores lower than ${raw - 1}`);
      }
    }
  });

  test(`${n}: each NCLC floor lands on the raw count the ladder promises`, () => {
    deepStrictEqual(
      [16, 20, 24, 28, 32, 34, 36].map((r) => scaledFor(r, CO_SCORING.map)),
      [145, 181, 217, 249, 280, 298, 316]
    );
    deepStrictEqual(
      [16, 20, 24, 28, 32, 34, 36].map((r) => scaledFor(r, CE_SCORING.map)),
      [121, 151, 181, 207, 233, 248, 263]
    );
  });

  test(`${n}: every reported band is a RANGE, never a point estimate`, () => {
    // BLUEPRINT §7.2: we cannot equate, so we must not publish a single level.
    for (const s of p.PAPER.sections) {
      for (const rule of s.scoring!.nclc) {
        ok(rule.nclcHigh > rule.nclcLow, `${s.skill}: raw ${rule.minRaw}-${rule.maxRaw} reports a single level`);
        ok(rule.nclcHigh - rule.nclcLow <= 2, `${s.skill}: a span of ${rule.nclcHigh - rule.nclcLow} is not an estimate`);
      }
    }
  });

  test(`${n}: below the NCLC 4 floor the paper declines to estimate`, () => {
    // A four-option MCQ pays 25% for guessing. Awarding NCLC 4 to a candidate at
    // chance would round up to an immigration threshold nobody earned.
    strictEqual(nclcFor(10, CO_SCORING.nclc), null);
    strictEqual(nclcFor(15, CO_SCORING.nclc), null);
    ok(nclcFor(16, CO_SCORING.nclc));
    strictEqual(nclcFor(16, CO_SCORING.nclc)!.low, 4);
  });

  /* ─── the open tasks ───────────────────────────────────────────────────── */

  test(`${n}: every open task has a rubric and a model answer`, () => {
    for (const t of [...p.EE_TASKS, ...p.EO_TASKS]) {
      ok(t.rubric && t.rubric.criteria.length >= 3, `${t.id}: a rubric of fewer than three criteria is not a grid`);
      ok((t.modelAnswer ?? '').length > 200, `${t.id}: the model answer is the grader's only worked example`);
      for (const c of t.rubric!.criteria) {
        ok(Number.isInteger(c.maxPoints) && c.maxPoints >= 1, `${t.id} · ${c.key}: maxPoints must be a whole number >= 1`);
        ok((c.descriptors ?? []).length >= 2, `${t.id} · ${c.key}: without descriptors two markers give two scores`);
      }
    }
  });

  test(`${n}: every speaking task has a prep clock, every written task none`, () => {
    for (const t of p.EO_TASKS) ok(t.prepS && t.prepS > 0, `${t.id}: no prep clock, so the candidate is put straight on the mic`);
    for (const t of p.EE_TASKS) strictEqual(t.prepS, undefined, `${t.id}: prep belongs to a spoken task`);
  });

  test(`${n}: every section carries scoring`, () => {
    // validateExamPaper checks section scoring only `if (s.scoring !== undefined)`,
    // so a section that simply omits it validates clean and then shows a
    // candidate a report with no band on it.
    for (const s of p.PAPER.sections) ok(s.scoring, `${s.skill} has no scoring, so its report would show nothing`);
  });

  /* ─── the interlocutor ─────────────────────────────────────────────────── */

  test(`${n}: every answer in the bank is reachable from the model answer`, () => {
    // The guard structural validation cannot make: a cue that does not fire on
    // the author's own strong answer will not fire on a candidate either, and
    // the fact behind it becomes unobtainable no matter how well they perform.
    const bank = p.interaction.interlocutor!;
    for (const answer of bank.answers) {
      const others = bank.answers.filter((a) => a.id !== answer.id).map((a) => a.id);
      const sel = selectTurn(p.interaction.modelAnswer!, bank, others);
      strictEqual(sel.kind, 'answer', `"${answer.covers}" (${answer.id}) has no cue that fires on the model answer`);
      if (sel.kind === 'answer') strictEqual(sel.turn.id, answer.id);
    }
  });

  test(`${n}: the bank covers what the rubric says coverage means`, () => {
    const bank = p.interaction.interlocutor!;
    ok(bank.answers.length >= 8, `${bank.answers.length} facts is thin for a five-minute section`);
    for (const a of bank.answers) {
      ok(a.covers.trim().length > 0, `${a.id} has a blank covers and is invisible to the grader`);
      ok(a.cues.length > 0, `${a.id} has no cue and can never be reached`);
      for (const c of a.cues) ok(cueMatches(c, c), `${a.id}: cue "${c}" cannot match itself`);
    }
    // Played by position, not selected by matching. A cue on any of these would
    // put it into the answer bank's competition and let it be retired.
    strictEqual(bank.opening.cues.length, 0);
    strictEqual(bank.catchAll.cues.length, 0);
    strictEqual(bank.closing.cues.length, 0);
  });

  /* ─── the schema's own verdict ─────────────────────────────────────────── */

  test(`${n}: every task validates`, () => {
    for (const t of p.TASKS) {
      const issues = validateExamTask(t);
      deepStrictEqual(issues, [], `${t.id}: ${issues.map((i) => `${i.path}: ${i.message}`).join(' | ')}`);
    }
  });

  test(`${n}: the paper validates`, () => {
    const issues = validateExamPaper(p.PAPER);
    deepStrictEqual(issues, [], issues.map((i) => `${i.path}: ${i.message}`).join(' | '));
  });

  test(`${n}: every section's taskIds resolve to tasks that exist`, () => {
    const have = new Set(p.TASKS.map((t) => t.id));
    for (const s of p.PAPER.sections) {
      for (const id of s.taskIds) ok(have.has(id), `${s.skill} names ${id}, which is not in this paper`);
    }
    strictEqual(p.PAPER.sections.flatMap((s) => s.taskIds).length, p.TASKS.length, 'a task is not referenced by any section');
  });
}
