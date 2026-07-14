// Content for Smart Review, Placement, and Dictation drills.
import type { Lang } from '@/store/useStore';
import type { TagTone } from '@/theme/palette';

export type ReviewCardType = 'WORD' | 'SON' | 'GRAMMAR' | 'CARNET';
export type ReviewCard = {
  type: ReviewCardType;
  tone: TagTone;
  meta: string;
  prompt: string;
  hint: string;
  answer: string;
  example: string;
};

export function reviewSession(lang: Lang): ReviewCard[] {
  const fr = lang === 'fr';
  return [
    {
      type: 'WORD', tone: 'gold',
      meta: fr ? 'raté 2× en Jeu de rôle · Au Marché' : 'missed 2× in Role Play · Au Marché',
      prompt: 'la monnaie', hint: fr ? 'nom féminin — au marché' : 'feminine noun — at the market',
      answer: fr ? 'change / petite monnaie' : 'change (coins)',
      example: '« Vous avez la monnaie sur vingt euros ? »',
    },
    {
      type: 'SON', tone: 'accent',
      meta: fr ? 'liaison signalée par le coach' : 'liaison flagged by the AI coach',
      prompt: 'vous‿avez', hint: fr ? 'prononcez la liaison à voix haute' : 'say the liaison out loud',
      answer: '/vu.za.ve/ — le « s » se lie',
      example: fr ? '« Vous‿avez raison » — le s sonne comme un z.' : '“Vous‿avez raison” — the s sounds like z.',
    },
    {
      type: 'GRAMMAR', tone: 'grammar',
      meta: fr ? 'quiz · Coin des débutants B1' : "quiz · Beginners' Den B1",
      prompt: 'passé composé — être', hint: fr ? 'quels verbes prennent « être » ?' : 'which verbs take “être”?',
      answer: fr ? 'mouvement + pronominaux : aller, venir, partir…' : 'motion + reflexive verbs: aller, venir, partir…',
      example: '« Je suis allé » — pas « j’ai allé ».',
    },
    {
      type: 'CARNET', tone: 'neutral',
      meta: fr ? 'ajouté depuis Le Coach · hier' : 'saved from Le Coach · yesterday',
      prompt: 'la flânerie', hint: fr ? 'vous l’avez enregistré hier' : 'you saved this yesterday',
      answer: fr ? 'se promener sans but, pour le plaisir' : 'wandering without hurry, for pleasure',
      example: '« On a passé l’après-midi en pleine flânerie. »',
    },
  ];
}

// Smart review overview chips + queued items.
export function reviewOverview(lang: Lang) {
  const fr = lang === 'fr';
  return {
    chips: [
      { name: fr ? 'Jeu de rôle' : 'Role Play', n: '9' },
      { name: 'Coach', n: '6' },
      { name: 'Quiz', n: '5' },
      { name: 'Carnet', n: '3' },
    ],
    items: [
      { w: 'la monnaie', meta: fr ? 'raté en Jeu de rôle · Au Marché' : 'missed in Role Play · Au Marché', tag: '2×', tone: 'danger' as TagTone },
      { w: 'vous‿avez', meta: fr ? 'liaison signalée par le coach' : 'liaison flagged by the AI coach', tag: 'SON', tone: 'accent' as TagTone },
      { w: 'passé composé — être', meta: fr ? 'quiz · Coin des débutants B1' : "quiz · Beginners' Den B1", tag: fr ? 'GRAMMAIRE' : 'GRAMMAR', tone: 'neutral' as TagTone },
      { w: 'la flânerie', meta: fr ? 'ajouté depuis Le Coach · hier' : 'saved from Le Coach · yesterday', tag: 'CARNET', tone: 'neutral' as TagTone },
    ],
  };
}

// Placement — one adaptive question, answer-sensitive estimate.
export function placementQuestion(lang: Lang) {
  const fr = lang === 'fr';
  return {
    prompt: fr ? '« Tu es allé en France ? » — Répondez au passé composé :' : '“Tu es allé en France?” — Reply in the passé composé:',
    opts: ["Oui, j'y suis allé l'été dernier.", 'Oui, je suis allé à France.', "Oui, j'ai allé en France hier."],
    // index 0 is correct → estimate rises
  };
}

// Dictation — sentences + why-tips (lang-sensitive), plus accent key row.
export function dictationSentences(lang: Lang) {
  const fr = lang === 'fr';
  return [
    {
      fr: 'Il a mangé ses croissants avec sa sœur.',
      tipT: fr ? '« ses », possessif — pas « ces »' : '“ses” — possessive, not “ces”',
      tipB: fr
        ? 'ses croissants = les siens · ces croissants = ceux-là. Même son — le sens décide. Ajouté à votre file de révision.'
        : 'ses croissants = his croissants · ces croissants = these ones. Same sound — the meaning decides. Added to your review queue.',
    },
    {
      fr: 'Nous allons à la plage demain.',
      tipT: fr ? '« à » prend un accent grave' : '“à” takes a grave accent',
      tipB: fr
        ? '« a » (le verbe avoir) vs « à » (la préposition) — l’accent change le mot. Ajouté à votre file de révision.'
        : '“a” (has) vs “à” (to / at) — the accent changes the word. Added to your review queue.',
    },
    {
      fr: 'J’achète du pain à la boulangerie.',
      tipT: fr ? '« achète » — è devant syllabe muette' : '“achète” — è before a silent syllable',
      tipB: fr
        ? 'acheter → j’achète : le e devient è quand la syllabe suivante est muette. Ajouté à votre file de révision.'
        : 'acheter → j’achète: the e becomes è when the next syllable is silent. Added to your review queue.',
    },
  ];
}

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
