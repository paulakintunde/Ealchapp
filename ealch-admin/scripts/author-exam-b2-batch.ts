// Content batch — the first B1/B2 content in the corpus, and the first real
// exam content of any kind. Closes the Phase 8 gap: "no exam task exists at
// a band with no upstream teaching content" required real B2 teaching
// material to exist BEFORE any exam task could be authored against it, and
// none did (the corpus topped out at a2). This script authors both, in the
// order the rule demands — content first, exam second — as one coherent set:
//
//   1. 15 B2 items (theme 'opinion'): the connector vocabulary a DELF B2
//      argumentative essay is built from (à mon avis, en revanche, par
//      conséquent, un avantage, un inconvénient, …). Every noun's gender is
//      cross-checked against gates/data/lexique-gender.csv (argument=m,
//      avantage=m, avis=m, conclusion=f, opinion=f, inconvénient=m — all
//      confirmed), not recalled from memory. IPA is a careful first pass and
//      should still be walked past the espeak-ng cross-check in
//      gates/check_ipa.py during review — that is what Gate H is for, and
//      exactly why this lands in_review rather than published.
//
//   2. One b2 Unit + Lesson ('Écrire un texte argumentatif'), tagged
//      skill: 'PE' and referencing all 15 items — this is the lesson
//      dueExamSkills() (ealch-v2/src/store/progress.logic.ts) resolves a
//      missed PE@b2 to. Without it, the remediation deep-link the whole
//      Phase 8 loop depends on would resolve to null.
//
//   3. One delf_b2 ExamPaper with two tasks:
//        - ce_mcq (reading comprehension): a short passage built FROM five
//          of the 15 items, three questions, targetItemIds pointing at
//          those five — a miss decomposes straight back into SRS review via
//          decomposeExamMiss. Deliberately CE, not CO: nothing in this app
//          produces exam audio yet (Phase 7's pipeline has no exam-content
//          timings), and a "listening" task that is secretly text would be
//          exactly the kind of dishonest surface this codebase's own rules
//          forbid elsewhere. When real audio exists, add a co_mcq sibling.
//        - pe_essay (the actual target): the DELF B2 staple, an opinion
//          essay on remote work, with a 4-criterion rubric and a real ~230-
//          word model answer. This is the task the AI grading pipeline
//          (grade-exam edge function) grades against, and the one a missed
//          attempt routes back to the Lesson above.
//
// EVERYTHING below lands `in_review`, not `published` — Gate H requires a
// human sign-off before any of this reaches a phone (CONTENT-AUTHORING-
// GUIDE.md §12; the open pe_essay task is 100%-review tier regardless, per
// reviewTier.ts's OPEN_EXAM_TASK_TYPES). generatedBy is 'llm', honestly: an
// AI drafted this batch, a human has not yet reviewed a word of it. Review
// at /admin/content/review, then /admin/content/exams for the tasks
// specifically, before publishing and running `pnpm content:publish`.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-exam-b2-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-exam-b2-batch.ts              apply, one transaction

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import {
  validateItem, validateLesson, validateUnit, validateExamTask, validateExamPaper,
  type Item, type Lesson, type Unit, type ExamTask, type ExamPaper,
} from '../../ealch-v2/src/content/schema.ts';

/* ─── 1. The 15 B2 items ──────────────────────────────────────────────────── */

const PHRASE_DRILLS: Item['drills'] = ['flashcard', 'review'];
const WORD_DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'review'];

const ITEMS: Item[] = [
  { id: 'fr.b2.opinion.001', kind: 'phrase', level: 'b2', theme: 'opinion', fr: 'à mon avis', en: 'in my opinion', ipa: '/a mɔ̃.n‿a.vi/', example: { fr: 'À mon avis, ce film est excellent.', en: 'In my opinion, this film is excellent.' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.002', kind: 'phrase', level: 'b2', theme: 'opinion', fr: 'il me semble que', en: 'it seems to me that', ipa: '/il mə sɑ̃bl kə/', example: { fr: 'Il me semble que cette solution est la meilleure.', en: 'It seems to me that this solution is the best one.' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.003', kind: 'phrase', level: 'b2', theme: 'opinion', fr: 'je suis convaincu que', en: 'I am convinced that', ipa: '/ʒə sɥi kɔ̃.vɛ̃.ky kə/', example: { fr: 'Je suis convaincu que le télétravail a de l’avenir.', en: 'I am convinced that remote work has a future.' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.004', kind: 'phrase', level: 'b2', theme: 'opinion', fr: 'en revanche', en: 'on the other hand', ipa: '/ɑ̃ ʁə.vɑ̃ʃ/', example: { fr: 'En revanche, le service était lent.', en: 'On the other hand, the service was slow.' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.005', kind: 'phrase', level: 'b2', theme: 'opinion', fr: 'de plus', en: 'moreover', ipa: '/də ply/', example: { fr: 'De plus, ce quartier est très bien desservi.', en: 'Moreover, this neighborhood is very well served by transport.' }, tags: [], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.006', kind: 'phrase', level: 'b2', theme: 'opinion', fr: 'par conséquent', en: 'consequently', ipa: '/paʁ kɔ̃.se.kɑ̃/', example: { fr: 'Par conséquent, nous avons annulé la réservation.', en: 'Consequently, we cancelled the reservation.' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.007', kind: 'word', level: 'b2', theme: 'opinion', fr: 'néanmoins', en: 'nevertheless', ipa: '/ne.ɑ̃.mwɛ̃/', example: { fr: 'Néanmoins, il reste des progrès à faire.', en: 'Nevertheless, there is still progress to be made.' }, tags: ['nasal'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.008', kind: 'phrase', level: 'b2', theme: 'opinion', fr: 'il est vrai que', en: 'it is true that', ipa: '/il ɛ vʁɛ kə/', example: { fr: 'Il est vrai que la situation est complexe.', en: 'It is true that the situation is complex.' }, tags: [], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.009', kind: 'phrase', level: 'b2', theme: 'opinion', fr: "d'une part, d'autre part", en: 'on one hand, on the other hand', ipa: '/dyn paʁ dotʁ paʁ/', example: { fr: "D'une part le prix est élevé, d'autre part la qualité est excellente.", en: 'On one hand the price is high, on the other hand the quality is excellent.' }, tags: [], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.010', kind: 'word', level: 'b2', theme: 'opinion', fr: 'convaincre', en: 'to convince', ipa: '/kɔ̃.vɛ̃kʁ/', example: { fr: 'Son argument a fini par me convaincre.', en: 'Her argument ended up convincing me.' }, tags: ['nasal'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.011', kind: 'word', level: 'b2', theme: 'opinion', fr: 'un argument', en: 'an argument', ipa: '/œ̃.n‿aʁ.ɡy.mɑ̃/', gender: 'm', example: { fr: 'Voici un argument en faveur de cette idée.', en: 'Here is an argument in favor of this idea.' }, tags: ['nasal'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.012', kind: 'phrase', level: 'b2', theme: 'opinion', fr: "s'opposer à", en: 'to be opposed to', ipa: '/sɔ.po.ze a/', example: { fr: 'Beaucoup de gens s’opposent à ce projet.', en: 'Many people are opposed to this project.' }, tags: [], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.013', kind: 'phrase', level: 'b2', theme: 'opinion', fr: 'en conclusion', en: 'in conclusion', ipa: '/ɑ̃ kɔ̃.kly.zjɔ̃/', example: { fr: 'En conclusion, cette réforme me semble nécessaire.', en: 'In conclusion, this reform seems necessary to me.' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.014', kind: 'word', level: 'b2', theme: 'opinion', fr: 'un inconvénient', en: 'a drawback', ipa: '/œ̃.n‿ɛ̃.kɔ̃.ve.njɑ̃/', gender: 'm', example: { fr: 'Le principal inconvénient, c’est le coût.', en: 'The main drawback is the cost.' }, tags: ['nasal'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.b2.opinion.015', kind: 'word', level: 'b2', theme: 'opinion', fr: 'un avantage', en: 'an advantage', ipa: '/œ̃.n‿a.vɑ̃.taʒ/', gender: 'm', example: { fr: 'La flexibilité est un avantage réel.', en: 'Flexibility is a real advantage.' }, tags: ['nasal'], drills: WORD_DRILLS, audioRef: null, version: 1 },
];

/* ─── 2. The b2 Unit + Lesson ─────────────────────────────────────────────── */

const UNIT: Unit = {
  id: 'b2.01',
  seq: 1,
  title: 'Expression écrite B2',
  sub: "Argumenter à l'écrit",
  lessonIds: ['b2.01.l1'],
};

const LESSON: Lesson = {
  id: 'b2.01.l1',
  unitId: 'b2.01',
  seq: 1,
  title: 'Écrire un texte argumentatif',
  level: 'b2',
  tag: 'B2 · EXPRESSION ÉCRITE',
  intro: 'Structurez une opinion en français avec des arguments, des exemples et les bons connecteurs logiques.',
  sections: [
    {
      type: 'teach',
      title: 'Structurer un texte argumentatif',
      body: "Un texte argumentatif au niveau B2 suit une structure claire : une introduction qui présente le sujet et votre opinion, un développement avec au moins deux arguments illustrés d'exemples concrets, et une conclusion qui résume votre position. Les connecteurs logiques (à mon avis, en revanche, par conséquent…) relient vos idées et rendent le texte cohérent.",
    },
    {
      type: 'examples',
      title: 'Connecteurs en contexte',
      examples: [
        { fr: 'À mon avis, ce film est excellent.', en: 'In my opinion, this film is excellent.' },
        { fr: 'En revanche, le service était lent.', en: 'On the other hand, the service was slow.' },
        { fr: 'Par conséquent, nous avons annulé la réservation.', en: 'Consequently, we cancelled the reservation.' },
      ],
    },
    {
      type: 'practice',
      title: 'Vocabulaire de l’argumentation',
      skill: 'write',
      itemIds: ITEMS.map((i) => i.id),
    },
  ],
  itemIds: ITEMS.map((i) => i.id),
  version: 1,
  skill: 'PE',
};

/* ─── 3. The delf_b2 ExamPaper: ce_mcq + pe_essay ────────────────────────── */

const CE_PASSAGE =
  "Le télétravail s'est beaucoup développé ces dernières années. À mon avis, il présente plusieurs avantages : moins de temps perdu dans les transports et plus de flexibilité. En revanche, il existe aussi des inconvénients, comme l'isolement de certains salariés. Par conséquent, de nombreuses entreprises proposent aujourd'hui un modèle hybride, qui combine les deux.";

const CE_TASK: ExamTask = {
  id: 'exam.delf_b2.blanc-01.ce_mcq.001',
  format: 'delf_b2',
  variant: 'blanc-01',
  taskType: 'ce_mcq',
  skill: 'CE',
  level: 'b2',
  formatVersion: 'delf-2020.2',
  prompt: CE_PASSAGE,
  items: [
    { q: "D'après le texte, quel est un avantage du télétravail mentionné ?", opts: ['Plus de flexibilité', 'Un salaire plus élevé', 'Moins de réunions'], correct: 0 },
    { q: 'Quel inconvénient du télétravail est mentionné dans le texte ?', opts: ['Le coût du matériel', 'L’isolement de certains salariés', 'La difficulté à trouver un emploi'], correct: 1 },
    { q: 'Que proposent de nombreuses entreprises aujourd’hui, selon le texte ?', opts: ['Un modèle entièrement à distance', 'Un modèle hybride', 'Un retour complet au bureau'], correct: 1 },
  ],
  timingS: 600,
  // The five connectors the passage is built from — a miss reviews exactly
  // these, via decomposeExamMiss.
  targetItemIds: ['fr.b2.opinion.001', 'fr.b2.opinion.004', 'fr.b2.opinion.006', 'fr.b2.opinion.014', 'fr.b2.opinion.015'],
};

const PE_MODEL_ANSWER =
  "À mon avis, le télétravail est globalement bénéfique pour la société, même s'il comporte certaines limites.\n\n" +
  "D'une part, il présente de nombreux avantages. Tout d'abord, il permet de réduire le temps perdu dans les transports, ce qui améliore la qualité de vie des salariés. Par exemple, une personne qui passait deux heures par jour dans les transports peut désormais consacrer ce temps à sa famille ou à des loisirs. De plus, le télétravail offre une plus grande flexibilité dans l'organisation de la journée, ce qui convient particulièrement aux parents.\n\n" +
  "D'autre part, il est vrai que le télétravail présente aussi des inconvénients. En revanche, travailler seul chez soi peut isoler certains employés et rendre la communication avec l'équipe plus difficile. Il me semble que ce risque est réel, surtout pour les nouveaux employés qui ont besoin d'un contact régulier avec leurs collègues.\n\n" +
  "Par conséquent, je pense qu'un modèle hybride, qui combine télétravail et présence au bureau, est la meilleure solution. En conclusion, le télétravail, bien encadré, représente un progrès pour la société, à condition de ne pas négliger le lien social.";

const PE_TASK: ExamTask = {
  id: 'exam.delf_b2.blanc-01.pe_essay.001',
  format: 'delf_b2',
  variant: 'blanc-01',
  taskType: 'pe_essay',
  skill: 'PE',
  level: 'b2',
  formatVersion: 'delf-2020.2',
  prompt: "Vous pensez que le télétravail est bénéfique pour la société. Écrivez un texte argumentatif d'environ 250 mots pour exprimer votre opinion, en donnant au moins deux arguments et un exemple. Utilisez des connecteurs logiques (à mon avis, en revanche, par conséquent, etc.).",
  rubric: {
    criteria: [
      { key: 'coherence', label: 'Cohérence et structure', maxPoints: 5, descriptors: ['Introduction, développement et conclusion clairement organisés', 'Connecteurs logiques utilisés à bon escient'] },
      { key: 'arguments', label: 'Qualité des arguments', maxPoints: 5, descriptors: ['Au moins deux arguments pertinents', 'Un exemple concret pour illustrer le propos'] },
      { key: 'lexique', label: 'Richesse du vocabulaire', maxPoints: 5, descriptors: ["Vocabulaire varié et adapté au registre", "Emploi correct des expressions d'opinion"] },
      { key: 'grammaire', label: 'Correction grammaticale', maxPoints: 5, descriptors: ['Peu d’erreurs de grammaire ou de conjugaison', 'Accords corrects (genre, nombre)'] },
    ],
  },
  modelAnswer: PE_MODEL_ANSWER,
  examinerNotes: ['La correction est assistée par IA, ancrée sur cette grille et cette réponse modèle — voir la fonction grade-exam.', 'Le résultat doit toujours être présenté comme une estimation d’entraînement, jamais comme un score équivalent au score officiel.'],
  timingS: 2700,
};

// TWO sections, not four, and therefore NOT a valid paper: validateExamPaper
// requires all four épreuves (CO, CE, PE, PO) and this batch only ever authored
// reading and writing. That is why the validation below tolerates it, and why
// the row stays in_review — the publish pipeline reads only 'published' rows,
// so an incomplete paper can never reach a candidate. Phase E10 authors the
// listening and speaking sections and completes it.
const PAPER: ExamPaper = {
  id: 'paper.delf_b2.blanc-01.1',
  format: 'delf_b2',
  variant: 'blanc-01',
  paperNo: 1,
  sections: [
    { skill: 'CE', taskIds: [CE_TASK.id], timingS: 3600, blueprintId: 'delf-b2-2026.01-draft' },
    { skill: 'PE', taskIds: [PE_TASK.id], timingS: 3600, blueprintId: 'delf-b2-2026.01-draft' },
  ],
};

/* ─── Apply ──────────────────────────────────────────────────────────────── */

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  const issues = [
    ...ITEMS.flatMap((it) => validateItem(it, it.id)),
    ...validateUnit(UNIT, UNIT.id),
    ...validateLesson(LESSON, LESSON.id),
    ...validateExamTask(CE_TASK, CE_TASK.id),
    ...validateExamTask(PE_TASK, PE_TASK.id),
    // Expected to report the missing CO and PO épreuves; see the note on PAPER.
    // Filtered rather than skipped, so any OTHER defect still fails the batch.
    ...validateExamPaper(PAPER, PAPER.id).filter((i) => !/missing an épreuve/.test(i.message)),
  ];
  if (issues.length) die(`content invalid:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

  const itemIds = ITEMS.map((i) => i.id);
  const dupes = itemIds.filter((id, i) => itemIds.indexOf(id) !== i);
  if (dupes.length) die(`duplicate item ids in batch: ${[...new Set(dupes)].join(', ')}`);

  console.log(`\n  ${ITEMS.length} b2 items (theme 'opinion') + 1 unit + 1 lesson (skill PE) + 1 exam paper (2 of 4 épreuves: ce_mcq, pe_essay)`);
  console.log('  landing status: in_review — Gate H requires a human sign-off before publish');

  if (DRY_RUN) {
    console.log('\n✓ dry run — all content valid, nothing written.\n');
    return;
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    await client.query('begin');

    for (const it of ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, gender, example, notes, tags, drills, audio_ref, version, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9::jsonb,$10,$11,$12,null,$13,'in_review','llm')
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, gender=excluded.gender, example=excluded.example, notes=excluded.notes,
           tags=excluded.tags, drills=excluded.drills, version=excluded.version`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version,
        ]
      );
    }

    // content_units rows (Unit, Lesson) are keyed by an internal uuid, not the
    // app-facing id embedded in `body` — see the note on contentUnits.id in
    // src/db/schema.ts. Upsert by slug (unique), not id, so re-running this
    // script updates the same row instead of accumulating duplicates.
    await client.query(
      `insert into content_units (slug, title, kind, level, status, body, version, generated_by)
       values ($1,$2,'curriculum_unit',$3,'in_review',$4::jsonb,1,'llm')
       on conflict (slug) do update set title=excluded.title, level=excluded.level, body=excluded.body`,
      ['b2-01-expression-ecrite', UNIT.title, 'b2', JSON.stringify(UNIT)]
    );
    await client.query(
      `insert into content_units (slug, title, kind, level, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'in_review',$4::jsonb,1,'llm')
       on conflict (slug) do update set title=excluded.title, level=excluded.level, body=excluded.body`,
      ['b2-01-l1-texte-argumentatif', LESSON.title, 'b2', JSON.stringify(LESSON)]
    );

    for (const task of [CE_TASK, PE_TASK]) {
      await client.query(
        `insert into content_exam_tasks
           (id, format, variant, task_type, skill, level, format_version, prompt, items, rubric, model_answer,
            examiner_notes, timing_s, target_item_ids, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9::jsonb,$10::jsonb,$11,$12,$13,$14,'in_review','llm')
         on conflict (id) do update set
           prompt=excluded.prompt, items=excluded.items, rubric=excluded.rubric, model_answer=excluded.model_answer,
           examiner_notes=excluded.examiner_notes, timing_s=excluded.timing_s, target_item_ids=excluded.target_item_ids`,
        [
          task.id, task.format, task.variant, task.taskType, task.skill, task.level, task.formatVersion, task.prompt,
          task.items ? JSON.stringify(task.items) : null, task.rubric ? JSON.stringify(task.rubric) : null,
          task.modelAnswer ?? null, task.examinerNotes ?? [], task.timingS, task.targetItemIds ?? [],
        ]
      );
    }
    await client.query(
      `insert into content_exam_papers (id, format, variant, paper_no, sections, status)
       values ($1,$2,$3,$4,$5::jsonb,'in_review')
       on conflict (id) do update set sections=excluded.sections`,
      [PAPER.id, PAPER.format, PAPER.variant, PAPER.paperNo, JSON.stringify(PAPER.sections)]
    );

    await client.query('commit');
    console.log(
      `\n✓ batch applied: ${ITEMS.length} items, 1 unit, 1 lesson, 1 exam paper (2 of 4 épreuves) — all in_review.\n` +
        '  Review at /admin/content/review, then /admin/content/exams for the exam tasks specifically.\n' +
        '  After publishing, run pnpm content:publish to ship it OTA.\n'
    );
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
