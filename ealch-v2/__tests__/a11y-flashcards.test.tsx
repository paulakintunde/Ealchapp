/// <reference types="jest" />
import { ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { act, fireEvent, render, screen } from '@testing-library/react-native';
import Flashcards from '../app/flashcards';
import { content } from '@/services/content';
import { useStore } from '@/store/useStore';
import type { Item } from '@/content/schema';

jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  useFocusEffect: jest.fn(),
  useRouter: () => ({ back: jest.fn(), push: jest.fn(), replace: jest.fn() }),
  useLocalSearchParams: () => ({}),
}));

const metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};
const longFront = 'Une question française assez longue pour dépasser la hauteur de la carte à grande taille de texte. '.repeat(12);
const longBack = 'An extended answer and teaching note that must stay readable at the selected OS font size. '.repeat(12);
const cards: Item[] = [
  { id: 'a11y-card-1', kind: 'word', level: 'a1', theme: 'test', fr: longFront, en: longBack, tags: [], drills: ['flashcard'], version: 1 },
  { id: 'a11y-card-2', kind: 'word', level: 'a1', theme: 'test', fr: 'Deuxième carte', en: 'Second card', tags: [], drills: ['flashcard'], version: 1 },
];

beforeEach(() => {
  useStore.setState({ lang: 'en', level: 'a1' });
  jest.spyOn(content, 'itemsFor').mockReturnValue(cards);
});
afterEach(() => jest.restoreAllMocks());

test('long front and back content sits inside bounded face scroll views, with separate Flip and audio buttons', async () => {
  await render(<SafeAreaProvider initialMetrics={metrics}><Flashcards /></SafeAreaProvider>);
  expect(screen.getByText(longFront).props.numberOfLines).toBeUndefined();
  const scrolls = [
    screen.getByTestId('flashcard-front-scroll'),
    screen.getByTestId('flashcard-back-scroll', { includeHiddenElements: true }),
  ];
  expect(scrolls.every((view) => view.props.nestedScrollEnabled && view.props.style.flex === 1)).toBe(true);
  expect(screen.getByRole('button', { name: /flip card/i })).toBeTruthy();
  expect(screen.getAllByRole('button', { name: /play pronunciation/i })).toHaveLength(1);
  expect(screen.getByRole('button', { name: /again/i })).toBeTruthy();
  expect(screen.getByRole('button', { name: /got it/i })).toBeTruthy();

  await fireEvent.press(screen.getByRole('button', { name: /flip card/i }));
  expect(screen.getByText(longBack).props.numberOfLines).toBeUndefined();
  expect(screen.getAllByRole('button', { name: /play pronunciation/i })).toHaveLength(1);
});

test('flipping and advancing reset face scroll to the top', async () => {
  const scrollTo = jest.spyOn(ScrollView.prototype, 'scrollTo').mockImplementation(() => {});
  jest.useFakeTimers();
  try {
    await render(<SafeAreaProvider initialMetrics={metrics}><Flashcards /></SafeAreaProvider>);
    await fireEvent.press(screen.getByRole('button', { name: /flip card/i }));
    expect(scrollTo).toHaveBeenCalledWith({ y: 0, animated: false });
    scrollTo.mockClear();
    await fireEvent.press(screen.getByRole('button', { name: /got it/i }));
    expect(scrollTo).toHaveBeenCalledWith({ y: 0, animated: false });
    await act(async () => { jest.advanceTimersByTime(220); });
    expect(screen.getByText('Deuxième carte')).toBeTruthy();
  } finally {
    jest.useRealTimers();
  }
});
