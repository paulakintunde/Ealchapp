// Role-play answers that also work — Sons 1-10 and A1 1-11.
//
// WHY
//
// Every `scenario` section in the refresher courses shipped with exactly one
// acceptable reply per turn. The renderer scored the learner's speech against
// that single sentence and revealed it as "Modèle", untranslated. Two things
// follow from that, and both are wrong:
//
//   · a learner who answers "Je voudrais un sac, merci" to "Je peux vous
//     aider ?" is told they were not quite right, because the author happened
//     to write "Oui, je cherche un sac"; and
//   · the reveal shows a French sentence the learner is told they should have
//     said and cannot read.
//
// So each turn below gets `userEn` (what the model line MEANS) and `alts`
// (other replies a French speaker would actually give at that turn). The app
// scores the learner's utterance against all of them and keeps the best, and
// shows all of them on the reveal. See ealch-v2/src/content/scenario.logic.ts.
//
// AUTHORING RULES, applied to all 90 turns
//
//   1. An alternative must be a REPLY, not a paraphrase drill. It has to fit
//      the coach's line before it AND leave the coach's next line making
//      sense — these are scripted conversations, so an alternative that
//      derails turn 3 breaks turns 4 and 5.
//   2. It must sit at the lesson's own level. No tense, no structure and no
//      vocabulary the learner has not met by that point in the course.
//   3. Where it costs nothing, it should exercise the LESSON'S OWN GROUND: the
//      nasals lesson gets alternatives full of nasals, the partitive lesson
//      gets du / de la / de l', the pronoun lesson contrasts ils and elles.
//      A conversation is where the grammar is supposed to end up.
//   4. Never a near-miss of the model. Two ways of saying the same thing teach
//      that the language is flexible; the same sentence twice teaches nothing,
//      and the schema validator rejects it.
//
// Apply with:  pnpm tsx scripts/apply-scenario-alts.ts --dry-run
//              pnpm tsx scripts/apply-scenario-alts.ts

export type TurnAlt = {
  /** The model line as it stands in the content today. A checksum, not an
   *  edit: the script matches it loosely against the seed and refuses to write
   *  if a turn has been re-authored underneath this file. Attaching answers to
   *  the wrong line would be invisible in review and wrong on a device. */
  user: string;
  /** What the model line means. */
  userEn: string;
  /** Other replies that work here. */
  alts: { fr: string; en: string }[];
};

export const SCENARIO_ALTS: Record<string, TurnAlt[]> = {
  /* ── Sons 1: L'alphabet français — no scenario section ──────────────────
   * Sons 1, 4 and 9 (Rythme & intonation) have no role play at all. Not an
   * omission on this file's part: there is nothing here to extend. */

  /* ── Sons 2: Les voyelles ─ At Marie's, the Baker ─────────────────────── */
  'sons.02.l1': [
    {
      user: "Un pain, s'il vous plaît.",
      userEn: 'A loaf, please.',
      alts: [
        { fr: "Je voudrais un pain, merci.", en: "I'd like a loaf, thank you." },
        { fr: "Une baguette, s'il vous plaît.", en: 'A baguette, please.' },
      ],
    },
    {
      user: "Un peu de beurre, s'il vous plaît.",
      userEn: 'A little butter, please.',
      alts: [
        { fr: "Du beurre, s'il vous plaît.", en: 'Some butter, please.' },
        { fr: 'Juste un peu de beurre.', en: 'Just a little butter.' },
      ],
    },
    {
      user: 'Non, juste un peu, merci.',
      userEn: 'No, just a little, thank you.',
      alts: [
        { fr: 'Non, un tout petit peu.', en: 'No, only a tiny bit.' },
        { fr: 'Vous avez raison, juste un peu.', en: 'You are right, just a little.' },
      ],
    },
    {
      user: "Oui, un peu d'eau, merci.",
      userEn: 'Yes, a little water, thank you.',
      alts: [
        { fr: "Oui, une bouteille d'eau.", en: 'Yes, a bottle of water.' },
        { fr: "Volontiers, de l'eau, merci.", en: 'Gladly, some water, thank you.' },
      ],
    },
    {
      user: 'Merci, bonne journée !',
      userEn: 'Thank you, have a good day!',
      alts: [
        { fr: 'Merci beaucoup, au revoir.', en: 'Thank you very much, goodbye.' },
        { fr: 'Voilà. Merci, à bientôt.', en: 'Here you go. Thanks, see you soon.' },
      ],
    },
  ],

  /* ── Sons 3: Les voyelles nasales ─ At the bakery ──────────────────────
   * The alternatives are deliberately loaded with nasals: pain, campagne,
   * vin, cinq, enfants. This is the turn where the lesson's sound has to
   * survive contact with a real sentence. */
  'sons.03.l1': [
    {
      user: "Un pain, s'il vous plaît.",
      userEn: 'A loaf, please.',
      alts: [
        { fr: 'Je voudrais un pain de campagne.', en: "I'd like a country loaf." },
        { fr: "Un pain complet, s'il vous plaît.", en: 'A wholemeal loaf, please.' },
      ],
    },
    {
      user: 'Oui, très bien, merci.',
      userEn: 'Yes, very good, thank you.',
      alts: [
        { fr: 'Oui, parfait.', en: 'Yes, perfect.' },
        { fr: 'Bien sûr, ça me va.', en: 'Of course, that works for me.' },
      ],
    },
    {
      user: "Non merci, c'est tout.",
      userEn: "No thank you, that's all.",
      alts: [
        { fr: 'Non, pas de vin, merci.', en: 'No wine, thank you.' },
        { fr: "C'est tout pour aujourd'hui.", en: "That's everything for today." },
      ],
    },
    {
      user: 'Nous sommes cinq.',
      userEn: 'There are five of us.',
      alts: [
        { fr: 'On est cinq.', en: 'There are five of us.' },
        { fr: 'Nous sommes cinq, avec les enfants.', en: 'Five of us, counting the children.' },
      ],
    },
    {
      user: 'Voilà, merci.',
      userEn: 'Here you go, thank you.',
      alts: [
        { fr: 'Tenez, voilà.', en: 'Here you are.' },
        { fr: 'Voilà cinq euros.', en: 'Here is five euros.' },
      ],
    },
    {
      user: 'Merci, vous aussi !',
      userEn: 'Thank you, you too!',
      alts: [
        { fr: 'Merci bien, bonne journée !', en: 'Thanks very much, have a good day!' },
        { fr: 'À vous aussi, merci !', en: 'You too, thank you!' },
      ],
    },
  ],

  /* ── Sons 5: Les accents ─ Back at the station ─────────────────────────── */
  'sons.05.l1': [
    {
      user: 'Où est le train pour Lyon ?',
      userEn: 'Where is the train to Lyon?',
      alts: [
        { fr: 'Je cherche le train pour Lyon.', en: "I'm looking for the train to Lyon." },
        { fr: 'À quelle voie part le train pour Lyon ?', en: 'Which platform does the Lyon train leave from?' },
      ],
    },
    {
      user: "Oui, et j'ai une réservation.",
      userEn: 'Yes, and I have a reservation.',
      alts: [
        { fr: 'Oui, voilà mon billet.', en: 'Yes, here is my ticket.' },
        { fr: "Oui, j'ai réservé ma place.", en: 'Yes, I reserved my seat.' },
      ],
    },
    {
      user: 'Merci, vous êtes très gentille.',
      userEn: 'Thank you, you are very kind.',
      alts: [
        { fr: 'À seize heures, très bien. Merci.', en: 'At four, very good. Thank you.' },
        { fr: "C'est noté, merci beaucoup.", en: 'Noted, thank you very much.' },
      ],
    },
    {
      user: 'Bonne journée !',
      userEn: 'Have a good day!',
      alts: [
        { fr: 'Merci, à bientôt !', en: 'Thank you, see you soon!' },
        { fr: 'Merci beaucoup, au revoir !', en: 'Thank you very much, goodbye!' },
      ],
    },
  ],

  /* ── Sons 6: Silent Letters ─ Back at the counter ──────────────────────── */
  'sons.06.l1': [
    {
      user: 'Oui, je cherche un sac.',
      userEn: "Yes, I'm looking for a bag.",
      alts: [
        { fr: 'Je voudrais un sac, merci.', en: "I'd like a bag, thank you." },
        { fr: "Bonjour, oui. Un sac, s'il vous plaît.", en: 'Morning, yes. A bag, please.' },
      ],
    },
    {
      user: 'Un petit, pas trop grand.',
      userEn: 'A small one, not too big.',
      alts: [
        { fr: 'Plutôt petit, merci.', en: 'On the small side, thank you.' },
        { fr: "Un petit, s'il vous plaît.", en: 'A small one, please.' },
      ],
    },
    {
      user: "Oui, pour l'hiver.",
      userEn: 'Yes, for winter.',
      alts: [
        { fr: 'Oui, et pour le printemps aussi.', en: 'Yes, and for spring too.' },
        { fr: 'Non, pour tous les jours.', en: 'No, for every day.' },
      ],
    },
    {
      user: "C'est un bon prix.",
      userEn: "That's a good price.",
      alts: [
        { fr: "Trente euros, d'accord.", en: 'Thirty euros, all right.' },
        { fr: "Ce n'est pas trop cher.", en: "That isn't too expensive." },
      ],
    },
    {
      user: 'Oui, avec plaisir. Merci beaucoup.',
      userEn: 'Yes, gladly. Thank you very much.',
      alts: [
        { fr: 'Oui, je le prends.', en: "Yes, I'll take it." },
        { fr: 'Volontiers, merci.', en: 'Gladly, thank you.' },
      ],
    },
  ],

  /* ── Sons 7 (course position 7): Liaison ─ Back on the platform ─────────
   * Alternatives chosen for the liaisons they force: deux_allers,
   * deux_adultes, nous_avons. */
  'sons.10.l1': [
    {
      user: "Non, c'est un aller simple pour Paris.",
      userEn: "No, it's a one-way to Paris.",
      alts: [
        { fr: 'Non, pas encore. Un aller simple pour Paris.', en: 'No, not yet. A one-way to Paris.' },
        { fr: 'Non, je voudrais deux allers simples.', en: "No, I'd like two one-way tickets." },
      ],
    },
    {
      user: 'Nous avons deux enfants avec nous.',
      userEn: 'We have two children with us.',
      alts: [
        { fr: 'Nous sommes quatre en tout.', en: 'There are four of us in all.' },
        { fr: 'On est deux adultes et deux enfants.', en: 'Two adults and two children.' },
      ],
    },
    {
      user: "D'accord, c'est un bon horaire.",
      userEn: "All right, that's a good time.",
      alts: [
        { fr: 'Dans une heure, très bien.', en: 'In an hour, very good.' },
        { fr: 'Parfait, nous avons le temps.', en: 'Perfect, we have time.' },
      ],
    },
    {
      user: 'Oui, mes amis arrivent aussi.',
      userEn: 'Yes, my friends are coming too.',
      alts: [
        { fr: 'Oui, les quatre places ensemble.', en: 'Yes, the four seats together.' },
        { fr: "Oui, s'il vous plaît, tous ensemble.", en: 'Yes please, all together.' },
      ],
    },
    {
      user: 'Merci beaucoup et bonne journée.',
      userEn: 'Thank you very much and have a good day.',
      alts: [
        { fr: 'Merci, au revoir !', en: 'Thank you, goodbye!' },
        { fr: 'Merci bien, bonne journée à vous.', en: 'Thanks very much, good day to you.' },
      ],
    },
  ],

  /* ── Sons 8 (course position 8): Elision ─ Ordering, for real ──────────
   * Every alternative carries an elision the lesson taught: j'ai, l'eau,
   * l'entrée, l'addition, d'eau. */
  'sons.07.l1': [
    {
      user: "Oui, j'ai choisi.",
      userEn: 'Yes, I have chosen.',
      alts: [
        { fr: 'Oui, je prends le menu du jour.', en: "Yes, I'll have the set menu." },
        { fr: "Oui, j'ai fait mon choix.", en: 'Yes, I have made my choice.' },
      ],
    },
    {
      user: "Une carafe d'eau, s'il vous plaît.",
      userEn: 'A jug of water, please.',
      alts: [
        { fr: "De l'eau, s'il vous plaît.", en: 'Some water, please.' },
        { fr: "Un verre d'eau, merci.", en: 'A glass of water, thank you.' },
      ],
    },
    {
      user: "Non merci, je n'ai pas très faim.",
      userEn: "No thank you, I'm not very hungry.",
      alts: [
        { fr: "Non, je n'ai pas faim.", en: "No, I'm not hungry." },
        { fr: "Oui, l'entrée du jour, s'il vous plaît.", en: 'Yes, the starter of the day, please.' },
      ],
    },
    {
      user: "D'accord, merci.",
      userEn: 'All right, thank you.',
      alts: [
        { fr: 'Merci beaucoup.', en: 'Thank you very much.' },
        { fr: 'Parfait, merci bien.', en: 'Perfect, thanks a lot.' },
      ],
    },
    {
      user: "L'addition, s'il vous plaît.",
      userEn: 'The bill, please.',
      alts: [
        { fr: "Non merci, juste l'addition.", en: 'No thank you, just the bill.' },
        { fr: "C'est tout, merci. L'addition, alors.", en: "That's all, thank you. The bill, then." },
      ],
    },
  ],

  /* ── Sons 10: Masterclass ─ The same call, for real ────────────────────── */
  'sons.09.l1': [
    {
      user: "Bonjour, c'est un ancien client.",
      userEn: "Hello, it's a long-standing customer.",
      alts: [
        { fr: 'Bonjour, je voudrais réserver une table.', en: "Hello, I'd like to book a table." },
        { fr: "Bonjour, c'est pour une réservation.", en: "Hello, it's about a booking." },
      ],
    },
    {
      user: 'Nous avons deux enfants, donc quatre.',
      userEn: 'We have two children, so four.',
      alts: [
        { fr: 'Nous sommes quatre.', en: 'There are four of us.' },
        { fr: 'Quatre personnes, deux adultes et deux enfants.', en: 'Four people, two adults and two children.' },
      ],
    },
    {
      user: "On arrive à l'heure, comme d'habitude.",
      userEn: "We'll arrive on time, as usual.",
      alts: [
        { fr: "À vingt heures, comme d'habitude.", en: 'At eight, as usual.' },
        { fr: "Vers huit heures, si c'est possible.", en: "Around eight, if that's possible." },
      ],
    },
    {
      user: "C'est un très bon choix, oui.",
      userEn: "That's a very good choice, yes.",
      alts: [
        { fr: 'Oui, la même table, merci.', en: 'Yes, the same table, thank you.' },
        { fr: 'Si elle est libre, volontiers.', en: "If it's free, gladly." },
      ],
    },
    {
      user: 'Tout est prêt, merci.',
      userEn: 'Everything is set, thank you.',
      alts: [
        { fr: 'À ce soir, merci beaucoup.', en: 'See you tonight, thank you very much.' },
        { fr: "Parfait, à tout à l'heure.", en: 'Perfect, see you shortly.' },
      ],
    },
  ],

  /* ── A1 1: Les salutations ─ Your Turn at the Bakery ───────────────────── */
  'a1.01.l1': [
    {
      user: 'Bonjour madame.',
      userEn: 'Hello madam.',
      alts: [
        { fr: 'Bonjour, madame. Ça va ?', en: 'Hello madam. How are you?' },
        { fr: 'Bonjour ! Bonne journée.', en: 'Hello! Good day.' },
      ],
    },
    {
      user: "Ça va bien, merci. Et vous ?",
      userEn: "I'm well, thank you. And you?",
      alts: [
        { fr: 'Très bien, merci. Et vous ?', en: 'Very well, thank you. And you?' },
        { fr: 'Je vais bien, merci.', en: "I'm well, thank you." },
      ],
    },
    {
      user: "Une baguette, s'il vous plaît.",
      userEn: 'A baguette, please.',
      alts: [
        { fr: 'Je voudrais une baguette.', en: "I'd like a baguette." },
        { fr: "Deux croissants, s'il vous plaît.", en: 'Two croissants, please.' },
      ],
    },
    {
      user: 'Merci beaucoup.',
      userEn: 'Thank you very much.',
      alts: [
        { fr: 'Merci, voilà.', en: 'Thank you, here you are.' },
        { fr: 'Voilà un euro dix.', en: "Here's one euro ten." },
      ],
    },
    {
      user: 'Au revoir, bonne journée !',
      userEn: 'Goodbye, have a good day!',
      alts: [
        { fr: 'Merci, au revoir !', en: 'Thank you, goodbye!' },
        { fr: 'Bonne journée à vous aussi !', en: 'Have a good day too!' },
      ],
    },
  ],

  /* ── A1 2: Les nombres 1-20 ─ Your Turn at the Stall ───────────────────── */
  'a1.02.l1': [
    {
      user: "Bonjour. Deux kilos de pommes, s'il vous plaît.",
      userEn: 'Hello. Two kilos of apples, please.',
      alts: [
        { fr: 'Bonjour. Trois kilos de pommes.', en: 'Hello. Three kilos of apples.' },
        { fr: 'Je voudrais deux kilos de pommes.', en: "I'd like two kilos of apples." },
      ],
    },
    {
      user: "Une baguette, s'il vous plaît.",
      userEn: 'A baguette, please.',
      alts: [
        { fr: "Quatre oranges, s'il vous plaît.", en: 'Four oranges, please.' },
        { fr: "C'est tout, merci.", en: "That's all, thank you." },
      ],
    },
    {
      user: 'Huit euros. Voilà.',
      userEn: 'Eight euros. Here you go.',
      alts: [
        { fr: 'Voilà huit euros.', en: "Here's eight euros." },
        { fr: "Huit euros, d'accord. Tenez.", en: 'Eight euros, all right. Here.' },
      ],
    },
    {
      user: "À treize heures, d'accord.",
      userEn: 'At one o’clock, all right.',
      alts: [
        { fr: "Treize heures, c'est noté.", en: 'One o’clock, noted.' },
        { fr: 'Je reviens avant treize heures.', en: "I'll come back before one." },
      ],
    },
    {
      user: 'Merci, au revoir.',
      userEn: 'Thank you, goodbye.',
      alts: [
        { fr: 'Au revoir, bonne journée !', en: 'Goodbye, have a good day!' },
        { fr: 'Merci beaucoup, à bientôt.', en: 'Thank you very much, see you soon.' },
      ],
    },
  ],

  /* ── A1 3: Les nombres 21-100 ─ Taking Her Number ──────────────────────
   * The alternatives keep the numbers in the learner's mouth: this is the
   * lesson where quatre-vingt-douze has to come out under pressure. */
  'a1.27.l1': [
    {
      user: 'Oui. Vous avez un numéro ?',
      userEn: 'Yes. Do you have a number?',
      alts: [
        { fr: 'Oui, je le prends. Votre numéro ?', en: "Yes, I'll take it. Your number?" },
        { fr: 'Oui. Quel est votre numéro de téléphone ?', en: 'Yes. What is your phone number?' },
      ],
    },
    {
      user: 'Zéro six, quatre-vingt-douze, soixante-quinze.',
      userEn: 'Zero six, ninety-two, seventy-five.',
      alts: [
        { fr: "Quatre-vingt-douze, soixante-quinze. C'est ça ?", en: 'Ninety-two, seventy-five. Is that right?' },
        { fr: 'Pardon, vous pouvez répéter ? Quatre-vingt-douze ?', en: 'Sorry, could you repeat that? Ninety-two?' },
      ],
    },
    {
      user: "Quatre-vingt-un, trente-trois. C'est noté.",
      userEn: 'Eighty-one, thirty-three. Got it.',
      alts: [
        { fr: 'Quatre-vingt-un, trente-trois. Merci.', en: 'Eighty-one, thirty-three. Thank you.' },
        { fr: 'Donc quatre-vingt-un, puis trente-trois.', en: 'So eighty-one, then thirty-three.' },
      ],
    },
    {
      user: "Quatre-vingt-quinze euros de charges. D'accord.",
      userEn: 'Ninety-five euros of charges. All right.',
      alts: [
        { fr: 'Quatre-vingt-quinze euros par mois ?', en: 'Ninety-five euros a month?' },
        { fr: "D'accord, quatre-vingt-quinze euros en plus.", en: 'All right, ninety-five euros on top.' },
      ],
    },
    {
      user: 'Merci, à demain.',
      userEn: 'Thank you, see you tomorrow.',
      alts: [
        { fr: 'Très bien, je vous appelle demain.', en: "Very good, I'll call you tomorrow." },
        { fr: 'Merci beaucoup, bonne journée.', en: 'Thank you very much, have a good day.' },
      ],
    },
  ],

  /* ── A1 4: Les grands nombres ─ Signing For The Flat ───────────────────── */
  'a1.28.l1': [
    {
      user: "Huit cent cinquante euros. D'accord.",
      userEn: 'Eight hundred fifty euros. All right.',
      alts: [
        { fr: "Huit cent cinquante par mois, c'est noté.", en: 'Eight hundred fifty a month, noted.' },
        { fr: "Huit cent cinquante ? C'est dans mon budget.", en: "Eight hundred fifty? That's within my budget." },
      ],
    },
    {
      user: "Deux mille cinq cents. Je l'écris en toutes lettres ?",
      userEn: 'Two thousand five hundred. Shall I write it out in words?',
      alts: [
        { fr: "Deux mille cinq cents euros, d'accord.", en: 'Two thousand five hundred euros, all right.' },
        { fr: 'Deux mille cinq cents, en une fois ?', en: 'Two thousand five hundred, in one payment?' },
      ],
    },
    {
      user: "Cent vingt euros de charges. C'est noté.",
      userEn: 'One hundred twenty euros of charges. Got it.',
      alts: [
        { fr: 'Cent vingt euros par mois aussi ?', en: 'One hundred twenty euros a month as well?' },
        { fr: "D'accord, cent vingt euros de charges.", en: 'All right, one hundred twenty euros of charges.' },
      ],
    },
    {
      user: 'Mille neuf cent trente-huit. Il est beau.',
      userEn: "Nineteen thirty-eight. It's beautiful.",
      alts: [
        { fr: 'Mille neuf cent trente-huit, déjà !', en: 'Nineteen thirty-eight, already!' },
        { fr: 'Il date de mille neuf cent trente-huit ? Magnifique.', en: 'It dates from nineteen thirty-eight? Magnificent.' },
      ],
    },
    {
      user: 'Merci beaucoup. À bientôt.',
      userEn: 'Thank you very much. See you soon.',
      alts: [
        { fr: 'Merci ! Au revoir.', en: 'Thank you! Goodbye.' },
        { fr: 'Merci beaucoup, bonne journée.', en: 'Thank you very much, have a good day.' },
      ],
    },
  ],

  /* ── A1 5: Le genre des noms ─ Your Turn at the Shop ───────────────────
   * The alternatives all carry a determiner, because the whole lesson is
   * which one. une ampoule, la salle de bains, un couteau. */
  'a1.03.l1': [
    {
      user: 'Bonjour. Je cherche une ampoule.',
      userEn: "Hello. I'm looking for a bulb.",
      alts: [
        { fr: 'Bonjour. Il me faut une ampoule.', en: 'Hello. I need a bulb.' },
        { fr: 'Bonjour, vous avez des ampoules ?', en: 'Hello, do you have any bulbs?' },
      ],
    },
    {
      user: 'Pour la cuisine.',
      userEn: 'For the kitchen.',
      alts: [
        { fr: 'Pour la salle de bains.', en: 'For the bathroom.' },
        { fr: "C'est pour le salon.", en: "It's for the living room." },
      ],
    },
    {
      user: 'Il me faut aussi un couteau.',
      userEn: 'I also need a knife.',
      alts: [
        { fr: 'Je voudrais aussi un couteau.', en: "I'd also like a knife." },
        { fr: "Un couteau, s'il vous plaît.", en: 'A knife, please.' },
      ],
    },
    {
      user: "Oui, c'est ça. Et le prix ?",
      userEn: "Yes, that's it. And the price?",
      alts: [
        { fr: 'Oui, exactement. Il coûte combien ?', en: 'Yes, exactly. How much is it?' },
        { fr: "Oui, un couteau de cuisine. C'est combien ?", en: 'Yes, a kitchen knife. How much is it?' },
      ],
    },
    {
      user: "D'accord. Merci beaucoup.",
      userEn: 'All right. Thank you very much.',
      alts: [
        { fr: 'Douze euros, très bien. Merci.', en: 'Twelve euros, very good. Thank you.' },
        { fr: 'Parfait, je prends les deux.', en: "Perfect, I'll take both." },
      ],
    },
  ],

  /* ── A1 6: Les articles définis ─ Your Turn At The Counter ─────────────
   * le / la / les throughout, including the generic use ("je n'aime pas les
   * tartes") the lesson exists to teach. */
  'a1.04.l1': [
    {
      user: "Bonjour. Le café au lait, s'il vous plaît.",
      userEn: 'Hello. The café au lait, please.',
      alts: [
        { fr: "Bonjour. Le thé, s'il vous plaît.", en: 'Hello. The tea, please.' },
        { fr: 'Bonjour, je prends le café au lait.', en: "Hello, I'll have the café au lait." },
      ],
    },
    {
      user: "Non merci. Je n'aime pas les tartes.",
      userEn: "No thank you. I don't like tarts.",
      alts: [
        { fr: 'Non merci, je préfère les croissants.', en: 'No thank you, I prefer croissants.' },
        { fr: "Oui, j'adore les tartes !", en: 'Yes, I love tarts!' },
      ],
    },
    {
      user: "Non, j'apprends le français ici.",
      userEn: "No, I'm learning French here.",
      alts: [
        { fr: "Non, j'étudie le français.", en: "No, I'm studying French." },
        { fr: "Oui, j'aime beaucoup la ville.", en: 'Yes, I like the city a lot.' },
      ],
    },
    {
      user: "Oui, mais j'aime la langue.",
      userEn: 'Yes, but I love the language.',
      alts: [
        { fr: 'Oui, surtout la prononciation.', en: 'Yes, especially the pronunciation.' },
        { fr: "C'est vrai, mais j'adore le français.", en: "That's true, but I love French." },
      ],
    },
    {
      user: 'Merci beaucoup.',
      userEn: 'Thank you very much.',
      alts: [
        { fr: "Merci, c'est parfait.", en: "Thank you, that's perfect." },
        { fr: 'Merci ! Bonne journée.', en: 'Thank you! Have a good day.' },
      ],
    },
  ],

  /* ── A1 7: Les articles indéfinis ─ Your Turn at the Desk ──────────────
   * un / une / des, and the un → le shift once the room is the one they
   * agreed on, which is the contrast the lesson is built around. */
  'a1.11.l1': [
    {
      user: 'Bonsoir. Je cherche une chambre.',
      userEn: "Good evening. I'm looking for a room.",
      alts: [
        { fr: 'Bonsoir. Vous avez une chambre libre ?', en: 'Good evening. Do you have a room free?' },
        { fr: 'Bonsoir, je voudrais une chambre.', en: "Good evening, I'd like a room." },
      ],
    },
    {
      user: "Pour une nuit, s'il vous plaît.",
      userEn: 'For one night, please.',
      alts: [
        { fr: 'Pour deux nuits.', en: 'For two nights.' },
        { fr: 'Une nuit seulement.', en: 'One night only.' },
      ],
    },
    {
      user: 'Je prends la chambre.',
      userEn: "I'll take the room.",
      alts: [
        { fr: 'Parfait, je la prends.', en: "Perfect, I'll take it." },
        { fr: "Très bien. C'est une grande chambre ?", en: 'Very good. Is it a big room?' },
      ],
    },
    {
      user: 'Il y a des croissants ?',
      userEn: 'Are there croissants?',
      alts: [
        { fr: 'Il y a un buffet ?', en: 'Is there a buffet?' },
        { fr: 'Parfait, à sept heures.', en: 'Perfect, at seven.' },
      ],
    },
    {
      user: 'Merci beaucoup. Bonne soirée !',
      userEn: 'Thank you very much. Good evening!',
      alts: [
        { fr: 'Merci ! Bonne nuit.', en: 'Thank you! Good night.' },
        { fr: 'Merci beaucoup, à demain.', en: 'Thank you very much, see you tomorrow.' },
      ],
    },
  ],

  /* ── A1 8: Les articles partitifs ─ Your Turn at the Counter ───────────
   * du, de la, de l' in every alternative that can carry one. */
  'a1.29.l1': [
    {
      user: "Bonjour. Je voudrais du pain, s'il vous plaît.",
      userEn: "Hello. I'd like some bread, please.",
      alts: [
        { fr: "Bonjour. Du pain, s'il vous plaît.", en: 'Hello. Some bread, please.' },
        { fr: 'Bonjour, je prends du pain et du beurre.', en: "Hello, I'll have some bread and some butter." },
      ],
    },
    {
      user: 'Du fromage. Une tranche, pas plus.',
      userEn: 'Some cheese. One slice, no more.',
      alts: [
        { fr: "Du fromage, s'il vous plaît.", en: 'Some cheese, please.' },
        { fr: 'Je voudrais aussi de la confiture.', en: "I'd also like some jam." },
      ],
    },
    {
      user: "Oui, très bien. Et de l'eau ?",
      userEn: 'Yes, very good. And some water?',
      alts: [
        { fr: "Oui, parfait. Vous avez de l'eau ?", en: 'Yes, perfect. Do you have any water?' },
        { fr: 'Volontiers. Et de la crème, vous en avez ?', en: 'Gladly. And cream, do you have any?' },
      ],
    },
    {
      user: "Une bouteille d'eau, alors. Merci.",
      userEn: 'A bottle of water, then. Thank you.',
      alts: [
        { fr: "Parfait, je prends de l'eau.", en: "Perfect, I'll take some water." },
        { fr: 'Merci, une grande bouteille.', en: 'Thank you, a large bottle.' },
      ],
    },
    {
      user: 'Voilà. Bonne journée !',
      userEn: 'Here you go. Have a good day!',
      alts: [
        { fr: 'Voilà neuf euros cinquante. Merci.', en: "Here's nine euros fifty. Thank you." },
        { fr: 'Tenez. Merci, au revoir !', en: 'Here. Thank you, goodbye!' },
      ],
    },
  ],

  /* ── A1 9: Les pronoms sujets ─ Your Turn at the Table ─────────────────
   * on / nous, ils / elles, elle, je. The lesson's whole point is which
   * person is speaking, so the alternatives change the pronoun, not the
   * wording around it. */
  'a1.05.l1': [
    {
      user: 'On est trois.',
      userEn: 'There are three of us.',
      alts: [
        { fr: 'Nous sommes trois.', en: 'There are three of us.' },
        { fr: 'On est trois, mais ils arrivent.', en: "Three of us, but they're on their way." },
      ],
    },
    {
      user: 'Pas encore. Ils arrivent.',
      userEn: "Not yet. They're on their way.",
      alts: [
        { fr: 'Pas encore, elles arrivent.', en: "Not yet, they're on their way." },
        { fr: 'Non, nous attendons deux amis.', en: "No, we're waiting for two friends." },
      ],
    },
    {
      user: 'Elle prend un café.',
      userEn: "She's having a coffee.",
      alts: [
        { fr: 'Elle prend un thé.', en: "She's having a tea." },
        { fr: 'Oui, elle prend un café au lait.', en: "Yes, she's having a café au lait." },
      ],
    },
    {
      user: "J'ai soif. Une carafe d'eau, s'il vous plaît.",
      userEn: "I'm thirsty. A jug of water, please.",
      alts: [
        { fr: 'Je prends un café aussi.', en: "I'll have a coffee too." },
        { fr: "Moi, je voudrais de l'eau.", en: "Me, I'd like some water." },
      ],
    },
    {
      user: 'Merci beaucoup.',
      userEn: 'Thank you very much.',
      alts: [
        { fr: "Merci, c'est gentil.", en: "Thank you, that's kind." },
        { fr: 'Merci bien.', en: 'Thanks very much.' },
      ],
    },
  ],

  /* ── A1 10: Le verbe être ─ Your Turn At The Badge Table ───────────────
   * je suis, il est, nous sommes, elle est. Every alternative conjugates. */
  'a1.06.l1': [
    {
      user: 'Oui, je suis architecte.',
      userEn: "Yes, I'm an architect.",
      alts: [
        { fr: 'Oui, je suis ingénieure.', en: "Yes, I'm an engineer." },
        { fr: 'Oui, nous sommes ici pour la conférence.', en: "Yes, we're here for the conference." },
      ],
    },
    {
      user: 'Je suis de Lyon. Et vous ?',
      userEn: "I'm from Lyon. And you?",
      alts: [
        { fr: 'Je suis anglais. Et vous ?', en: "I'm English. And you?" },
        { fr: 'Je suis de Nantes.', en: "I'm from Nantes." },
      ],
    },
    {
      user: "Oui, c'est mon collègue. Il est ingénieur.",
      userEn: "Yes, that's my colleague. He's an engineer.",
      alts: [
        { fr: 'Oui, il est ingénieur.', en: "Yes, he's an engineer." },
        { fr: "Non, c'est un ami. Il est professeur.", en: "No, that's a friend. He's a teacher." },
      ],
    },
    {
      user: 'Non, nous sommes en retard !',
      userEn: "No, we're late!",
      alts: [
        { fr: 'Oui, nous sommes prêts.', en: "Yes, we're ready." },
        { fr: 'Presque ! Elle est prête, moi non.', en: "Almost! She's ready, I'm not." },
      ],
    },
    {
      user: 'Merci beaucoup.',
      userEn: 'Thank you very much.',
      alts: [
        { fr: "Merci, à tout à l'heure !", en: 'Thank you, see you later!' },
        { fr: 'Merci ! Bonne conférence.', en: 'Thank you! Enjoy the conference.' },
      ],
    },
  ],

  /* ── A1 11: Le verbe avoir ─ At The Chemist ────────────────────────────
   * Course position 11, just past the range this batch was asked for. It is
   * included because it is the same scenario shape as the ten before it, and
   * leaving exactly one lesson in the sequence without alternatives would be
   * a ragged edge a learner walks straight into.
   *
   * j'ai mal, j'ai de la fièvre, j'ai soif, j'ai vingt ans, j'ai besoin de:
   * the avoir idioms are the lesson, so they are what varies. */
  'a1.07.l1': [
    {
      user: "Bonjour. J'ai mal à la tête depuis ce matin.",
      userEn: "Hello. I've had a headache since this morning.",
      alts: [
        { fr: "Bonjour. J'ai mal à la gorge.", en: 'Hello. I have a sore throat.' },
        { fr: "Bonjour. J'ai mal au dos depuis hier.", en: "Hello. I've had a bad back since yesterday." },
      ],
    },
    {
      user: "Je ne sais pas. J'ai chaud, oui.",
      userEn: "I don't know. I do feel hot.",
      alts: [
        { fr: "Oui, j'ai de la fièvre.", en: 'Yes, I have a fever.' },
        { fr: "Non, mais j'ai froid.", en: 'No, but I feel cold.' },
      ],
    },
    {
      user: "Oui, très soif. Et j'ai sommeil.",
      userEn: "Yes, very thirsty. And I'm sleepy.",
      alts: [
        { fr: "Oui, j'ai très soif.", en: "Yes, I'm very thirsty." },
        { fr: "Non, mais j'ai sommeil.", en: "No, but I'm sleepy." },
      ],
    },
    {
      user: "J'ai vingt ans.",
      userEn: "I'm twenty.",
      alts: [
        { fr: "J'ai trente-deux ans.", en: "I'm thirty-two." },
        { fr: "J'ai vingt-cinq ans.", en: "I'm twenty-five." },
      ],
    },
    {
      user: "Merci. J'ai besoin d'eau, alors.",
      userEn: 'Thank you. I need water, then.',
      alts: [
        { fr: "Merci. J'ai besoin d'une ordonnance ?", en: 'Thank you. Do I need a prescription?' },
        { fr: "D'accord, merci beaucoup.", en: 'All right, thank you very much.' },
      ],
    },
  ],
};
