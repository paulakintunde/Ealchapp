// What makes a TCF paper correct, as tests.
//
// The TEF verifier next door checks blocks: seven named families, each with its
// own counts and band range. None of that exists here. A TCF comprehension
// épreuve is 39 questions running A1 to C2 in order, and almost everything that
// can go wrong with one is a property of that ORDER.
//
// STANDARD-tcf §7 is the checklist this encodes. Two of its lines cannot be
// checked from source and are marked where they live instead:
//
//   - "speech rate rises across the épreuve" needs rendered audio, so it
//     belongs with scripts/tef/check-speech-rate.ts once TCF has clips.
//   - "stem mix per band" needs the stem taxonomy from STANDARD-common §3.1,
//     which is not yet machine-readable.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { ExamPaper, ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { spokenTranscript } from '../../../ealch-v2/src/utils/coPlayback.logic.ts';
import { itemsOf, countOf, candidateFacing } from '../exam/task-shape.ts';
import { CE_WORDS, TCF_LENGTH, TCF_RATE, type Band as RateBand } from '../exam/rate-rules.ts';

export type TcfPaperUnderTest = {
  name: string;
  paperNo: number;
  variant: string;
  PAPER: ExamPaper;
  TASKS: ExamTask[];
  CO_TASKS: ExamTask[];
  CE_TASKS: ExamTask[];
  EE_TASKS: ExamTask[];
  EO_TASKS: ExamTask[];
};

export const BANDS = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'] as const;
type Band = (typeof BANDS)[number];

/** The ramp. BLUEPRINT-tcf-canada, and the reason the format exists. */
export const RAMP: Record<Band, number> = { a1: 3, a2: 6, b1: 10, b2: 10, c1: 7, c2: 3 };

const FORMAT_VERSION = 'tcf-canada-2026.01';

/** Words banned from anything a candidate reads. Same list as TEF, because the
 *  rule is about the reader, not the format. */
const BANNED = /honn[êe]te|honn[êe]tet[ée]|malhonn[êe]te/i;

/**
 * Where a band sequence goes back down the ramp, as messages.
 *
 * Pure, and separate from the test that calls it, for the reason
 * `shouldAutoRepeat` was pulled out of a component effect: a rule that lives
 * only inside a `test()` can be proved to PASS on good input and never proved
 * to FIRE on bad. This one is the gate for the whole phase, so it is checked
 * both ways in paper-rules.test.ts.
 */
export function rampViolations(bands: string[]): string[] {
  const out: string[] = [];
  const at = (b: string) => BANDS.indexOf(b as Band);
  for (let i = 1; i < bands.length; i += 1) {
    if (at(bands[i]!) < at(bands[i - 1]!)) {
      out.push(`item ${i + 1} is ${bands[i]} after ${bands[i - 1]} — the ramp goes backwards`);
    }
  }
  return out;
}

/** Band counts against the blueprint's ramp, as messages. */
export function distributionViolations(bands: string[]): string[] {
  const got: Record<string, number> = {};
  for (const b of bands) got[b] = (got[b] ?? 0) + 1;
  const out: string[] = [];
  for (const band of BANDS) {
    const n = got[band] ?? 0;
    if (n !== RAMP[band]) out.push(`${band}: ${n} item(s), blueprint says ${RAMP[band]}`);
  }
  for (const b of Object.keys(got)) {
    if (!BANDS.includes(b as Band)) out.push(`${b}: not a band`);
  }
  return out;
}

/** Seconds a candidate needs per question once the audio has stopped: read it,
 *  weigh four options, answer. Deliberately modest, because this is a floor and
 *  not a recommendation. */
export const ANSWER_S_PER_ITEM = 8;

/**
 * Tasks whose clock is too short for their own contents, as messages.
 *
 * The clock and the parts were checked separately and never against each other.
 * `timingS` was compared to a blueprint constant, which it matched, while the
 * documents underneath it were extended from 1,163 words to 2,893 to meet the
 * length envelope. Both checks stayed green and the C1 section ended up with a
 * 375-second clock over 391 seconds of audio and reading windows: a candidate
 * could not have reached the last question, let alone answered it.
 *
 * A repeated document costs its duration again, which is why `playCount`
 * multiplies here.
 */
export type ClockedTask = {
  label?: string;
  level?: string;
  timingS?: number;
  parts?: {
    text?: string;
    durationS?: number;
    readWindowS?: number;
    playCount?: number;
    items?: readonly unknown[];
  }[];
};

export function clockShortfalls(tasks: readonly ClockedTask[]): string[] {
  const out: string[] = [];
  for (const t of tasks) {
    const parts = t.parts ?? [];
    if (!parts.length) continue;
    const audio = parts.reduce((n, p) => n + (p.durationS ?? 0) * (p.playCount ?? 1), 0);
    const reading = parts.reduce((n, p) => n + (p.readWindowS ?? 0), 0);
    const items = parts.reduce((n, p) => n + (p.items?.length ?? 0), 0);
    const need = audio + reading + items * ANSWER_S_PER_ITEM;
    const clock = t.timingS ?? 0;
    if (clock < need) {
      out.push(
        `${t.label}: ${clock}s on the clock, ${need}s needed ` +
          `(${audio}s audio + ${reading}s reading + ${items} question(s))`
      );
    }
  }
  return out;
}

/** Careful reading of an exam text, in words per minute, PER BAND.
 *
 *  A single figure was the first thing tried here and it was wrong in a way
 *  worth recording: at a flat 120 wpm the real C2 task came out with six
 *  seconds to spare, so the guard passed the very section it had been written
 *  for. A candidate does not read a C2 extract in free indirect style at the
 *  speed of an A1 price label, and pretending otherwise makes the check
 *  unable to fail exactly where the paper is hardest.
 *
 *  These are reading-for-answering rates, not skimming rates: the candidate
 *  goes back into the text, and above B2 the item is designed so that one pass
 *  is not enough. */
export const READ_WPM: Record<Band, number> = {
  a1: 160, a2: 150, b1: 130, b2: 110, c1: 95, c2: 85,
};

/** Seconds per reading question. Longer than the listening figure because the
 *  candidate goes back into the text to check, which is the thing a reading
 *  item is for. */
export const CE_ANSWER_S_PER_ITEM = 20;

/**
 * Reading tasks whose clock is too short for their own documents.
 *
 * The listening version of this check found a section with less time than its
 * own audio. Reading has no audio to measure against, which is exactly why it
 * needed its own: after the documents were extended to STANDARD-tcf §4, the C2
 * task had 6 seconds of headroom for a 418-word literary extract and three
 * items that turn on free indirect style, while A1 sat on 179 spare seconds for
 * 72 words. Both numbers satisfied the blueprint, which only constrains the
 * 3600-second total.
 */
export function readingClockShortfalls(tasks: readonly ClockedTask[]): string[] {
  const out: string[] = [];
  for (const t of tasks) {
    const parts = t.parts ?? [];
    if (!parts.length) continue;
    const words = parts.reduce(
      (n, p) => n + (p.text ?? '').split(/\s+/).filter(Boolean).length,
      0
    );
    if (!words) continue;
    const band = (t.level ?? 'b1') as Band;
    const wpm = READ_WPM[band] ?? READ_WPM.b1;
    const items = parts.reduce((n, p) => n + (p.items?.length ?? 0), 0);
    const need = Math.round((words / wpm) * 60) + items * CE_ANSWER_S_PER_ITEM;
    const clock = t.timingS ?? 0;
    if (clock < need) {
      out.push(
        `${t.label}: ${clock}s on the clock, ${need}s needed ` +
          `(${words} words at ${wpm} wpm + ${items} question(s))`
      );
    }
  }
  return out;
}

/**
 * Documents too short for their band, from the AUTHORED text alone.
 *
 * The measured version of this lives in check-speech-rate.ts and is the honest
 * one, because it reads the rendered clips. It is also the expensive one: the
 * audio has to exist first. TCF blanc-01 was authored, applied, rendered twice
 * and reviewed before anyone discovered that all 24 of its listening documents
 * ran between a third and two thirds of the length STANDARD-tcf §3 requires,
 * and that 21 of its 23 reading documents had the same defect.
 *
 * TEF's verifier has had this check since its own Section F shipped at half
 * length on four papers. TCF's lived only in a script somebody had to remember
 * to run, which is not a guard.
 *
 * LISTENING is a prediction and READING is arithmetic, so they fail
 * differently. Too few words is certain either way: no delivery makes 115 words
 * last two minutes. Too MANY listening words might still fit if the voice reads
 * slower than target, so that direction is left to the measured checker. A
 * reading document has no delivery to argue about and fails both ways.
 */
export function lengthShortfalls(co: readonly ExamTask[], ce: readonly ExamTask[]): string[] {
  const out: string[] = [];

  for (const t of co) {
    const band = (t.level ?? '') as RateBand;
    const rate = TCF_RATE[band];
    const envelope = TCF_LENGTH[band];
    if (!rate || !envelope) continue;
    for (const part of t.parts ?? []) {
      if (!part.text) continue;
      // Speaker labels are stage directions, not speech.
      const w = spokenTranscript(part.text).split(/\s+/).filter(Boolean).length;
      const impliedS = Math.round((w / rate) * 60);
      if (impliedS < envelope[0]) {
        out.push(
          `${t.label} / ${part.label}: ${w} words is about ${impliedS}s at ${rate} wpm, ` +
            `under ${band}'s ${envelope[0]}s floor`
        );
      }
    }
  }

  for (const t of ce) {
    const band = (t.level ?? '') as RateBand;
    const envelope = CE_WORDS[band];
    if (!envelope) continue;
    const [lo, hi] = envelope;
    for (const part of t.parts ?? []) {
      if (!part.text) continue;
      const w = part.text.split(/\s+/).filter(Boolean).length;
      if (w < lo || w > hi) {
        out.push(`${t.label} / ${part.label}: ${w} words, ${band}'s envelope is ${lo}-${hi}`);
      }
    }
  }

  return out;
}

export function tcfPaperRules(p: TcfPaperUnderTest): void {
  const n = p.name;
  const bandsOf = (tasks: ExamTask[]): string[] => tasks.flatMap((t) => itemsOf(t).map((i) => i.band ?? ''));

  for (const [epreuve, tasks] of [['CO', p.CO_TASKS], ['CE', p.CE_TASKS]] as const) {
    test(`${n}: ${epreuve} is 39 questions`, () => {
      strictEqual(tasks.reduce((a, t) => a + countOf(t), 0), 39);
    });

    test(`${n}: ${epreuve} carries a band on every single item`, () => {
      // The schema enforces this for tcf_canada, but the schema runs on write
      // and this runs on the source. An untagged item has no place on a ramp.
      const missing = bandsOf(tasks).filter((b) => !BANDS.includes(b as Band));
      strictEqual(missing.length, 0, `${missing.length} item(s) with no usable band`);
    });

    test(`${n}: ${epreuve} matches the blueprint's band distribution`, () => {
      deepStrictEqual(distributionViolations(bandsOf(tasks)), []);
    });

    test(`${n}: ${epreuve} NEVER goes back down the ramp`, () => {
      // The gate for this whole phase. A TCF score is read off WHERE the
      // candidate stopped, so a B2 item at position 7 is not a hard question
      // early — it is a broken instrument. Twenty correct at the bottom and
      // twenty scattered are different performances and must not be able to
      // produce the same estimate.
      //
      // Checked as monotonic rather than by position windows on purpose: the
      // windows follow from the distribution plus monotonicity, and asserting
      // both would fail twice for one cause and say less.
      deepStrictEqual(rampViolations(bandsOf(tasks)), []);
    });

    test(`${n}: ${epreuve} puts each band where the blueprint puts it`, () => {
      // Positions, not just counts. Given monotonicity this is implied, but it
      // is the form a reader can check against the blueprint table by eye.
      const seq = bandsOf(tasks);
      let at = 0;
      for (const band of BANDS) {
        for (let k = 0; k < RAMP[band]; k += 1, at += 1) {
          strictEqual(seq[at], band, `position ${at + 1} should be ${band}`);
        }
      }
    });
  }

  test(`${n}: CO plays once, everywhere, with no exceptions`, () => {
    // STANDARD-tcf §7 is absolute about this and TEF is not — block E there
    // plays twice. A rule that differs between formats is exactly the one a
    // shared verifier would have got wrong.
    for (const t of p.CO_TASKS) {
      for (const part of t.parts ?? []) {
        strictEqual(part.playCount, 1, `${t.label} / ${part.label}: playCount ${part.playCount}`);
      }
    }
  });

  test(`${n}: the open épreuves carry three tasks each`, () => {
    strictEqual(p.EE_TASKS.length, 3, 'EE is three tâches');
    strictEqual(p.EO_TASKS.length, 3, 'EO is three tâches');
  });

  test(`${n}: every task is dated against the blueprint it was written for`, () => {
    for (const t of p.TASKS) strictEqual(t.formatVersion, FORMAT_VERSION, `${t.id}`);
  });

  test(`${n}: every id belongs to this paper's variant`, () => {
    for (const t of p.TASKS) ok(t.id.includes(p.variant), `${t.id} is not a ${p.variant} id`);
    ok(p.PAPER.id.includes(p.variant), `${p.PAPER.id}`);
  });

  test(`${n}: no em dash and no banned word in anything a candidate reads`, () => {
    for (const s of candidateFacing(p.TASKS)) {
      ok(!s.includes('—'), `em dash in: ${s.slice(0, 70)}`);
      ok(!BANNED.test(s), `banned word in: ${s.slice(0, 70)}`);
    }
  });

  test(`${n}: no item repeats an option inside itself`, () => {
    for (const t of p.TASKS) {
      for (const it of itemsOf(t)) {
        const seen = new Set(it.opts.map((o) => o.trim().toLowerCase()));
        strictEqual(seen.size, it.opts.length, `${it.q}: a duplicated option`);
      }
    }
  });

  test(`${n}: every closed item carries a justification`, () => {
    for (const t of [...p.CO_TASKS, ...p.CE_TASKS]) {
      for (const it of itemsOf(t)) {
        ok((it.why ?? '').length > 0, `${it.q}: no why`);
      }
    }
  });

  test(`${n}: the answer key is scattered, not parked on one option`, () => {
    const items = [...p.CO_TASKS, ...p.CE_TASKS].flatMap(itemsOf);
    const counts: Record<number, number> = {};
    for (const it of items) counts[it.correct] = (counts[it.correct] ?? 0) + 1;
    const total = items.length;
    for (const [pos, k] of Object.entries(counts)) {
      ok(k / total <= 0.35, `position ${pos} holds ${k} of ${total} keys`);
    }
  });

  test(`${n}: every closed task routes a miss back to real corpus items`, () => {
    // The whole point of targetItemIds. A miss that routes nowhere teaches the
    // learner nothing, which is the defect the topic bank was just cleaned of.
    for (const t of [...p.CO_TASKS, ...p.CE_TASKS]) {
      ok((t.targetItemIds ?? []).length > 0, `${t.label}: no targetItemIds`);
    }
  });

  test(`${n}: every open task has a rubric and a model answer`, () => {
    for (const t of [...p.EE_TASKS, ...p.EO_TASKS]) {
      ok((t.rubric?.criteria ?? []).length > 0, `${t.label}: no rubric`);
      ok((t.modelAnswer ?? '').length > 0, `${t.label}: no model answer`);
    }
  });

  test(`${n}: no section clock is shorter than the audio it has to play`, () => {
    const bad = clockShortfalls(p.CO_TASKS);
    ok(bad.length === 0, bad.join('\n  '));
  });

  test(`${n}: no reading clock is shorter than the text it has to be read in`, () => {
    const bad = readingClockShortfalls(p.CE_TASKS);
    ok(bad.length === 0, bad.join('\n  '));
  });

  test(`${n}: every document is long enough for its band`, () => {
    const bad = lengthShortfalls(p.CO_TASKS, p.CE_TASKS);
    ok(bad.length === 0, bad.join('\n  '));
  });
}
