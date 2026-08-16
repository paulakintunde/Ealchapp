// BAND BLOCKING STEP 4, the probe nobody had run.
//
// `scenario` repeats in ZERO shipped lessons: all 22 A2 lessons carry exactly
// one, so "does a second `scenario` in one lesson render?" has never been
// answered. Four units are gated on it (a2.07 for `scene`, a2.28, a2.29, a2.32
// for `scenario`), and a2.28 shipped the single-scenario fallback because of it.
//
//   pnpm tsx scripts/_a2band_two_scenario_probe.ts        make it two
//   pnpm tsx scripts/merge-medecin-into-seed.ts           put it back
//
// THIS WRITES ONLY TO seed.json AND ONLY TO a2.28.l1. It does not touch
// Postgres. The restore is re-running a2.28's own merge script, which rewrites
// the lesson from source, so no `git checkout seed.json` is needed and no other
// author's uncommitted work is at risk.
//
// It converts `s20-pharma`, which is a `listening` carrying the pharmacist's
// five counter turns, into the `scenario` it would have been if the check had
// passed. That is the real question rather than a synthetic one: the section
// keeps its id, its position and its content, and only its type changes.
import { readFileSync, writeFileSync } from 'node:fs';

const SEED = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

type Section = Record<string, unknown> & { id: string; type: string };
type Seed = { version: number; lessons: Array<{ id: string; sections: Section[] }>; [k: string]: unknown };

/** The pharmacist's five turns, as a scenario. Same content the `listening`
 *  carries, with the learner's half added so the section is a real scenario
 *  rather than a shape with no user turns. */
const TURNS = [
  { ai: 'Vous avez une ordonnance ?', en: 'Do you have a prescription?', user: 'Oui, la voici.', userEn: 'Yes, here it is.', alts: [{ fr: 'Voici mon ordonnance.', en: 'Here is my prescription.' }, { fr: 'Non, je n\'en ai pas.', en: 'No, I do not have one.' }] },
  { ai: 'Vous êtes allergique à quelque chose ?', en: 'Are you allergic to anything?', user: 'Non, à rien.', userEn: 'No, to nothing.', alts: [{ fr: 'Non, pas que je sache.', en: 'No, not that I know of.' }, { fr: 'Oui, aux arachides.', en: 'Yes, to peanuts.' }] },
  { ai: 'Vous préférez le générique ?', en: 'Would you like the generic?', user: 'Oui, s\'il vous plaît.', userEn: 'Yes, please.', alts: [{ fr: 'Oui, c\'est moins cher.', en: 'Yes, it is cheaper.' }, { fr: 'Non, merci.', en: 'No, thank you.' }] },
  { ai: 'Un comprimé matin et soir, à jeun.', en: 'One tablet morning and evening, on an empty stomach.', user: 'Matin et soir, avant de manger.', userEn: 'Morning and evening, before eating.', alts: [{ fr: 'D\'accord, deux fois par jour.', en: 'All right, twice a day.' }, { fr: 'C\'est combien de fois par jour ?', en: 'How many times a day is that?' }] },
  { ai: 'Si ça ne passe pas, revenez me voir.', en: 'If it does not clear up, come back and see me.', user: 'Merci beaucoup, au revoir.', userEn: 'Thank you very much, goodbye.', alts: [{ fr: 'Très bien, merci.', en: 'Very good, thanks.' }, { fr: 'Dans combien de temps ?', en: 'After how long?' }] },
];

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const lesson = seed.lessons.find((l) => l.id === 'a2.28.l1');
if (!lesson) die('a2.28.l1 is not in the seed');

const before = lesson!.sections.filter((s) => s.type === 'scenario').map((s) => s.id);
if (before.length !== 1) die(`a2.28.l1 already has ${before.length} scenario(s): ${before.join(', ')}. Restore with the merge script first.`);

const i = lesson!.sections.findIndex((s) => s.id === 's20-pharma');
if (i < 0) die('s20-pharma is missing');
const old = lesson!.sections[i];
if (old.type !== 'listening') die(`s20-pharma is a ${old.type}, not the listening this probe converts`);

lesson!.sections[i] = {
  type: 'scenario',
  id: 's20-pharma',
  title: 'The Counter, Start To Finish',
  frSub: 'Au comptoir',
  layer: 'core',
  terms: ['ordonnance', 'dosage'],
  say: 'PROBE BUILD. The pharmacist\'s five turns, as the second scenario in this lesson.',
  setting: 'A pharmacy counter in Nantes, late afternoon, prescription in hand.',
  turns: TURNS,
};

writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');

const after = lesson!.sections.filter((s) => s.type === 'scenario').map((s) => s.id);
console.log(`\n  a2.28.l1 scenarios: ${before.join(', ')}  ->  ${after.join(', ')}`);
console.log(`  s20-pharma: listening -> scenario, ${TURNS.length} turns`);
console.log('\n  Now render a2.28.l1 on a Pixel 6 and open missions 10 AND 20.');
console.log('  Restore with:  pnpm tsx scripts/merge-medecin-into-seed.ts\n');
