// Content for Placement and Dictation drills.
//
// Smart Review's fabricated deck (reviewSession / reviewOverview) used to live
// here — a fixed four-card fixture of "la monnaie missed 2× in Role Play" and the
// like, with nothing behind it. It is gone: the review queue is now the real one,
// scheduled from the attempt log (progress.logic.ts srsCards/dueCards) and read
// by app/smartreview.tsx and app/review.tsx.
import type { Lang } from '@/store/useStore';

// Placement — one adaptive question, answer-sensitive estimate.
export function placementQuestion(lang: Lang) {
  const fr = lang === 'fr';
  return {
    prompt: fr ? '« Tu es allé en France ? » — Répondez au passé composé :' : '“Tu es allé en France?” — Reply in the passé composé:',
    opts: ["Oui, j'y suis allé l'été dernier.", 'Oui, je suis allé à France.', "Oui, j'ai allé en France hier."],
    // index 0 is correct → estimate rises
  };
}

// Dictation drives its sentences from the corpus now (content.itemsFor
// ('dictation')); the old hardcoded three-sentence fixture that lived here is
// gone with the rest of the pre-corpus drill content. The accent key row and the
// answer-normalisation helper stay — they are UI, not content.
export const accentKeys = ['é', 'è', 'ê', 'à', 'â', 'ç', 'ù', 'ô', 'ï', 'œ'];

// Normalisation used to compare dictation answers (accents matter, punctuation doesn't).
export function normDict(t: string): string {
  return t
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[.,!?;:«»"…]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
