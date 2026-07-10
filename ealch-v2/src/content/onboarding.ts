// Onboarding wizard option data ported from the prototype.
export const goalsData = [
  { id: 'exam', title: 'Immigration & exams', sub: 'TEF, TCF, DELF — with an examiner who interrupts' },
  { id: 'survive', title: 'Survive daily life', sub: 'Banks, landlords, cafés, bureaucracy' },
  { id: 'paris', title: 'Sound Parisian', sub: 'Argot, contractions, street rhythm' },
  { id: 'work', title: 'French for work', sub: 'Meetings, email register, small talk' },
];

export const expData = [
  { id: 'zero', title: 'Grand débutant', sub: 'I am starting from zero' },
  { id: 'school', title: "Souvenirs d'école", sub: 'school French, mostly forgotten' },
  { id: 'conv', title: 'Conversationnel', sub: 'I can hold simple conversations' },
  { id: 'adv', title: 'Avancé', sub: 'polishing accent & register' },
];

export const paceData = [
  { id: '5 min', v: '5 min', s: 'une pause café' },
  { id: '10 min', v: '10 min', s: 'le trajet du matin' },
  { id: '15 min', v: '15 min', s: 'sérieux' },
  { id: '20 min', v: '20 min', s: 'immersion' },
];

export const accentData = [
  { id: 'Parisienne', name: 'Parisienne', sub: 'the standard — crisp, fast, urbane' },
  { id: 'Québécois', name: 'Québécois', sub: 'North America — its own music' },
  { id: 'Belge', name: 'Belge', sub: 'softer, slower, septante & nonante' },
  { id: 'Africain', name: 'Africain francophone', sub: 'Dakar to Abidjan — clear & melodic' },
];

export const alarmData = [
  { time: '07:30', label: 'matin' },
  { time: '12:30', label: 'midi' },
  { time: '19:00', label: 'soir' },
  { time: '21:30', label: 'nuit' },
];

export const isBeginnerExp = (exp: string) => exp === 'zero' || exp === 'school';
