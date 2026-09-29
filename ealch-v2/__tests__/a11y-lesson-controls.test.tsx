/// <reference types="jest" />
import { fireEvent, render, screen } from '@testing-library/react-native';
import { DeckNavigation, QuestionModal } from '@/components/LessonDeck';
import { ClockToggle, TimeWheel } from '@/components/TimeWheel';
import { useStore } from '@/store/useStore';

beforeEach(() => useStore.setState({ lang: 'en', clock24: false }));

test('answer choice has a name and selection state without changing the answer callback', async () => {
  const onAnswer = jest.fn();
  await render(<QuestionModal open question={{ q: 'Which word?', opts: ['chat', 'chien'], correct: 0 }} onClose={jest.fn()} onAnswer={onAnswer} />);
  const choice = screen.getByRole('button', { name: 'chat' });
  expect(choice.props.accessibilityState.selected).toBe(false);
  await fireEvent.press(choice);
  expect(onAnswer).toHaveBeenCalledWith(true, 0);
  expect(screen.getByRole('button', { name: 'chat' }).props.accessibilityState.selected).toBe(true);
  expect(screen.getByRole('button', { name: 'chien' }).props.accessibilityState.disabled).toBe(true);
});

test('clock choices expose their selected radio state and update the saved setting', async () => {
  await render(<ClockToggle />);
  const clock24 = screen.getByRole('radio', { name: /24/ });
  expect(clock24.props.accessibilityState.selected).toBe(false);
  await fireEvent.press(clock24);
  expect(useStore.getState().clock24).toBe(true);
  expect(screen.getByRole('radio', { name: /24/ }).props.accessibilityState.selected).toBe(true);
});

test('time stepper icon controls announce their function and current value', async () => {
  const onChange = jest.fn();
  await render(<TimeWheel value="19:30" onChange={onChange} />);
  const increaseHour = screen.getByRole('button', { name: 'Increase hour' });
  expect(increaseHour.props.accessibilityHint).toBe('Current value: 7');
  await fireEvent.press(increaseHour);
  expect(onChange).toHaveBeenCalledWith('20:30');
  expect(screen.queryByRole('button', { name: ':' })).toBeNull();
});

test('card navigation names its actions and disables only the unavailable edge', async () => {
  const onPrevious = jest.fn();
  const onNext = jest.fn();
  const view = await render(<DeckNavigation index={0} total={3} onPrevious={onPrevious} onNext={onNext} />);
  expect(screen.getByText(/TalkBack, you can also swipe with two fingers/)).toBeTruthy();
  expect(screen.getByRole('progressbar', { name: 'Card 1 of 3' })).toBeTruthy();
  expect(screen.getByRole('button', { name: 'Previous card' }).props.accessibilityState.disabled).toBe(true);
  await fireEvent.press(screen.getByRole('button', { name: 'Next card' }));
  expect(onNext).toHaveBeenCalledTimes(1);
  expect(onPrevious).not.toHaveBeenCalled();

  await view.rerender(<DeckNavigation index={2} total={3} onPrevious={onPrevious} onNext={onNext} />);
  expect(screen.getByRole('progressbar', { name: 'Card 3 of 3' })).toBeTruthy();
  expect(screen.getByRole('button', { name: 'Next card' }).props.accessibilityState.disabled).toBe(true);
  await fireEvent.press(screen.getByRole('button', { name: 'Previous card' }));
  expect(onPrevious).toHaveBeenCalledTimes(1);

  useStore.setState({ lang: 'fr' });
  await view.rerender(<DeckNavigation index={1} total={3} onPrevious={onPrevious} onNext={onNext} />);
  expect(screen.getByRole('button', { name: 'Carte précédente' })).toBeTruthy();
  expect(screen.getByRole('button', { name: 'Carte suivante' })).toBeTruthy();
});
