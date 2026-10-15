// One-off: insert the Phase 10 strings into src/i18n/strings.ts.
// Write/Edit can turn NBSP into plain spaces, so French values here use tokens
// (~N~ = U+202F, ~B~ = U+00A0, ~E~ = U+2026) that this script rewrites to JS
// escape text (backslash-u sequences) in the target. Run once: node scripts/phase10-strings.mjs
import fs from 'node:fs';

const BS = String.fromCharCode(92);
const file = new URL('../src/i18n/strings.ts', import.meta.url);
const src = fs.readFileSync(file, 'utf8');
const eol = src.includes('\r\n') ? '\r\n' : '\n';

const fr = {
  probTitle: 'Signaler un problème',
  probIntro: 'Dites-nous ce qui ne va pas. Nous lisons chaque message.',
  probIntroContent: 'Vous signalez une erreur dans cet élément.',
  probCatLabel: "QU'EST-CE QUI NE VA PAS",
  probCatGroupA11y: 'Ce qui ne va pas, obligatoire',
  probCats: {
    audio: 'Audio ou voix',
    grading: 'La correction semble fausse',
    content: 'Erreur de contenu',
    crash: "L'appli a planté ou s'est figée",
    payment: 'Paiement ou accès',
    other: 'Autre chose',
  },
  probSelected: 'Choix~B~: {c}',
  probCatHint: 'Choisissez ce qui ne va pas pour envoyer',
  probDetailsLabel: 'Détails (facultatif)',
  probDetailsPh: "Que s'est-il passé~N~?",
  probIncludedShort: 'Ce qui est envoyé~B~: version, écran, erreurs récentes. Jamais vos réponses ni vos enregistrements.',
  probIncludedList: [
    "Version de l'appli, mise à jour et plateforme",
    "L'écran où vous étiez, et l'identifiant de la leçon ou de l'élément",
    "Les 10 derniers messages d'erreur de cette session",
    'Modèle du téléphone, taille du texte, thème clair ou sombre',
    'Votre e-mail, seulement si vous cochez «~N~Vous pouvez me contacter~N~»',
    'Jamais~B~: vos réponses, ce que vous avez dit, vos enregistrements',
  ],
  probContact: 'Vous pouvez me contacter',
  probContactSub: "Nous utilisons l'e-mail de votre compte pour répondre, seulement si vous cochez cette case.",
  probSend: 'Envoyer le signalement',
  probSending: 'Envoi en cours~E~',
  probSentT: 'Envoyé. Merci.',
  probSentS: 'Votre signalement nous est bien parvenu.',
  probQueuedT: 'Enregistré',
  probQueuedOffline: 'Il sera envoyé dès que vous serez de nouveau en ligne.',
  probQueuedLimited: "Nous ne pouvons pas l'envoyer aujourd'hui. Il est enregistré et partira demain ou plus tard.",
  probQueuedBusy: "Nous n'avons pas pu l'envoyer pour le moment. Il est enregistré et nous réessaierons plus tard.",
  probErr4xx: "Nous n'avons pas pu envoyer ce signalement. Vérifiez le texte et réessayez.",
  probSaveFailed: "Impossible d'enregistrer votre signalement. Réessayez.",
  probRetry: 'Réessayer',
  probClose: 'Fermer',
  probSettingsT: 'Signaler un problème',
  probSettingsSub: 'Quelque chose ne marche pas~N~? Dites-le-nous.',
  storeSec: 'Play Store',
  rateT: 'Noter Ealch',
  rateSub: 'Ouvre la page du Play Store.',
  rateA11y: 'Noter Ealch, ouvre le Play Store',
  rateOpenFail: "Impossible d'ouvrir le Play Store. Réessayez plus tard.",
  probAction: 'Signaler un problème',
  probAudioA11y: 'Signaler un problème audio',
  probGradingA11y: 'Signaler un problème de correction',
  menuMoreA11y: "Plus d'options",
  probFlagA11y: 'Signaler un problème avec cet élément',
  profileReportT: 'Votre rapport',
  profileReportSub: 'Votre précision et les mots à revoir.',
  reportRingA11y: 'précision, {n} pour cent',
  reportWeakA11y: '{fr}, {c} sur {s} réussis, ouvrir la leçon',
};

const en = {
  probTitle: 'Report a problem',
  probIntro: 'Tell us what is wrong. We read every report.',
  probIntroContent: 'You are reporting a mistake in this item.',
  probCatLabel: 'WHAT WENT WRONG',
  probCatGroupA11y: 'What went wrong, required',
  probCats: {
    audio: 'Audio or voice',
    grading: 'Grading felt wrong',
    content: 'Content mistake',
    crash: 'App froze or crashed',
    payment: 'Payment or access',
    other: 'Something else',
  },
  probSelected: '{c} selected',
  probCatHint: 'Choose what went wrong to send',
  probDetailsLabel: 'Details (optional)',
  probDetailsPh: 'What happened?',
  probIncludedShort: "What's included: app version, screen, recent errors. Never your answers or recordings.",
  probIncludedList: [
    'App version, update and platform',
    'The screen you were on, and the lesson or item id',
    'The last 10 error messages from this session',
    'Phone model, text size, and light or dark theme',
    'Your email, only if you tick "You can contact me"',
    'Never included: your answers, what you said, or your recordings',
  ],
  probContact: 'You can contact me',
  probContactSub: 'We use your account email to reply, only if you tick this box.',
  probSend: 'Send report',
  probSending: 'Sending~E~',
  probSentT: 'Sent. Thank you.',
  probSentS: 'Your report reached us.',
  probQueuedT: 'Saved',
  probQueuedOffline: 'It will send when you are back online.',
  probQueuedLimited: 'We cannot send it today. It is saved and will go tomorrow or later.',
  probQueuedBusy: 'We could not send it right now. It is saved and we will try again later.',
  probErr4xx: 'We could not send this report. Check the text and try again.',
  probSaveFailed: 'Could not save your report. Try again.',
  probRetry: 'Try again',
  probClose: 'Close',
  probSettingsT: 'Report a problem',
  probSettingsSub: 'Something broken or wrong? Tell us.',
  storeSec: 'Play Store',
  rateT: 'Rate Ealch',
  rateSub: 'Opens the Play Store page.',
  rateA11y: 'Rate Ealch, opens the Play Store',
  rateOpenFail: 'Could not open the Play Store. Try again later.',
  probAction: 'Report a problem',
  probAudioA11y: 'Report an audio problem',
  probGradingA11y: 'Report a grading problem',
  menuMoreA11y: 'More options',
  probFlagA11y: 'Report a problem with this item',
  profileReportT: 'Your report',
  profileReportSub: 'Your accuracy and the words to review.',
  reportRingA11y: 'accuracy, {n} percent',
  reportWeakA11y: '{fr}, {c} of {s} correct, open the lesson',
};

const lit = (v) => {
  let t = v
    .replace(/~N~/g, BS + 'u202F')
    .replace(/~B~/g, BS + 'u00A0')
    .replace(/~E~/g, BS + 'u2026');
  t = t.replace(/'/g, BS + "'");
  return "'" + t + "'";
};

const emit = (o, ind) =>
  Object.entries(o)
    .map(([k, v]) => {
      if (Array.isArray(v)) {
        return `${ind}${k}: [${eol}${v.map((x) => `${ind}  ${lit(x)},`).join(eol)}${eol}${ind}],`;
      }
      if (typeof v === 'object') {
        return `${ind}${k}: { ${Object.entries(v).map(([a, b]) => `${a}: ${lit(b)}`).join(', ')} },`;
      }
      return `${ind}${k}: ${lit(v)},`;
    })
    .join(eol);

if (src.includes('probTitle')) throw new Error('probTitle already present, refusing to run');

const typeLines = [];
for (const [k, v] of Object.entries(fr)) {
  if (Array.isArray(v)) typeLines.push(`  ${k}: string[];`);
  else if (typeof v === 'object') typeLines.push(`  ${k}: { ${Object.keys(v).map((a) => `${a}: string`).join('; ')} };`);
  else typeLines.push(`  ${k}: string;`);
}

const lines = src.split(eol);
const idx = lines.map((l, i) => (l.includes('drillNames:') ? i : -1)).filter((i) => i >= 0);
if (idx.length !== 3) throw new Error('expected 3 drillNames lines, got ' + idx.length);
// insert from the bottom up so earlier indexes stay valid
lines.splice(idx[2] + 1, 0, emit(en, '    '));
lines.splice(idx[1] + 1, 0, emit(fr, '    '));
lines.splice(idx[0] + 1, 0, typeLines.join(eol));
fs.writeFileSync(file, lines.join(eol));
console.log('inserted', Object.keys(fr).length, 'keys');
