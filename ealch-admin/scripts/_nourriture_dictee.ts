import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
const CANDIDATES: [string,string][] = [
  ['fr.a1.cafe.150', "Je n'aime pas le café."],
  ['fr.a1.cuisine.264', 'Je ne mange pas de pain.'],
  ['fr.a1.cuisine.192', 'Les enfants aiment les pâtes au fromage.'],
  ['fr.a1.cuisine.205', 'Vous mangez du poulet rôti ce soir.'],
  ['fr.a1.cuisine.209', 'Ils mangent des légumes verts chaque soir.'],
  ['fr.a1.cuisine.189', 'Nous mangeons du pain frais chaque matin.'],
  ['fr.a1.marche.118', 'Les enfants aiment les fraises sucrées.'],
  ['fr.a1.questions.077', 'Est-ce que tu préfères le thé ou le café ?'],
];
for (const [id, fr] of CANDIDATES) console.log(`${dicteeMode(fr).toUpperCase().padEnd(8)} ${String(letterCount(fr)).padStart(3)} letters  ${id.padEnd(22)} "${fr}"`);
