// Every B1 lesson shipped with its answers piled onto one slot. b1.09 sat at
// 75% on slot 1 across its binary checks, with a run of NINETEEN consecutive
// identical answers; b1.10 was 72% with a run of 13. A learner who always
// tapped the middle option cleared most of the gated act checks that control
// progress.
//
// Nothing caught it. The playbook asked for "no slot over 40% lesson-wide",
// but `validateDensity`'s only spread rule is `quiz-spread`, which inspects
// the quiz alone. Authors hit ~36% there, ticked the checklist line, and the
// missions drifted.
//
// Two things make this test measure what matters rather than what the old rule
// said:
//
//   1. THE QUIZ IS EXCLUDED. LessonRich re-shuffles quiz options on every
//      attempt (LessonRich.tsx, `shuffle(q.opts.length)`), so authored quiz
//      slots never reach a learner. MissionRich renders the authored order, so
//      missions and remediation drills are the only guessable surface.
//
//   2. IT MEASURES WITHIN EACH OPTION-COUNT CLASS. A two-option check is 50/50
//      by construction, so the old blanket 40% was unreachable for a binary-
//      heavy lesson no matter how it was arranged. The real defect is a class
//      that leans one way.
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

const OPT_KEYS = ['opts', 'options', 'choices', 'answers'];
/** A class this small cannot be balanced meaningfully; one item swings it. */
const MIN_CLASS = 20;
/** 50% is the floor for a binary. The slack absorbs items locked by prose. */
const MAX_SHARE = 0.55;
/** Three the same in a row is the most the authored order may repeat. */
const MAX_RUN = 3;

type Item = { n: number; correct: number };

function missionItems(L: any): Item[] {
  const items: Item[] = [];
  const walk = (n: any): void => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) { n.forEach(walk); return; }
    if (typeof n.correct === 'number') {
      const key = OPT_KEYS.find((k) => Array.isArray(n[k]));
      if (key) items.push({ n: n[key].length, correct: n.correct });
    }
    Object.values(n).forEach(walk);
  };
  for (const s of L.sections) if (s.type !== 'quiz') walk(s);
  for (const d of L.drills ?? []) walk(d);
  return items;
}

for (const [id, slug] of LESSONS) {
  test(`${id} ${slug}: answers are spread across the slots`, async () => {
    const mod: any = await import(`./data/b1/${slug}-lesson.ts`);
    const L = mod.lessonWithoutTask ? mod.lessonWithoutTask() : mod.LESSON;
    const items = missionItems(L);
    ok(items.length > 50, `${id}: only ${items.length} closed items found, the walker is probably broken`);

    for (const cls of [2, 3, 4]) {
      const inClass = items.filter((i) => i.n === cls);
      if (inClass.length < MIN_CLASS) continue;
      const dist = new Array(cls).fill(0);
      for (const i of inClass) dist[i.correct]++;
      const worst = Math.max(...dist);
      const share = worst / inClass.length;
      ok(
        share <= MAX_SHARE,
        `${id}: ${(share * 100).toFixed(0)}% of the ${cls}-option checks answer in one slot ` +
        `(${dist.join('/')} of ${inClass.length}, limit ${MAX_SHARE * 100}%). ` +
        `Permute the options and the correct index together; do not just flip indices.`,
      );
    }

    const seq = items.map((i) => i.correct);
    let cur = 1, longest = 1, at = 0;
    for (let i = 1; i < seq.length; i++) {
      if (seq[i] === seq[i - 1]) { cur++; if (cur > longest) { longest = cur; at = i; } } else cur = 1;
    }
    ok(
      longest <= MAX_RUN,
      `${id}: ${longest} identical answers in a row, ending at item ${at} (limit ${MAX_RUN}).`,
    );
  });
}
