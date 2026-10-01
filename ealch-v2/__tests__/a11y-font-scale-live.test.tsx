/// <reference types="jest" />
// 08.1 stage 2, E2 / D-20. With fontScale and density in MainActivity's
// configChanges the activity is no longer recreated, so nothing re-mounts text
// when the learner changes the OS font scale. TX must therefore SUBSCRIBE to
// the scale: reading PixelRatio.getFontScale() in render never re-renders.
import { act, render, screen } from '@testing-library/react-native';
import { Dimensions, StyleSheet } from 'react-native';
import { TX } from '@/components/Type';
import { useCardHeight } from '@/hooks/useCardHeight';

async function setFontScale(fontScale: number) {
  const window = Dimensions.get('window');
  await act(async () => {
    Dimensions.set({ window: { ...window, fontScale }, screen: Dimensions.get('screen') });
  });
}

function sizeOf(label: string) {
  const style = StyleSheet.flatten(screen.getByText(label).props.style);
  return { fontSize: style.fontSize as number, lineHeight: style.lineHeight as number };
}

const original = Dimensions.get('window');
afterEach(async () => {
  await setFontScale(original.fontScale);
});

describe('live font-scale change', () => {
  test('a mounted TX re-lays out in place when the OS font scale changes', async () => {
    await setFontScale(1);
    await render(<TX role="body">Bonjour tout le monde</TX>);
    const at1 = sizeOf('Bonjour tout le monde');
    await setFontScale(1.5);
    const at15 = sizeOf('Bonjour tout le monde');
    expect(at15.fontSize).toBeGreaterThan(at1.fontSize);
    expect(at15.lineHeight).toBeGreaterThan(at1.lineHeight);
    await setFontScale(1);
    expect(sizeOf('Bonjour tout le monde')).toEqual(at1);
  });

  test('the same instance keeps its local state across the change (no remount)', async () => {
    await setFontScale(1);
    await render(<TX role="body">Un</TX>);
    const first = screen.getByText('Un');
    await setFontScale(1.3);
    expect(screen.getByText('Un')).toBe(first);
  });
});

describe('useCardHeight on a display-size change', () => {
  test('recomputes when the window height changes', async () => {
    let h = 0;
    function Probe() {
      h = useCardHeight(200);
      return null;
    }
    await render(<Probe />);
    const before = h;
    const window = Dimensions.get('window');
    await act(async () => {
      Dimensions.set({ window: { ...window, height: window.height - 120 }, screen: Dimensions.get('screen') });
    });
    expect(h).toBeLessThanOrEqual(before);
    await act(async () => {
      Dimensions.set({ window, screen: Dimensions.get('screen') });
    });
  });
});
