// Content Batch — den lesson overviews + per-mission French sub-lines
// (spec docs/superpowers/specs/2026-07-30-refresher-lesson-overview-design.md).
//
// Seed-direct: reads ealch-v2/src/content/seed.json, merges each lesson's
// `overview` block and per-section `frSub`, bumps the lesson version, runs
// validateLesson on every touched lesson, and writes the file back. No DB, no
// env, no publish. Idempotent: re-running produces the same bytes (version
// bumps only when the merge actually changes the lesson).
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-lesson-overviews.ts --dry-run    validate + report
//   pnpm tsx scripts/author-lesson-overviews.ts              apply
//
// Copy rules: no em dash, no "honest" (seed-wide test enforces it).

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { validateLesson, type Lesson } from '../../ealch-v2/src/content/schema.ts';

const here = dirname(fileURLToPath(import.meta.url));

type Overview = NonNullable<Lesson['overview']>;
type LessonPatch = {
  overview: Overview;
  /** sectionIx -> [expected title (guard), frSub]. Every section listed. */
  frSub: Record<number, [string, string]>;
};

const PATCHES: Record<string, LessonPatch> = {
  'sons.01.l1': {
    overview: {
      titleEn: "The French Alphabet: Every Letter's Real Sound",
      subFr: "L'alphabet : le vrai son de chaque lettre",
      introFr:
        "Apprenez le nom et le vrai son des 26 lettres, maîtrisez celles qui piègent les anglophones, et épelez votre nom et votre email à voix haute avec une confiance totale.",
      minutes: 45,
      difficulty: 1,
      glyph: 'Aa',
    },
    frSub: {
      0: ['Why this matters', 'Pourquoi ça compte'],
      1: ["What you'll master", 'Vos objectifs'],
      2: ['The core concept: name versus sound', 'Nom contre son'],
      3: ['How sounds are written here', 'Notre notation'],
      4: ['The 26 letters, name and sound', 'Les 26 lettres'],
      5: ['The letters that ambush you', 'Les lettres pièges'],
      6: ['Vowels: French versus English', 'Les voyelles comparées'],
      7: ['Worked examples', 'Exemples guidés'],
      8: ['The sound ladder', "L'échelle des sons"],
      9: ['Pattern bank', 'La banque de motifs'],
      10: ['Vocabulary bank', 'La banque de mots'],
      11: ['Spell your name like a local', 'Épelez votre nom'],
      12: ['Helper words for blurry letters', 'Les mots repères'],
      13: ['Email words you must know', "Les mots de l'email"],
      14: ['The full email, out loud', "L'email à voix haute"],
      15: ['The alphabet song', "La chanson de l'alphabet"],
      16: ['Sing along, line by line', 'Chantez ligne à ligne'],
      17: ['Common mistakes', 'Les erreurs classiques'],
      18: ['Reading practice', 'Lecture guidée'],
      19: ['Speaking drills', 'Exercices à voix haute'],
      20: ['Minimal pairs', 'Les paires minimales'],
      21: ['Shadowing', "L'ombre de la voix"],
      22: ['Memory hacks', 'Les astuces mémoire'],
      23: ['Practice flashcards', 'Les cartes de révision'],
      24: ['Round-up', 'Le grand récap'],
      25: ['Quiz', "L'examen final"],
    },
  },
  'sons.02.l1': {
    overview: {
      titleEn: 'French Vowels in Depth: Pure Sounds, No Gliding',
      subFr: 'Les voyelles, en profondeur',
      introFr:
        "En français, un mot entier peut basculer sur une seule voyelle que l'anglais ne possède même pas. Plongez dans les voyelles orales : pourquoi elles restent pures, et comment enfin réussir les deux plus difficiles.",
      minutes: 40,
      difficulty: 2,
      glyph: 'Ou',
    },
    frSub: {
      0: ['A Small Misunderstanding', 'Un petit malentendu'],
      1: ["What You'll Be Able to Do", 'Vos objectifs'],
      2: ['The Basic Idea', 'La grande idée'],
      3: ['The Eleven Oral Vowel Sounds, One by One', 'Les onze voyelles orales'],
      4: ['Grouping for Better Listening', 'Écouter par familles'],
      5: ['Trap Number One: U versus OU', 'Le piège U contre OU'],
      6: ['The Two Hardest Sounds', 'Les deux sons les plus durs'],
      7: ['Vocabulary for the Seven Vowels', 'Le vocabulaire des voyelles'],
      8: ['Ten Sentences to Reuse', 'Dix phrases à réutiliser'],
      9: ['Spell What You Hear', 'Écrivez ce que vous entendez'],
      10: ['At the Café, the Morning Order', 'Au café, le matin'],
      11: ['Speak Aloud: All the Vowels', 'Toutes les voyelles à voix haute'],
      12: ["At Marie's, the Baker", 'Chez Marie, la boulangère'],
      13: ['The Eight Classic Traps', 'Les huit pièges classiques'],
      14: ['By Ear: U or OU?', "À l'oreille : U ou OU ?"],
      15: ['A Happy Family', 'Une famille heureuse'],
      16: ['The System of Rounded Pairs', 'Le système des paires arrondies'],
      17: ['Where You Stand', 'Où vous en êtes'],
      18: ['Final Quiz: The Seven Vowels', "L'examen final"],
      19: ['Seven Vowels, One Big Step', 'Un grand pas de fait'],
    },
  },
  'sons.03.l1': {
    overview: {
      titleEn: "Nasal Vowels: The Four Sounds English Doesn't Have",
      subFr: 'Les voyelles nasales',
      introFr:
        "Quatre sons sans équivalent en anglais : l'air passe par le nez, et le n ou le m ne se prononce jamais comme une consonne. Maîtrisez-les et votre accent change immédiatement.",
      minutes: 40,
      difficulty: 3,
      glyph: 'On',
    },
    frSub: {
      0: ['The Welcome That Went Wrong', "L'accueil qui a mal tourné"],
      1: ["What you'll master", 'Vos objectifs'],
      2: ['The basic idea', 'La grande idée'],
      3: ['The four nasal vowels, and two glides', 'Les quatre nasales'],
      4: ['Sort the four families', 'Les quatre familles'],
      5: ['The anti-rule trap', "Le piège de l'anti-règle"],
      6: ['The soft palate lab', 'Le labo du voile du palais'],
      7: ['Nasal vocabulary', 'Le vocabulaire nasal'],
      8: ['Ten phrases to reuse', 'Dix phrases à réutiliser'],
      9: ['Spell the nasals', 'Écrivez les nasales'],
      10: ["Sans, son, sain, and tomorrow's breakfast", 'Sans, son, sain au petit déjeuner'],
      11: ['Out loud: the four families', 'Les familles à voix haute'],
      12: ['At the bakery: a good loaf', 'À la boulangerie'],
      13: ['The eight nasal traps', 'Les huit pièges nasals'],
      14: ['The bon/bonne trap, in writing', 'Bon ou bonne, par écrit'],
      15: ['Jean and his brown dog', 'Jean et son chien brun'],
      16: ['The four-anchor compass', 'La boussole des quatre ancres'],
      17: ['Lesson wrap-up', 'Le bilan de la leçon'],
      18: ['Final check', "L'examen final"],
      19: ['The nasals are yours', 'Les nasales sont à vous'],
    },
  },
  'a1.01.l1': {
    overview: {
      titleEn: 'Greetings: Tu or Vous, Never Wrong Again',
      subFr: 'Les salutations',
      introFr:
        "Les salutations françaises reposent sur une ligne : tu ou vous. Choisissez bien, et « bonjour », « merci » et « au revoir » vous portent dans presque toutes les situations.",
      minutes: 25,
      difficulty: 1,
      glyph: 'Bj',
    },
    frSub: {
      0: ['When to say what', 'Quand dire quoi'],
      1: ['Examples', 'Les exemples'],
      2: ['Where you’ll use this', 'Où ça sert'],
      3: ['Common errors', 'Les erreurs classiques'],
      4: ['Practice', 'À voix haute'],
      5: ['Quiz', "L'examen final"],
    },
  },
  'a1.04.l1': {
    overview: {
      titleEn: "The Definite Articles: Le, La, L' and Les",
      subFr: 'Les articles définis',
      introFr:
        "Le français a quatre façons de dire « the », selon le genre, le nombre et la première lettre du nom. Aucun raccourci possible : chaque nom vit avec son article.",
      minutes: 25,
      difficulty: 2,
      glyph: 'Le',
    },
    frSub: {
      0: ['Reference', 'La référence'],
      1: ['Examples', 'Les exemples'],
      2: ['Listen', "À l'écoute"],
      3: ['Common errors', 'Les erreurs classiques'],
      4: ['Practice', 'Par écrit'],
      5: ['Quiz', "L'examen final"],
    },
  },
  'a2.01.l1': {
    overview: {
      titleEn: 'Regular -ER Verbs: One Pattern, Thousands of Verbs',
      subFr: 'Les verbes réguliers',
      introFr:
        "Environ 90% des verbes français sont des verbes réguliers en -ER. Apprenez un seul schéma de conjugaison et des milliers de verbes se débloquent d'un coup.",
      minutes: 30,
      difficulty: 2,
      glyph: 'Er',
    },
    frSub: {
      0: ['Reference', 'La référence'],
      1: ['Examples', 'Les exemples'],
      2: ['Listen', "À l'écoute"],
      3: ['Common errors', 'Les erreurs classiques'],
      4: ['In this unit', 'Dans cette unité'],
      5: ['Practice', 'Par écrit'],
      6: ['Quiz', "L'examen final"],
    },
  },
};

const DRY = process.argv.includes('--dry-run');
const SEED_PATH = resolve(here, '../../ealch-v2/src/content/seed.json');

const raw = readFileSync(SEED_PATH, 'utf8');
const seed = JSON.parse(raw) as { lessons: Lesson[] };

let touched = 0;
const problems: string[] = [];

for (const [id, patch] of Object.entries(PATCHES)) {
  const L = seed.lessons.find((l) => l.id === id);
  if (!L) {
    problems.push(`${id}: lesson not in seed`);
    continue;
  }
  // Index guard: authored frSub must line up with the REAL sections.
  if (Object.keys(patch.frSub).length !== L.sections.length) {
    problems.push(`${id}: frSub covers ${Object.keys(patch.frSub).length} sections, lesson has ${L.sections.length}`);
    continue;
  }
  let mismatch = false;
  for (const [ixStr, [expectTitle]] of Object.entries(patch.frSub)) {
    const s = L.sections[Number(ixStr)];
    if (!s || s.title !== expectTitle) {
      problems.push(`${id}[${ixStr}]: expected "${expectTitle}", found "${s?.title ?? '<missing>'}"`);
      mismatch = true;
    }
  }
  if (mismatch) continue;

  const before = JSON.stringify({ o: L.overview, f: L.sections.map((s) => (s as { frSub?: string }).frSub) });
  L.overview = patch.overview;
  for (const [ixStr, [, frSub]] of Object.entries(patch.frSub)) {
    (L.sections[Number(ixStr)] as { frSub?: string }).frSub = frSub;
  }
  const after = JSON.stringify({ o: L.overview, f: L.sections.map((s) => (s as { frSub?: string }).frSub) });
  const changed = before !== after;
  if (changed) L.version = (L.version ?? 1) + 1;

  const issues = validateLesson(L);
  if (issues.length) {
    problems.push(`${id}: ${issues.map((i) => `${i.path}: ${i.message}`).join(' | ')}`);
    continue;
  }
  if (changed) touched += 1;
  console.log(`${id}: ${changed ? 'patched' : 'already up to date'}, v${L.version}, ${L.sections.length} frSub lines, valid`);
}

if (problems.length) {
  console.error('\nBLOCKED — nothing written:');
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}

if (DRY) {
  console.log(`\nDry run: ${touched} lesson(s) would be written. seed.json untouched.`);
} else if (touched === 0) {
  console.log('\nNothing to write: seed already carries this batch.');
} else {
  writeFileSync(SEED_PATH, JSON.stringify(seed, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
  console.log(`\nWrote ${touched} lesson(s) to seed.json. Review with: git diff ealch-v2/src/content/seed.json`);
}
