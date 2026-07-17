// Content for Placement and Dictation drills.
//
// Smart Review's fabricated deck (reviewSession / reviewOverview) used to live
// here — a fixed four-card fixture of "la monnaie missed 2× in Role Play" and the
// like, with nothing behind it. It is gone: the review queue is now the real one,
// scheduled from the attempt log (progress.logic.ts srsCards/dueCards) and read
// by app/smartreview.tsx and app/review.tsx.
// The one-question fake-adaptive placement fixture that lived here is gone
// with the screen that read it: app/placement.tsx now draws a real question
// bank from the corpus and grades it in progress.logic.ts (placementEstimate).

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
