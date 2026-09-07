// The trapDrill audio step's instruction line must be true on EVERY lesson that
// renders one, because it is rendered by the component and not authored.
//
// ── The bug this pins ──────────────────────────────────────────────────────
//
// `TrapAudioStep` in `components/MissionRich.tsx` printed a hardcoded line:
//
//     Écoutez la paire. Le R sonne, puis le R se tait.
//
// It was written for one screen and rendered on all of them. Measured
// 2026-08-16: 46 stepped trapDrill audio steps across 34 lessons, and NOT ONE
// of them teaches the French R. A learner working on politeness registers
// (a2.29), verb endings (a2.09) or preposition folds (a2.04) was told to listen
// for a consonant that is not in the exercise, in the first line of body text on
// the screen.
//
// It is the FIRST body text above the cards, so a learner reads it as the
// instruction. And every one of the 46 already renders its own authored step
// title directly above it, so the line is redundant as a heading and load-
// bearing only as an instruction.
//
// ── Why this test reads a component source ─────────────────────────────────
//
// There is no way to assert this from the seed: the string is not content. The
// defect class is "a component hardcodes copy that is only true for the lesson
// it was written for", and the only place that is visible is the source. This
// is deliberately narrow — it does not police the component's prose in general,
// it forbids naming a specific French sound in a line every lesson renders.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok } from 'node:assert';
import { test } from 'node:test';
import seedJson from './seed.json' with { type: 'json' };

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');

/** The body of `TrapAudioStep`, which is the function that renders the line.
 *  Scoped to it so a legitimate mention of a sound elsewhere in the file — a
 *  respelling, a comment on another component — does not fire. */
function trapAudioStepBody(): string {
  const start = SRC.indexOf('function TrapAudioStep');
  ok(start > -1, 'TrapAudioStep has been renamed; re-scope this test rather than deleting it');
  const next = SRC.indexOf('\nfunction ', start + 1);
  return SRC.slice(start, next > -1 ? next : undefined);
}

/** The JSX text nodes, with the comment block stripped. The fix's own comment
 *  quotes the offending sentence to explain it, and a check that cannot tell a
 *  comment from a rendered string would fire on the explanation. */
function renderedText(body: string): string {
  return body
    .replace(/\/\*[\s\S]*?\*\//g, ' ')  // block comments, including the JSX {/* */} ones
    .replace(/\/\/[^\n]*/g, ' ');       // line comments
}

const seed = seedJson as unknown as {
  lessons: Array<{ id: string; sections?: Array<Record<string, unknown>> }>;
};

test('the trapDrill audio step names no specific French sound', () => {
  const text = renderedText(trapAudioStepBody());
  // The exact regression, first.
  ok(!/Le R sonne/i.test(text), 'the hardcoded R line is back in TrapAudioStep');
  // And the class it belongs to: any line that tells every lesson in the
  // product to listen for one named consonant or vowel.
  for (const shape of [
    /\ble R\b(?!é)/,          // « le R », but not « le réflexe »: \b is ASCII-only
    /\ble son \[/i,
    /\bla consonne\b/i,
    /\bla voyelle\b/i,
  ]) {
    ok(!shape.test(text), `TrapAudioStep names a specific sound (${shape}) in a line every lesson renders`);
  }
});

test('MUST_NOT_FIRE: the fix\'s own explanatory comment is not the defect', () => {
  // The comment above the line quotes the old sentence on purpose. If the
  // stripper ever stops removing comments, this goes red and says why.
  const body = trapAudioStepBody();
  ok(/Le R sonne/.test(body), 'the comment explaining the old line has been deleted; keep the reason with the fix');
  ok(!/Le R sonne/.test(renderedText(body)), 'comment stripping has broken, so the guard above is testing the comment');
});

test('the audio step instruction is true of every lesson that renders one', () => {
  // The replacement claims two speeds. That is only safe while every authored
  // audio spec on a stepped trapDrill carries more than one, so assert it
  // rather than trusting the measurement that was true on the day.
  const text = renderedText(trapAudioStepBody());
  if (!/vitesse normale puis lentement/i.test(text)) return; // copy changed; nothing to uphold
  const thin: string[] = [];
  for (const l of seed.lessons) {
    for (const s of (l.sections ?? [])) {
      if (s.type !== 'trapDrill') continue;
      if (!((s.steps as Array<{ kind: string }> | undefined) ?? []).some((x) => x.kind === 'audio')) continue;
      const speeds = ((s.audio as { speeds?: number[] } | undefined)?.speeds ?? []);
      if (speeds.length < 2) thin.push(`${l.id}/${s.id}`);
    }
  }
  ok(thin.length === 0,
    `the audio step promises a normal and a slow reading, and ${thin.length} step(s) author fewer than two speeds: ${thin.join(', ')}`);
});

test('every stepped trapDrill audio step carries its own authored title', () => {
  // This is what makes a generic instruction line sufficient: the screen's
  // heading is authored per lesson. If a step ever ships without one, the
  // generic line becomes the only copy on the screen and that is too thin.
  const missing: string[] = [];
  for (const l of seed.lessons) {
    for (const s of (l.sections ?? [])) {
      if (s.type !== 'trapDrill') continue;
      const audio = ((s.steps as Array<{ kind: string; title?: string; label?: string }> | undefined) ?? [])
        .find((x) => x.kind === 'audio');
      if (!audio) continue;
      if (!audio.title && !audio.label) missing.push(`${l.id}/${s.id}`);
    }
  }
  ok(missing.length === 0, `audio step(s) with no authored title or label: ${missing.join(', ')}`);
});
