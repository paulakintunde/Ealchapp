/// <reference types="jest" />
// Phase 10 / D-31 R4: Le Rapport component test. Populated, empty and
// exam-review-only logs, in both languages, plus agreement with the Profile
// accuracy StatCard (N7).
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { screen } from '@testing-library/react-native';
import Report from '../app/report';
import Profile from '../app/profile';
import { useProgress } from '@/store/useProgress';
import { T } from '@/i18n/strings';
import { renderInLocale, type Locale } from './helpers/renderInLocale';

const metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};

let n = 0;
const att = (activity: string, correct: boolean) => ({
  id: `a${n++}`,
  date: '2026-10-14',
  activity,
  itemId: `item-${n}`,
  expected: 'bonjour',
  heard: correct ? 'bonjour' : '',
  score: correct ? 1 : 0,
  verdict: correct ? 'good' : 'miss',
  correct,
  modality: 'produce',
});

const populated = () => [
  att('lesson', true), att('lesson', true), att('lesson', true), att('lesson', false),
  att('flashcards', true), att('flashcards', true),
  att('exam-review', false), att('exam-review', false), att('exam-review', false),
] as never[];

const ui = (el: React.ReactElement) => <SafeAreaProvider initialMetrics={metrics}>{el}</SafeAreaProvider>;

describe.each(['fr', 'en'] as Locale[])('Le Rapport (%s)', (lang) => {
  const S = T[lang];
  const ring = lang === 'fr' ? 'précision, 83 pour cent' : 'accuracy, 83 percent';

  test('empty log shows the empty state and no ring', async () => {
    useProgress.setState({ attempts: [] });
    await renderInLocale(ui(<Report />), lang);
    expect(screen.getByText(S.reportEmptyT)).toBeTruthy();
    expect(screen.queryByLabelText(ring)).toBeNull();
  });

  test('exam-review-only log is still the empty state', async () => {
    useProgress.setState({ attempts: [att('exam-review', false), att('exam-review', false)] as never[] });
    await renderInLocale(ui(<Report />), lang);
    expect(screen.getByText(S.reportEmptyT)).toBeTruthy();
  });

  test('populated log announces the ring and names every drill', async () => {
    useProgress.setState({ attempts: populated() });
    await renderInLocale(ui(<Report />), lang);
    expect(screen.getByLabelText(ring)).toBeTruthy();
    expect(screen.getByText(S.drillNames.lesson)).toBeTruthy();
    expect(screen.getByText(S.drillNames.flashcards)).toBeTruthy();
    expect(screen.queryByText('exam-review')).toBeNull();
    expect(screen.queryByText('lesson')).toBeNull();
    expect(screen.queryByText(S.drillNames['exam-review'])).toBeNull();
  });

  test('Profile accuracy StatCard agrees with the ring (83%)', async () => {
    useProgress.setState({ attempts: populated() });
    await renderInLocale(ui(<Profile />), lang);
    expect(screen.getByText('83%')).toBeTruthy();
  });
});
