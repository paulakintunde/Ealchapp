/// <reference types="jest" />
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';

const g = globalThis as unknown as { __DEV__: boolean };
const original = g.__DEV__;
let warn: jest.SpyInstance;

beforeEach(() => {
  g.__DEV__ = true;
  warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
});
afterEach(() => {
  g.__DEV__ = original;
  warn.mockRestore();
});

test('a role-less Press warns once and names its label', async () => {
  const { rerender } = await render(<Press accessibilityLabel="Go on"><Text>x</Text></Press>);
  expect(warn).toHaveBeenCalledTimes(1);
  expect(warn.mock.calls[0][0]).toMatch(/no accessibilityRole.*Go on/);
  await rerender(<Press accessibilityLabel="Go on"><Text>y</Text></Press>);
  expect(warn).toHaveBeenCalledTimes(1);
});

test('an icon-only Press without a label warns and names its testID', async () => {
  await render(<Press accessibilityRole="button" testID="close-btn"><Icon name="x" /></Press>);
  expect(warn).toHaveBeenCalledTimes(1);
  expect(warn.mock.calls[0][0]).toMatch(/icon child.*close-btn/);
});

test('a correct Press does not warn', async () => {
  await render(<Press accessibilityRole="button"><Text>ok</Text></Press>);
  await render(<Press accessibilityRole="button" accessibilityLabel="Close"><Icon name="x" /></Press>);
  expect(warn).not.toHaveBeenCalled();
});

test('with __DEV__ false nothing warns', async () => {
  g.__DEV__ = false;
  await render(<Press><Icon name="x" /></Press>);
  expect(warn).not.toHaveBeenCalled();
});
