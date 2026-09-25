// NEVER put an `EN: ` tail on an answer.
//
// `Type.tsx` strips a trailing `EN: ...` from ANY string it draws when English
// is off (`stripEnTail`, components/Type.tsx). The `gloss` flag decides whether
// a whole line is hidden; it gives an answer no protection at all. So English
// written as an `EN:` tail ON AN ANSWER simply disappears in "Francais seul",
// and the learner is asked to pick or type something they can no longer read.
//
// `english.logic.ts` already states the doctrine in its header: "ANSWERS ARE NOT
// GLOSSES. A flashcard back, a quiz meaning or a glossary tap is the thing being
// asked for." Answers must therefore carry their English PLAINLY, never behind
// an `EN:` marker.
//
// All 14 lessons were clean when this was written (6,984 answer strings, zero
// tails). The automated guard for this was scheduled for plan 07 in wave 5,
// which is several waves after authoring resumes, so this test closes the gap
// now rather than later.
import { ok } from 'node:assert';
import { test } from 'node:test';

const LESSONS: [string, string][] = [
  ['b1.01', 'imparfait-formation'], ['b1.02', 'imparfait-usage'],
  ['b1.03', 'pc-imparfait'], ['b1.04', 'pc-imparfait-paires'],
  ['b1.05', 'futur-simple'], ['b1.06', 'futur-irregulier'],
  ['b1.07', 'futur-usage'], ['b1.08', 'conditionnel-present'],
  ['b1.09', 'politesse'], ['b1.10', 'si-clauses'], ['b1.11', 'qui-que'],
  ['b1.12', 'dont-ou'], ['b1.13', 'lequel-ce-qui'], ['b1.14', 'subjonctif-formation'],
];

/** Fields whose strings ARE the answer: what the learner picks, types, or is
 *  shown as the thing being asked for. */
const ANSWER_KEYS = ['opts', 'options', 'choices', 'answers', 'accept', 'back', 'backs', 'userEn', 'meaning', 'target'];

/** The same shape Type.tsx strips: whitespace (or start) then `EN: `. */
const EN_TAIL = /(^|\s)EN: /;

for (const [id, slug] of LESSONS) {
  test(`${id} ${slug}: no answer carries an EN: tail`, async () => {
    const mod: any = await import(`./data/b1/${slug}-lesson.ts`);
    const L = mod.lessonWithoutTask ? mod.lessonWithoutTask() : mod.LESSON;

    const hits: string[] = [];
    let checked = 0;
    const walk = (n: any, path: string): void => {
      if (!n || typeof n !== 'object') return;
      if (Array.isArray(n)) { n.forEach((v, i) => walk(v, `${path}[${i}]`)); return; }
      for (const [k, v] of Object.entries(n)) {
        if (ANSWER_KEYS.includes(k)) {
          const strs: string[] = typeof v === 'string'
            ? [v]
            : Array.isArray(v) ? (v.filter((x) => typeof x === 'string') as string[]) : [];
          for (const s of strs) {
            checked++;
            if (EN_TAIL.test(s)) hits.push(`${path}.${k}: ${JSON.stringify(s).slice(0, 100)}`);
          }
        }
        walk(v, `${path}.${k}`);
      }
    };
    for (const s of L.sections) walk(s, s.id);
    for (const d of L.drills ?? []) walk(d, d.id ?? 'drill');

    ok(checked > 100, `${id}: only ${checked} answer strings found, the walker is probably broken`);
    ok(
      hits.length === 0,
      `${id}: ${hits.length} answer${hits.length === 1 ? ' carries' : 's carry'} an EN: tail, which Type.tsx ` +
      `strips when English is off, so the learner cannot read them in "Francais seul". ` +
      `Put the English in plainly instead:\n  ${hits.slice(0, 6).join('\n  ')}`,
    );
  });
}
