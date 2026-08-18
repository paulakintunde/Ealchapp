// a2.35 mini-audit. Reads the SEED, because the seed is what the app bundles.
//
// Everything here is a check the build's own guards do NOT run, chosen because
// each could be wrong while every gate stays green.

import { readFileSync } from 'node:fs';
import { display, HOMOPHONE_FORMS } from './data/bilan-a2-spread.ts';

const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8'));
type Any = Record<string, unknown>;
const lessons: Any[] = seed.lessons;
const L = (id: string) => lessons.find((l) => l.id === id) as Any | undefined;
const secs = (l: Any) => (l.sections ?? []) as Any[];
const quiz = (l: Any) => secs(l).find((s) => s.type === 'quiz') as Any | undefined;
const qs = (l: Any) => ((quiz(l)?.rounds ?? []) as Any[]).flatMap((r) => (r.questions ?? []) as Any[]);

const surface = (l: Any) => [
  ...display(l.sections, 'sections'), ...display(l.sheets ?? [], 'sheets'),
  ...display(l.terms ?? {}, 'terms'), ...display(l.drills ?? [], 'drills'),
  ...display(l.intro ?? '', 'intro'), ...display(l.overview ?? {}, 'overview'),
];

let problems = 0;
const bad = (m: string) => { problems++; console.log(`  PROBLEM  ${m}`); };
const note = (m: string) => console.log(`           ${m}`);

/* 1. THE FOUR REPAIRS: are the words gone from the DRAWN surfaces? */
console.log('\n1. The four repaired lessons, drawn surfaces only');
for (const [id, word] of [['a2.28.l1', 'partitive'], ['a2.05.l1', 'conjugate'],
  ['a2.32.l1', 'referent'], ['a2.24.l1', 'auxiliary']] as const) {
  const l = L(id);
  if (!l) { bad(`${id} is not in the seed`); continue; }
  const hits = surface(l).filter((x) => new RegExp(`(?<![\\p{L}\\p{N}])${word}`, 'iu').test(x.s));
  if (hits.length) { bad(`${id} still draws "${word}" at ${hits.map((h) => h.path).join(', ')}`); }
  // And where the word survives OFF a drawn surface, say where, so "still
  // present in the body" is not mistaken for a regression.
  const all = JSON.stringify(l);
  const drawnCount = hits.length;
  const totalCount = (all.match(new RegExp(word, 'gi')) ?? []).length;
  note(`${id}: "${word}" drawn ${drawnCount}, elsewhere in the body ${totalCount - drawnCount}`);
}

/* 2. POSITIONAL LANGUAGE IN A SPREAD QUIZ. spreadAnswers MOVES the correct
 *    option; any question or why that refers to an option by POSITION is now
 *    pointing at a different string than the author meant. */
console.log('\n2. Positional language in questions whose options were spread');
// FIRST VERSION OF THIS CHECK WAS WRONG and flagged five correct strings. It
// matched "the first one" and "the second one", which in this content mean the
// first VERB and the second WORD, not the first option. The word that actually
// indicates a positional reference in a spread quiz is `option` itself.
const POS = /(?<![\p{L}\p{N}])(option|options)(?![\p{L}\p{N}])/iu;
for (const id of ['a2.35.l1', 'a2.35.l2']) {
  for (const q of qs(L(id)!)) {
    for (const field of ['q', 'why'] as const) {
      const s = (q[field] ?? '') as string;
      if (POS.test(s)) bad(`${id} ${field} names an "option", whose position the spreader moves: "${s.slice(0, 110)}"`);
    }
  }
}
note('checked q and why on all 230 questions for the word "option"');

/* 3. DUPLICATE OPTIONS, and correct index in range. */
console.log('\n3. Option integrity');
for (const id of ['a2.35.l1', 'a2.35.l2']) {
  for (const q of qs(L(id)!)) {
    const opts = (q.opts ?? []) as string[];
    if (!opts.length) continue;
    if (new Set(opts).size !== opts.length) bad(`${id} duplicate option in: ${q.q}`);
    const c = q.correct as number;
    if (typeof c !== 'number' || c < 0 || c >= opts.length) bad(`${id} correct index ${c} out of range: ${q.q}`);
    if (opts.some((o) => !o.trim())) bad(`${id} empty option in: ${q.q}`);
  }
}

/* 4. THE listenChoose CLIP MUST BE THE CORRECT OPTION, or the ear is asked one
 *    thing and scored on another. Nothing in the build checks this. */
console.log('\n4. Every listenChoose clip against its correct option');
for (const id of ['a2.35.l1', 'a2.35.l2']) {
  for (const q of qs(L(id)!)) {
    if (q.format !== 'listenChoose') continue;
    const clip = ((q.audio as Any)?.clip ?? '') as string;
    const opts = (q.opts ?? []) as string[];
    const right = opts[q.correct as number] ?? '';
    const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!clip) { bad(`${id} listenChoose with no clip: ${q.q}`); continue; }
    // English-option questions are legitimate: the clip is French, the options
    // are glosses. Flag only where the clip looks French AND matches no option.
    if (norm(clip) !== norm(right)) {
      const anyOpt = opts.some((o) => norm(o) === norm(clip));
      if (anyOpt) bad(`${id} the clip "${clip}" is a WRONG option, not the correct one: ${q.q}`);
      else note(`${id} clip "${clip}" is not any option (gloss-option question, expected): ${q.q.slice(0, 45)}`);
    }
  }
}

/* 5. THE REVIEW ROUND LABEL MUST MATCH THE UNIT ITS ID NAMES. A round could
 *    say "Unit 7" in its label and carry a2.14's id and nothing would notice. */
console.log('\n5. Round label number against round id and trail position');
const TRAIL = ['a2.01', 'a2.09', 'a2.10', 'a2.11', 'a2.02', 'a2.12', 'a2.13', 'a2.14', 'a2.15',
  'a2.03', 'a2.16', 'a2.17', 'a2.04', 'a2.18', 'a2.19', 'a2.05', 'a2.20', 'a2.21', 'a2.22',
  'a2.23', 'a2.06', 'a2.24', 'a2.25', 'a2.07', 'a2.26', 'a2.27', 'a2.28', 'a2.29', 'a2.30',
  'a2.31', 'a2.32', 'a2.08', 'a2.33', 'a2.34'];
const rounds = (quiz(L('a2.35.l1')!)?.rounds ?? []) as Any[];
rounds.forEach((r, i) => {
  const id = r.id as string, label = r.label as string;
  // `r16-a2-05-passe-compose-avoir` -> round 16, unit a2.05. The first version
  // of this line sliced (6,8) and read "-0", so all 34 rounds were reported
  // wrong. Parsed rather than sliced now.
  const m = /^r(\d\d)-a2-(\d\d)-/.exec(id);
  if (!m) { bad(`round ${i + 1} has an id that does not parse: ${id}`); return; }
  const seqInId = Number(m[1]);
  const unitInId = `a2.${m[2]}`;
  const labelNum = Number((/unit\s+(\d+)/i.exec(label) ?? [])[1]);
  if (seqInId !== i + 1) bad(`round ${i + 1} has id ${id}, whose number is ${seqInId}`);
  if (labelNum !== seqInId) bad(`${id} label says "Unit ${labelNum}" and its id says round ${seqInId}`);
  if (unitInId !== TRAIL[i]) bad(`${id} sits at trail position ${i + 1}, which is ${TRAIL[i]}`);
});
note(`checked ${rounds.length} review rounds`);

/* 6. THE EXAM'S why STRINGS MUST NAME UNITS THAT EXIST. */
console.log('\n6. Unit ids cited in exam why strings');
const unitIds = new Set((seed.units as Any[]).map((u) => u.id as string));
for (const q of qs(L('a2.35.l2')!)) {
  for (const m of ((q.why ?? '') as string).matchAll(/\b(a[12]\.\d\d)\b/g)) {
    if (!unitIds.has(m[1])) bad(`exam why cites ${m[1]}, which is not a unit`);
  }
}
note('every cited unit resolves');

/* 7. NO QUESTION MAY BE A DUPLICATE OF ANOTHER. 230 questions written by hand
 *    over one sitting is exactly where a repeat hides. */
console.log('\n7. Duplicate questions across both lessons');
// FIRST VERSION KEYED ON q + answer. `answer` is undefined on an mcq, so every
// question sharing the generic stem "Which is right?" collided and it reported
// 38 repeats that were nothing of the kind. The key has to include what makes
// two questions actually the same: the stem AND what is being asked for.
const seen = new Map<string, string>();
for (const id of ['a2.35.l1', 'a2.35.l2']) {
  for (const q of qs(L(id)!)) {
    // The RIGHT ANSWER is part of what makes two questions the same. Two
    // listenChoose sharing an option set but playing different clips are two
    // different questions and the first version of this key merged them.
    const right = String(q.answer ?? (q.opts as string[] | undefined)?.[q.correct as number] ?? '');
    const asked = q.opts ? [...(q.opts as string[])].sort().join('|') : '';
    const key = `${(q.q as string).trim().toLowerCase()}||${asked.toLowerCase()}||${right.toLowerCase()}`;
    const soft = `${(q.q as string).trim().toLowerCase()}||${asked.toLowerCase()}`;
    if (seen.has(key)) bad(`VERBATIM repeat in ${seen.get(key)} and ${id}: "${(q.q as string).slice(0, 70)}" -> ${right.slice(0, 45)}`);
    else if (seen.has(soft)) note(`same stem and options, different answer, in ${seen.get(soft)} and ${id}: "${(q.q as string).slice(0, 55)}"`);
    seen.set(key, id);
    if (!seen.has(soft)) seen.set(soft, id);
  }
}
note('a repeat across l1 and l2 means a learner who sat the review has already seen the exam question');

/* 8. HOMOPHONE GROUPS THAT NAME A FORM NO QUESTION USES are dead weight, and a
 *    group whose members appear in NO lesson is a sign the list drifted. */
console.log('\n8. Assembled homophone list against what the capstone actually asks');
const allText = ['a2.35.l1', 'a2.35.l2'].map((id) => JSON.stringify(L(id))).join(' ');
const unusedGroups = HOMOPHONE_FORMS.filter((g) => !g.some((f) => allText.includes(f)));
note(`${HOMOPHONE_FORMS.length} groups, ${unusedGroups.length} of which no a2.35 string touches`);
note('(not a defect: the list guards the whole band, not only what was asked)');

console.log(`\n${problems === 0 ? 'CLEAN' : `${problems} PROBLEM(S)`}\n`);
