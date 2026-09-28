/// <reference types="jest" />
import { fireEvent, render, screen } from '@testing-library/react-native';
import * as RN from 'react-native';
import { AccessibilityInfo } from 'react-native';
import { Button } from '@/components/ui';
import { TrailRow } from '@/components/TrailRow';
import { TrailHeading } from '@/components/TrailHeading';
import { PanelRow } from '@/components/PanelRow';
import { LevelPanel } from '@/components/LevelPanel';
import { useStore } from '@/store/useStore';
import type { Level } from '@/content/schema';

beforeEach(() => useStore.setState({ lang: 'en' }));

test('a locked act announces its paywall destination and remains actionable', async () => {
  const onLocked = jest.fn();
  await render(<TrailRow row={{ kind: 'act', id: 'trail.act.lesson.0', unitId: 'a1.01', lessonId: 'a1.01.l1', actIx: 0, title: 'Leçon de départ', releaseLine: '3 words sent to review', done: false, startMarker: false, locked: true }} onPressAct={jest.fn()} onPressActe0={jest.fn()} onPressLocked={onLocked} />);
  const row = screen.getByRole('button', { name: /Leçon de départ.*3 words.*locked, opens Ealch Première/ });
  expect(row.props.accessibilityState?.disabled).not.toBe(true);
  await fireEvent.press(row);
  expect(onLocked).toHaveBeenCalledTimes(1);
});

test('Fiche is its own action, separate from an act', async () => {
  const openFiche = jest.fn();
  await render(<TrailHeading row={{ kind: 'heading', id: 'trail.h.a1.01', unitId: 'a1.01', label: 'Les sons', lessonIds: ['a1.01.l1'], ficheLessonId: 'a1.01.l1', sealed: false, locked: false }} onPressFiche={openFiche} />);
  const fiche = screen.getByRole('button', { name: /Les sons.*Unit info/ });
  await fireEvent.press(fiche);
  expect(openFiche).toHaveBeenCalledWith('a1.01.l1');
});

test('shared button and selected panel choice expose real states', async () => {
  await render(<><Button label="Continue" disabled onPress={jest.fn()} /><PanelRow title="A1" selected onPress={jest.fn()} /></>);
  expect(screen.getByRole('button', { name: 'Continue' }).props.accessibilityState.disabled).toBe(true);
  expect(screen.getByRole('button', { name: 'A1' }).props.accessibilityState.selected).toBe(true);
});

test('opening the level panel focuses its title before the choices', async () => {
  const focus = jest.spyOn(AccessibilityInfo, 'setAccessibilityFocus').mockImplementation(() => {});
  const node = jest.spyOn(RN, 'findNodeHandle').mockReturnValue(42);
  const counts = Object.fromEntries((['sons', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'] as Level[]).map((key) => [key, { total: 1, met: 0, mastered: 0 }])) as Record<Level, { total: number; met: number; mastered: number }>;
  await render(<LevelPanel open onClose={jest.fn()} band="a1" onSelect={jest.fn()} unitCounts={counts} levelsAll />);
  expect(screen.getByRole('header', { name: 'Levels' })).toBeTruthy();
  expect(screen.getByRole('button', { name: /A1/ }).props.accessibilityState.selected).toBe(true);
  fireEvent(screen.getByRole('header', { name: 'Levels' }), 'layout', { nativeEvent: { layout: { x: 0, y: 0, width: 100, height: 40 } } });
  expect(focus).toHaveBeenCalledWith(42);
  node.mockRestore();
  focus.mockRestore();
});
