// Content batch — Scene/Scène roleplay scenarios for the 10 best-covered
// "By Theme" practice themes.
//
// Before this batch, only ONE theme in the whole corpus ('marche') had any
// Scenario content — every other theme's Scène step showed "No content" in
// the theme parcours (see ealch-v2/src/content/theme.logic.ts,
// PARCOURS_STEPS). This adds one A1 scenario each for: cuisine, ecole,
// deplacements, metiers, corps, maison, animaux, routines, famille,
// sports-et-loisirs — closing the pathway's last gap for these themes.
//
// Scenarios are content_units documents (kind = 'scenario'), not
// content_items rows — same storage shape as curriculum units/lessons.
// This mirrors port-content.ts's buildScenarios() + upsertDoc() pattern
// exactly (see CONTENT-AUTHORING-GUIDE.md §6 for the dialogue/register
// conventions followed below: concrete goal + exit per scene, register
// matched to the setting, vocabulary reused from the theme's existing
// corpus rather than invented).
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-theme-scenarios-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-theme-scenarios-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateScenario, type Scenario } from '../../ealch-v2/src/content/schema.ts';

export const SCENARIOS: Scenario[] = [
  {
    id: 'sc.a1.cuisine.001',
    level: 'a1',
    theme: 'cuisine',
    title: 'On cuisine ensemble',
    turns: [
      { ai: "Tu peux me passer le sel, s'il te plaît ?", en: 'Can you pass me the salt, please?', user: 'Voici le sel, tiens.' },
      { ai: 'Merci, le riz est prêt, à ton avis ?', en: 'Thanks, do you think the rice is ready?', user: 'Pas encore, il faut deux minutes.' },
      { ai: "D'accord. Combien de poivre je mets dans la sauce ?", en: 'Okay, how much pepper should I put in the sauce?', user: 'Mets une petite cuillère de poivre.' },
      { ai: "Parfait, merci beaucoup pour ton aide !", en: 'Perfect, thank you so much for your help!', user: 'De rien, le repas va être délicieux.' },
    ],
    version: 1,
  },
  {
    id: 'sc.a1.ecole.001',
    level: 'a1',
    theme: 'ecole',
    title: "Devoirs et emploi du temps",
    turns: [
      { ai: "Bonjour ! Tu as une question sur les devoirs ?", en: 'Hello! Do you have a question about the homework?', user: 'Oui, madame. Quels devoirs sont pour demain ?' },
      { ai: "Pour demain, tu dois lire le chapitre trois et faire l'exercice deux.", en: 'For tomorrow, you need to read chapter three and do exercise two.', user: "D'accord, je note ça dans mon agenda." },
      { ai: 'Parfait. Et sais-tu quand est le prochain cours de français ?', en: 'Great. And do you know when the next French class is?', user: 'Non, je ne sais pas. Vous pouvez me le dire ?' },
      { ai: 'Le prochain cours est mardi, juste après la récréation.', en: 'The next class is Tuesday, right after recess.', user: 'Merci, madame. Je fais mes devoirs ce soir.' },
    ],
    version: 1,
  },
  {
    id: 'sc.a1.deplacements.001',
    level: 'a1',
    theme: 'deplacements',
    title: 'Demander son chemin',
    turns: [
      { ai: 'Bonjour, je peux vous aider ?', en: 'Hello, can I help you?', user: 'Pardon, je cherche la station de métro.' },
      { ai: "Vous prenez la rue à droite, puis c'est tout droit.", en: "You take the street on the right, then it's straight ahead.", user: "Merci, c'est loin d'ici ?" },
      { ai: "Non, ce n'est pas loin.", en: "No, it's not far.", user: 'Parfait, merci beaucoup !' },
      { ai: 'Je vous en prie, bonne journée !', en: "You're welcome, have a good day!", user: 'Au revoir !' },
    ],
    version: 1,
  },
  {
    id: 'sc.a1.metiers.001',
    level: 'a1',
    theme: 'metiers',
    title: 'Discussion à la fête',
    turns: [
      { ai: 'Bonjour ! Quel est votre métier ?', en: "Hello! What's your job?", user: 'Je suis ingénieur, je travaille dans une entreprise.' },
      { ai: 'Ah, intéressant ! Vous aimez votre travail ?', en: 'Oh, interesting! Do you like your job?', user: 'Oui, beaucoup. Et vous, vous faites quoi ?' },
      { ai: "Je suis professeur. J'enseigne dans un collège.", en: "I'm a teacher. I teach at a middle school.", user: 'C\'est un beau métier ! Vous enseignez quelle matière ?' },
      { ai: 'Le français. Je dois partir maintenant, ravi de vous avoir parlé !', en: 'French. I have to go now, nice talking with you!', user: 'Moi aussi, bonne soirée !' },
    ],
    version: 1,
  },
  {
    id: 'sc.a1.corps.001',
    level: 'a1',
    theme: 'corps',
    title: 'Chez le médecin',
    turns: [
      { ai: "Bonjour, qu'est-ce qui ne va pas ?", en: 'Hello, what seems to be wrong?', user: "J'ai mal à la gorge et au ventre." },
      { ai: 'Vous avez de la fièvre ?', en: 'Do you have a fever?', user: "Non, mais j'ai mal à la tête aussi." },
      { ai: "Vous devez boire beaucoup d'eau et vous reposer.", en: 'You should drink plenty of water and rest.', user: "D'accord, merci docteur." },
      { ai: "Revenez si ça ne va pas mieux dans deux jours.", en: 'Come back if you are not feeling better in two days.', user: 'Entendu, à bientôt.' },
    ],
    version: 1,
  },
  {
    id: 'sc.a1.maison.001',
    level: 'a1',
    theme: 'maison',
    title: "Visite de l'appartement",
    turns: [
      { ai: "Bonjour, bienvenue. Voici l'appartement.", en: "Hello, welcome. Here's the apartment.", user: 'Bonjour, merci de me recevoir.' },
      { ai: 'Il y a deux chambres et une salle de bain.', en: 'There are two bedrooms and one bathroom.', user: "Est-ce qu'il y a un balcon ?" },
      { ai: 'Oui, il y a un petit balcon avec vue sur le jardin.', en: "Yes, there's a small balcony with a garden view.", user: 'Le chauffage fonctionne bien ?' },
      { ai: "Oui, le chauffage est neuf et le loyer inclut l'eau chaude.", en: 'Yes, the heating is new and the rent includes hot water.', user: "Parfait, je prends l'appartement." },
    ],
    version: 1,
  },
  {
    id: 'sc.a1.animaux.001',
    level: 'a1',
    theme: 'animaux',
    title: 'Chez le vétérinaire',
    turns: [
      { ai: "Bonjour, comment puis-je vous aider aujourd'hui ?", en: 'Hello, how can I help you today?', user: 'Mon chien a mal à la patte.' },
      { ai: 'Depuis quand a-t-il mal ?', en: 'Since when has he been in pain?', user: 'Depuis ce matin, il boite un peu.' },
      { ai: 'Je vais examiner sa patte maintenant.', en: "I'm going to examine his paw now.", user: "D'accord, merci docteur." },
      { ai: "Ce n'est pas grave, donnez-lui du repos pendant deux jours.", en: "It's nothing serious, give him rest for two days.", user: 'Très bien, je vais faire ça.' },
    ],
    version: 1,
  },
  {
    id: 'sc.a1.routines.001',
    level: 'a1',
    theme: 'routines',
    title: 'La routine du matin',
    turns: [
      { ai: 'Je dois me doucher tôt, je pars à huit heures.', en: 'I need to shower early, I leave at eight.', user: 'D\'accord, mais je me réveille à sept heures aussi.' },
      { ai: 'Tu peux utiliser la salle de bain après moi.', en: 'You can use the bathroom after me.', user: 'Parfait, je prends mon petit déjeuner en attendant.' },
      { ai: 'Alors je me douche à sept heures et toi à sept heures vingt.', en: 'So I shower at seven and you at seven twenty.', user: 'Ça marche, je suis prête à huit heures.' },
      { ai: 'Super, on se voit dans la cuisine à huit heures.', en: 'Great, see you in the kitchen at eight.', user: "D'accord, à tout à l'heure !" },
    ],
    version: 1,
  },
  {
    id: 'sc.a1.famille.001',
    level: 'a1',
    theme: 'famille',
    title: 'Présentations en famille',
    turns: [
      { ai: 'Viens, je te présente ma famille !', en: 'Come, let me introduce you to my family!', user: "D'accord, avec plaisir !" },
      { ai: 'Voici mon père et ma mère.', en: 'This is my father and my mother.', user: 'Enchanté, madame et monsieur.' },
      { ai: "Et là, c'est ma sœur avec son mari.", en: "And over there, that's my sister with her husband.", user: "Elle a l'air très sympa." },
      { ai: 'Maintenant tu connais toute ma famille !', en: 'Now you know my whole family!', user: "Merci de m'avoir tout présenté." },
    ],
    version: 1,
  },
  {
    id: 'sc.a1.sports-et-loisirs.001',
    level: 'a1',
    theme: 'sports-et-loisirs',
    title: 'Un week-end sportif',
    turns: [
      { ai: 'On fait du sport ce week-end ?', en: 'Should we do a sport this weekend?', user: "Oui, j'aimerais bien jouer au tennis." },
      { ai: 'Super, tu es libre samedi matin ?', en: 'Great, are you free Saturday morning?', user: 'Oui, samedi matin, ça marche.' },
      { ai: 'On se retrouve au stade à neuf heures ?', en: 'Should we meet at the stadium at nine?', user: "D'accord, à neuf heures au stade." },
      { ai: 'Parfait, apporte ta raquette !', en: 'Perfect, bring your racket!', user: "D'accord, à samedi !" },
    ],
    version: 1,
  },
];

// ── Apply ───────────────────────────────────────────────────────────────────

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

  const problems: string[] = [];
  SCENARIOS.forEach((s) => {
    const issues = validateScenario(s, s.id);
    if (issues.length) problems.push(`scenario ${s.id}:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);
  });
  if (problems.length) die(`scenarios invalid:\n\n${problems.join('\n\n')}`);

  const ids = SCENARIOS.map((s) => s.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  console.log(`\n  this batch: ${SCENARIOS.length} scenarios across themes: ${SCENARIOS.map((s) => s.theme).join(', ')}`);

  if (DRY_RUN) {
    console.log('\n✓ dry run — all scenarios valid, nothing written.\n');
    return;
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  // Scenarios are content_units documents (kind='scenario'), upserted by
  // slug (= scenario id) — same shape port-content.ts uses for units/lessons.
  const upsertDoc = async (slug: string, title: string, kind: string, level: string, body: unknown) =>
    client.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,$3,$4,'fr','published',$5,1,'human')
       on conflict (slug) do update set
         title=excluded.title, kind=excluded.kind, level=excluded.level, body=excluded.body,
         status='published', updated_at=now()`,
      [slug, title, kind, level, JSON.stringify(body)]
    );

  try {
    await client.query('begin');
    for (const s of SCENARIOS) {
      await upsertDoc(s.id, s.title, 'scenario', s.level, s);
    }
    await client.query('commit');
    console.log(`\n✓ theme scenarios batch applied: ${SCENARIOS.length} scenarios published. Run pnpm content:publish to ship it OTA.\n`);
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
