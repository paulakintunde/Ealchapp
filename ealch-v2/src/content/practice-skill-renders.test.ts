// `practice.skill` is routed, and every value it can take reaches a renderer.
//
// ── The defect this pins (UDL 11) ───────────────────────────────────────────
//
// PRACTICE_SKILLS has four values. The renderer had one branch. Every practice
// section, whatever skill it declared, drew the same Voice Flash speaking pass:
// `s.skill` was authored, schema-validated, and read by nothing. The section
// that made it visible is titled "The bon/bonne trap, in writing" (frSub "Bon
// ou bonne, par écrit") and asked the learner to say it out loud.
//
// ── Why the guard is shaped this way ────────────────────────────────────────
//
// UDL 11 is explicit about it, and the shape is the whole point: the test must
// ENUMERATE from PRACTICE_SKILLS and assert against the component source. A
// test that checks a hardcoded list of four strings against itself passes
// forever and proves nothing — including on the day someone adds a fifth skill.
//
// It also greps the renderer rather than importing it, because of the standing
// house lesson (`ealch-authored-but-unrendered`): a component can be written,
// typechecked, device-proven, and imported by nobody. The import chain is what
// is actually asserted here, not the existence of a function.
import { test } from 'node:test';
import { ok, strictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { PRACTICE_SKILLS } from './schema.ts';
import seed from './seed.json' with { type: 'json' };
import type { Lesson, LessonSection } from './schema.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(HERE, '..');
const SECTION = readFileSync(join(SRC, 'components', 'LessonSection.tsx'), 'utf8');
const RICH = readFileSync(join(SRC, 'components', 'LessonRich.tsx'), 'utf8');

/** The surface each skill routes to, read out of the switch rather than
 *  restated. A skill missing from here has no branch. */
function surfaceFor(skill: string): string | null {
  // The routing line, e.g. `s.skill === 'write' ? PracticeWriteView : PracticeVFView`.
  const routed = new RegExp(`s\\.skill\\s*===\\s*'${skill}'\\s*\\?\\s*(\\w+)\\s*:\\s*(\\w+)`).exec(SECTION);
  if (routed) return routed[1];
  // No branch of its own means it takes the default arm — which is a real
  // answer only while that default is itself a rendering component.
  const fallback = /s\.skill\s*===\s*'\w+'\s*\?\s*\w+\s*:\s*(\w+)/.exec(SECTION);
  return fallback ? fallback[1] : null;
}

test('every PRACTICE_SKILLS value reaches a component, and that component is imported', () => {
  ok(PRACTICE_SKILLS.length >= 4, 'the enum shrank; this guard was written against four skills');

  for (const skill of PRACTICE_SKILLS) {
    const surface = surfaceFor(skill);
    ok(surface, `practice skill '${skill}' routes to nothing in LessonSection.tsx`);

    // Rendered by something that exists...
    ok(
      new RegExp(`export function ${surface}\\b`).test(RICH),
      `${surface} (the surface for '${skill}') is not exported from LessonRich.tsx`,
    );
    // ...and, the part that actually bites, reached from the switch.
    ok(
      new RegExp(`^\\s*${surface},\\s*$`, 'm').test(SECTION),
      `${surface} is never imported by LessonSection.tsx, so '${skill}' renders nothing`,
    );
  }
});

test("'write' routes somewhere different from 'speak', or the field is decorative again", () => {
  // The precise regression: all four collapsing back onto one surface. This is
  // the assertion that would have failed on the original code.
  const write = surfaceFor('write');
  const speak = surfaceFor('speak');
  ok(write && speak, 'both skills must route');
  ok(write !== speak, `'write' and 'speak' both render ${write}; skill is decorative again`);
});

test('the writing surface produces, grades, and does not leak the answer', () => {
  const body = RICH.slice(RICH.indexOf('export function PracticeWriteView'));
  const view = body.slice(0, body.indexOf('/* ─── Quiz deck'));
  ok(view.length > 500, 'PracticeWriteView not found in LessonRich.tsx');

  // A writing surface a learner cannot write into is the defect it replaced.
  ok(/<TextInput/.test(view), 'the writing surface draws no TextInput');
  // The SRS join UDL 11 requires: a production surface that does not feed
  // review is worth less than the one it replaced.
  ok(/onGrade\(item\.id,/.test(view), 'the writing surface never calls onGrade');
  // The prompt is the English; the French is what the learner produces. If the
  // card showed item.fr before the check, there would be nothing to write.
  const beforeCheck = view.slice(0, view.indexOf("phase === 'idle' ? ("));
  ok(!/\{item\.fr\}/.test(beforeCheck), 'the writing surface shows the French before the answer is in');
});

test('the one authored `write` section is the one that asked for writing', () => {
  // Pinned, not just counted. The migration decision was that routing is safe
  // BECAUSE this section's own title asks for writing — if a different section
  // arrives at this skill, that reasoning needs redoing rather than inheriting.
  const lessons = (seed as unknown as { lessons: Lesson[] }).lessons;
  const found: { lesson: string; title: string }[] = [];
  for (const l of lessons) {
    for (const sec of (l.sections ?? []) as LessonSection[]) {
      if (sec.type === 'practice' && (sec as { skill?: string }).skill === 'write') {
        found.push({ lesson: l.id, title: sec.title });
      }
    }
  }
  strictEqual(found.length, 1, `expected one authored 'write' section, found ${found.length}: ${JSON.stringify(found)}`);
  ok(
    /writing|écrit/i.test(found[0].title),
    `${found[0].lesson} routes "${found[0].title}" to the writing surface, but its title does not ask for writing`,
  );
});
