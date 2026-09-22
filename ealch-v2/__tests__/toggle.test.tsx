/// <reference types="jest" />
// First Jest + React Native Testing Library test in this repo. It exists to
// prove the harness itself: preset, @/ alias, setup mocks, real render, role
// query, and a real press. Screen-level coverage lives in settings.test.tsx.
// Run with: npm run test:component  (npm test stays the node --test suite).
//
// The reference line above is required: see jest.setup.ts for why (TS 6.0.3
// in this project does not auto-include @types/jest's ambient globals). Every
// future *.test.tsx file needs the same line.
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Toggle } from '@/components/ui';

describe('Toggle', () => {
  test('exposes a switch role with a checked state that tracks its value', async () => {
    await render(<Toggle value={true} onChange={() => {}} accessibilityLabel="Sound effects" />);
    const sw = screen.getByRole('switch', { name: 'Sound effects' });
    expect(sw.props.accessibilityState?.checked).toBe(true);
  });

  test('reports the unchecked state when off', async () => {
    await render(<Toggle value={false} onChange={() => {}} accessibilityLabel="Sound effects" />);
    expect(screen.getByRole('switch', { name: 'Sound effects' }).props.accessibilityState?.checked).toBe(false);
  });

  test('calls onChange with the flipped value when pressed', async () => {
    const onChange = jest.fn();
    await render(<Toggle value={false} onChange={onChange} accessibilityLabel="Sound effects" />);
    await fireEvent.press(screen.getByRole('switch', { name: 'Sound effects' }));
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
