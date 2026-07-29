// Curate the Speak path stage manifests from seed.json — FULL-COVERAGE v2.
// Blueprint: reconciliation/SPEAK-PATH-BLUEPRINT.md (approved 2026-07-25;
// uncapped same day: every sentence-eligible item at a level lands on the
// path, stages take their entire deduped pool, no 165 trim).
// Pure selection — this script never writes to seed.json.
//
// Every theme with sentence items at a level is assigned to exactly one of
// that world's 5 stages (CORE = the blueprint's original mapping, EXTRA =
// full-coverage assignment). Themes not listed anywhere fall into the
// world's default stage and are reported, so new OTA themes can never fall
// off the path silently.
//
// Worlds 1 and 6 are included so the same run picks up the sons/c1 gap-fill
// batches automatically once they are merged into seed.json.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SEED = path.join(ROOT, 'ealch-v2', 'src', 'content', 'seed.json');
const OUT_DIR = path.join(ROOT, 'ealch-admin', 'scripts', 'data', 'gen', 'speak-path');

const PER_BLOCK = 33;

// world -> level, defaultStage (unlisted themes land there), stages.
const WORLDS = [
  {
    world: 1, level: 'sons', defaultStage: '1.5',
    stages: [
      { stage: '1.1', title: 'La Porte des Lettres', themes: ['alphabet'] },
      { stage: '1.2', title: 'Le Bassin des Voyelles', themes: ['voyelles'] },
      { stage: '1.3', title: 'Le Pont des Nasales', themes: ['nasales'] },
      { stage: '1.4', title: 'Le Fil des Liaisons', themes: ['liaisons'] },
      { stage: '1.5', title: 'La Musique de la Phrase', themes: ['rythme'] },
    ],
  },
  {
    // 6 stages, not 5: the original 2.2 pooled every A1 function-word theme
    // into one 1,100-item station (34 blocks). Split 2026-07-25: questions &
    // expressions stay in 2.2, the little-words/verbs cluster becomes 2.3,
    // and the rest renumber. ~540/~570 instead of 1,100.
    world: 2, level: 'a1', defaultStage: '2.6',
    stages: [
      {
        stage: '2.1', title: 'La Place du Bonjour',
        themes: [
          'salutations', 'salutations-de-base', 'presentation-personnelle', 'rp-identite',
          'rencontres', 'couple-amour', 'evenements-familiaux', 'emotions', 'rp-famille', 'les-fetes',
        ],
      },
      {
        stage: '2.2', title: 'Le Carrefour des Questions',
        themes: [
          'questions', 'questions-du-quotidien', 'expressions-utiles',
          'expressions-frequentes', 'faux-amis', 'mots-essentiels',
        ],
      },
      {
        stage: '2.3', title: 'Le Pont des Petits Mots',
        themes: [
          'mots-de-liaison', 'pronoms-essentiels', 'prepositions-essentielles',
          'negation-et-restriction', 'expressions-de-quantite', 'verbes-essentiels',
          'verbes-du-quotidien', 'temps-et-frequence', 'routines', 'dictee',
        ],
      },
      {
        stage: '2.4', title: 'Le Café du Marché',
        themes: [
          'cafe', 'au-restaurant', 'marche', 'cuisine', 'nombres',
          'argent-quotidien', 'objets', 'courses', 'rp-repas', 'rp-achats',
        ],
      },
      {
        stage: '2.5', title: "L'Horloge et le Ciel",
        themes: [
          'heure-et-date', 'jours-et-mois', 'meteo', 'la-ville', 'transports-quotidiens', 'deplacements',
          'tourisme', 'pays-et-nationalites', 'douane-et-immigration', 'quebec-et-francophonie',
          'rp-voyage', 'rp-meteo-nature', 'animaux', 'animaux-domestiques', 'jardinage',
          'maison', 'rp-maison', 'rp-quotidien', 'paysages',
        ],
      },
      {
        stage: '2.6', title: 'Les Visages du Village',
        themes: [
          'famille', 'amis', 'description-personnes-objets', 'couleurs', 'adjectifs-essentiels',
          'noms-essentiels', 'corps', 'ecole', 'matieres', 'metiers', 'rp-travail-etudes',
          'technologie-quotidienne', 'appareils', 'rp-technologie', 'internet', 'musique',
          'cinema', 'sports-et-loisirs', 'rp-loisirs', 'rp-sante', 'symptomes', 'rp-societe',
          'rp-etiquette', 'communaute', 'voisinage', 'entraide', 'conflits-reconciliation',
          'bricolage', 'bureau', 'collegues', 'vetements',
        ],
      },
    ],
  },
  {
    world: 3, level: 'a2', defaultStage: '3.4',
    stages: [
      {
        stage: '3.1', title: 'La Rue des Souvenirs',
        themes: [
          'recits-au-passe', 'verbes-essentiels', 'verbes-du-quotidien', 'temps-et-frequence',
          'heure-et-date', 'dictee', 'verbes', 'routines', 'expressions-frequentes',
          'nombres', 'expressions-de-quantite', 'mots-essentiels',
        ],
      },
      {
        stage: '3.2', title: "L'Avenue des Projets",
        themes: [
          'projets-et-futur', 'conseils-et-suggestions', 'opinions-et-avis',
          'rencontres', 'couple-amour', 'evenements-familiaux', 'conflits-reconciliation',
          'entraide', 'emotions', 'communaute', 'voisinage', 'les-fetes', 'salutations',
          'salutations-de-base', 'presentation-personnelle', 'questions-du-quotidien',
          'amis', 'famille', 'rp-famille', 'rp-identite',
        ],
      },
      {
        stage: '3.3', title: 'Le Boulevard des Contrastes',
        themes: [
          'comparaisons', 'connecteurs-logiques', 'negation-et-restriction',
          'description-personnes-objets', 'prepositions-essentielles', 'corps', 'objets',
          'animaux', 'animaux-domestiques', 'paysages', 'meteo', 'rp-meteo-nature',
        ],
      },
      {
        stage: '3.4', title: 'Les Boutiques',
        themes: [
          'courses', 'vetements', 'la-ville', 'transports-quotidiens', 'au-restaurant', 'marche',
          'pronoms-essentiels', 'cafe', 'cuisine', 'argent-quotidien', 'maison', 'bricolage',
          'jardinage', 'hebergement', 'tourisme', 'deplacements', 'rp-maison', 'rp-quotidien',
          'rp-repas', 'rp-achats', 'rp-voyage', 'rp-loisirs', 'sports-et-loisirs', 'cinema',
          'musique', 'rp-etiquette',
        ],
      },
      {
        stage: '3.5', title: 'Le Bureau des Papiers',
        themes: [
          'systeme-de-sante', 'symptomes', 'recherche-emploi', 'douane-et-immigration',
          'immigration-et-citoyennete', 'examens-et-diplomes', 'quebec-et-francophonie',
          'bureau', 'collegues', 'metiers', 'ecole', 'matieres', 'disciplines', 'internet',
          'technologie-quotidienne', 'appareils', 'rp-technologie', 'rp-travail-etudes',
          'rp-sante', 'rp-societe', 'gouvernement', 'economie', 'pays-et-nationalites',
        ],
      },
    ],
  },
  {
    world: 4, level: 'b1', defaultStage: '4.3',
    stages: [
      {
        stage: '4.1', title: 'La Tribune',
        themes: [
          'opinions-et-avis', 'questions-sociales', 'valeurs', 'emotions',
          'negation-et-restriction', 'comparaisons', 'connecteurs-logiques',
          'conseils-et-suggestions', 'projets-et-futur', 'verbes', 'verbes-essentiels',
          'verbes-du-quotidien', 'pronoms-essentiels', 'expressions-de-quantite',
          'prepositions-essentielles', 'expressions-frequentes', 'heure-et-date',
          'temps-et-frequence', 'nombres', 'dictee',
        ],
      },
      {
        stage: '4.2', title: 'La Tour du Travail',
        themes: [
          'bureau', 'recherche-emploi', 'universite', 'examens-et-diplomes', 'matieres',
          'collegues', 'affaires', 'recherche', 'disciplines', 'metiers', 'rp-travail-etudes',
          'argent-quotidien',
        ],
      },
      {
        stage: '4.3', title: 'Les Toits des Histoires',
        themes: [
          'recits-au-passe', 'couple-amour', 'evenements-familiaux', 'conflits-reconciliation',
          'entraide', 'famille', 'amis', 'voisinage', 'communaute', 'routines', 'maison',
          'cuisine', 'cafe', 'au-restaurant', 'marche', 'courses', 'vetements', 'bricolage',
          'jardinage', 'les-fetes', 'rp-famille', 'rp-identite', 'rp-quotidien', 'rp-maison',
          'rp-repas', 'rp-achats', 'rp-etiquette',
        ],
      },
      {
        stage: '4.4', title: 'Le Réseau',
        themes: [
          'internet', 'reseaux-sociaux', 'journalisme', 'gouvernement', 'economie', 'ecologie',
          'musees', 'litterature', 'traditions', 'cinema', 'musique', 'sports-et-loisirs',
          'technologie-quotidienne', 'appareils', 'rp-technologie', 'rp-loisirs', 'rp-societe',
        ],
      },
      {
        stage: '4.5', title: 'Le Palais des Portes',
        themes: [
          'immigration-et-citoyennete', 'systeme-de-sante', 'droit', 'douane-et-immigration',
          'quebec-et-francophonie', 'symptomes', 'soins', 'bien-etre', 'rp-sante', 'tourisme',
          'hebergement', 'transports-quotidiens', 'deplacements', 'la-ville', 'paysages',
          'meteo', 'animaux', 'animaux-domestiques', 'rp-voyage', 'rp-meteo-nature',
        ],
      },
    ],
  },
  {
    world: 5, level: 'b2', defaultStage: '5.5',
    stages: [
      {
        stage: '5.1', title: 'Le Col des Idées',
        themes: [
          'philosophie', 'ethique', 'opinions-et-avis', 'comparaisons', 'connecteurs-logiques',
          'negation-et-restriction', 'conseils-et-suggestions', 'projets-et-futur',
          'recits-au-passe', 'expressions-de-quantite', 'pronoms-essentiels', 'heure-et-date',
          'prepositions-essentielles',
        ],
      },
      {
        stage: '5.2', title: "L'Observatoire",
        themes: [
          'methode-scientifique', 'decouvertes', 'recherche', 'disciplines', 'universite',
          'examens-et-diplomes', 'rp-technologie',
        ],
      },
      {
        stage: '5.3', title: 'Le Belvédère des Arts',
        themes: ['musees', 'litterature', 'traditions', 'journalisme', 'reseaux-sociaux', 'rp-loisirs', 'rp-societe'],
      },
      {
        stage: '5.4', title: "L'Arête des Affaires",
        themes: [
          'affaires', 'economie', 'collegues', 'gouvernement', 'droit', 'recherche-emploi',
          'argent-quotidien', 'rp-travail-etudes', 'immigration-et-citoyennete',
          'quebec-et-francophonie', 'douane-et-immigration', 'rp-etiquette',
        ],
      },
      {
        stage: '5.5', title: 'Le Sommet Social',
        themes: [
          'questions-sociales', 'valeurs', 'ecologie', 'bien-etre', 'soins', 'systeme-de-sante',
          'rp-sante', 'communaute', 'voisinage', 'entraide', 'conflits-reconciliation', 'maison',
          'hebergement', 'tourisme', 'rp-voyage', 'rp-meteo-nature', 'rp-famille', 'rp-identite',
          'rp-quotidien', 'rp-maison', 'rp-repas', 'rp-achats',
        ],
      },
    ],
  },
  {
    world: 6, level: 'c1', defaultStage: '6.1',
    stages: [
      { stage: '6.1', title: 'Le Seuil des Nuances', themes: ['nuances-et-registres'] },
      { stage: '6.2', title: 'La Salle du Débat', themes: ['rhetorique', 'philosophie', 'ethique'] },
      { stage: '6.3', title: 'Le Cabinet Professionnel', themes: ['francais-professionnel-avance'] },
      { stage: '6.4', title: 'La Bibliothèque Profonde', themes: ['culture-profonde', 'methode-scientifique', 'decouvertes'] },
      { stage: '6.5', title: "L'Étoile de l'Examen", themes: ['discours-dexamen'] },
    ],
  },
];

// Mirrors src/utils/score.ts normalizeFr — accent/case/punct-insensitive.
const norm = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’‘`]/g, ' ')
    .replace(/[«»"“”.,!?;:()[\]…\-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
const wc = (s) => norm(s).split(' ').filter(Boolean).length;

const data = JSON.parse(fs.readFileSync(SEED, 'utf8'));
const sentenceItems = (data.items || []).filter(
  (it) => Array.isArray(it.drills) && it.drills.includes('sentence')
);

fs.mkdirSync(OUT_DIR, { recursive: true });

const globalIds = new Set();
const index = [];
const rows = [];
let grandTotal = 0;

for (const w of WORLDS) {
  // theme -> stage routing for this world, with unlisted themes defaulting.
  const route = new Map();
  const claimed = new Map(); // guard: a theme may belong to ONE stage only
  for (const st of w.stages) {
    for (const th of st.themes) {
      if (claimed.has(th)) throw new Error(`world ${w.world}: theme ${th} in stages ${claimed.get(th)} and ${st.stage}`);
      claimed.set(th, st.stage);
      route.set(th, st.stage);
    }
  }

  const levelItems = sentenceItems.filter((it) => it.level === w.level);
  const byStage = new Map(w.stages.map((st) => [st.stage, []]));
  const defaulted = new Set();
  for (const it of levelItems) {
    let stage = route.get(it.theme);
    if (!stage) {
      stage = w.defaultStage;
      defaulted.add(it.theme);
    }
    byStage.get(stage).push(it);
  }

  for (const st of w.stages) {
    const pool = byStage.get(st.stage);

    // Dedupe on normalized fr so near-identical lines don't hold two slots.
    const seen = new Set();
    const uniq = [];
    for (const it of pool) {
      const k = norm(it.fr);
      if (!seen.has(k)) {
        seen.add(k);
        uniq.push(it);
      }
    }

    // Ramp: shortest first. Uncapped — the WHOLE deduped pool ships.
    uniq.sort((a, b) => wc(a.fr) - wc(b.fr) || a.fr.length - b.fr.length);

    for (const it of uniq) {
      if (globalIds.has(it.id)) throw new Error(`item ${it.id} selected by two stages`);
      globalIds.add(it.id);
    }

    const blocks = [];
    for (let b = 0; b * PER_BLOCK < uniq.length; b++) {
      blocks.push({
        block_id: b + 1,
        items: uniq.slice(b * PER_BLOCK, (b + 1) * PER_BLOCK).map((it) => ({
          id: it.id,
          theme: it.theme,
          fr: it.fr,
          en: it.en,
          words: wc(it.fr),
        })),
      });
    }

    const manifest = {
      stage: st.stage,
      world: w.world,
      level: w.level,
      title: st.title,
      themes: st.themes,
      source: 'curated from seed.json — zero generated items in this file',
      poolSize: pool.length,
      dedupedPool: uniq.length,
      selected: uniq.length,
      blockCount: blocks.length,
      blocks,
    };
    fs.writeFileSync(path.join(OUT_DIR, `stage-${st.stage}.json`), JSON.stringify(manifest, null, 2));

    grandTotal += uniq.length;
    const ws = uniq.length ? uniq.map((it) => wc(it.fr)) : [0];
    index.push({
      stage: st.stage,
      title: st.title,
      level: w.level,
      poolSize: pool.length,
      selected: uniq.length,
      blocks: blocks.length,
    });
    rows.push(
      `${st.stage}  ${w.level.padEnd(4)}  pool ${String(pool.length).padStart(4)}  sel ${String(uniq.length).padStart(4)}  blocks ${String(blocks.length).padStart(2)}  words ${Math.min(...ws)}-${Math.max(...ws)}  ${st.title}`
    );
  }

  if (defaulted.size) {
    rows.push(`   world ${w.world}: unmapped themes -> ${w.defaultStage}: ${[...defaulted].join(', ')}`);
  }

  // Coverage invariant: every sentence item at this level is on the path.
  const placed = [...byStage.values()].reduce((s, a) => s + a.length, 0);
  if (placed !== levelItems.length) throw new Error(`world ${w.world}: ${levelItems.length - placed} items lost`);
}

fs.writeFileSync(path.join(OUT_DIR, 'index.json'), JSON.stringify(index, null, 2));

console.log(rows.join('\n'));
console.log(`\n${index.length} stages, ${grandTotal} items on the path (of ${sentenceItems.length} sentence-eligible; difference = within-stage fr duplicates).`);
