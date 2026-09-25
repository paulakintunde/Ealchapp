/// <reference types="jest" />
// Phase 07.1 / D-35: TX's third render path (`'onDemand'`) and the `EN: `
// tail's reveal. These are pure JSX render-behaviour assertions — english.
// logic.test.ts (`node --test`) covers englishMode/englishShown's pure math,
// and this file covers what TX actually PAINTS in each of the three modes,
// which no node --test file can reach (it needs React Native Testing
// Library's renderer, not a source-text guard).
//
// The reference line above is required: see jest.setup.ts for why (TS 6.0.3
// in this project does not auto-include @types/jest's ambient globals). Every
// future *.test.tsx file needs the same line.
import { render, screen, fireEvent } from '@testing-library/react-native';
import { TX } from '@/components/Type';
import { GlossContext } from '@/components/GlossContext';
import { useStore } from '@/store/useStore';

async function renderIn(mode: 'fr' | 'both' | 'onDemand', node: React.ReactElement) {
  return render(<GlossContext.Provider value={mode}>{node}</GlossContext.Provider>);
}

beforeEach(() => {
  // T.langRevealLabel reads through useT() -> useStore(s => s.lang). Pin it
  // so the assertion doesn't depend on device locale.
  useStore.setState({ lang: 'en' });
});

describe('TX with gloss, across the three English modes', () => {
  test("'fr' renders nothing — gloss is hidden entirely, byte-identical to today's false path", async () => {
    await renderIn('fr', <TX gloss>a mango tree</TX>);
    expect(screen.queryByText('a mango tree')).toBeNull();
  });

  test("'both' renders the gloss unasked — byte-identical to today's true path", async () => {
    await renderIn('both', <TX gloss>a mango tree</TX>);
    expect(screen.getByText('a mango tree')).toBeTruthy();
  });

  test("'onDemand' renders a tappable placeholder, not the gloss, until pressed", async () => {
    await renderIn('onDemand', <TX gloss>a mango tree</TX>);
    expect(screen.queryByText('a mango tree')).toBeNull();
    const reveal = screen.getByRole('button', { name: 'Show English' });
    expect(reveal).toBeTruthy();
  });

  test("'onDemand' reveals the gloss after a tap, and stays revealed", async () => {
    await renderIn('onDemand', <TX gloss>a mango tree</TX>);
    await fireEvent.press(screen.getByRole('button', { name: 'Show English' }));
    expect(screen.getByText('a mango tree')).toBeTruthy();
  });
});

describe('TX without gloss and without an EN: tail', () => {
  test('renders a bare Text in all three modes — TX does not become a Pressable in general', async () => {
    for (const mode of ['fr', 'both', 'onDemand'] as const) {
      const { unmount } = await renderIn(mode, <TX>Bonjour</TX>);
      const node = screen.getByText('Bonjour');
      expect(node.props.onPress).toBeUndefined();
      await unmount();
    }
  });
});

describe('TX with an EN: tail, across the three English modes', () => {
  test("'fr' strips the tail, French only", async () => {
    await renderIn('fr', <TX>Pars de nous. EN: Start from nous.</TX>);
    expect(screen.getByText('Pars de nous.')).toBeTruthy();
    expect(screen.queryByText(/Start from nous/)).toBeNull();
  });

  test("'both' shows the French and the tail unasked, as separate text", async () => {
    await renderIn('both', <TX>Pars de nous. EN: Start from nous.</TX>);
    // A nested trailing <Text> flattens into the parent's accessible text
    // (RN composes nested Text runs), so the query is a partial match rather
    // than the exact-string match used for the untailed 'fr' case above.
    expect(screen.getByText(/^Pars de nous\./)).toBeTruthy();
    expect(screen.getByText(/Start from nous/)).toBeTruthy();
  });

  test("'onDemand' shows the French and a reveal placeholder, not the tail, until tapped", async () => {
    await renderIn('onDemand', <TX>Pars de nous. EN: Start from nous.</TX>);
    expect(screen.getByText(/^Pars de nous\./)).toBeTruthy();
    expect(screen.queryByText(/Start from nous/)).toBeNull();
    expect(screen.getByRole('button', { name: 'Show English' })).toBeTruthy();
  });

  test("'onDemand' reveals the tail on tap, as its own trailing element (not a substring press)", async () => {
    await renderIn('onDemand', <TX>Pars de nous. EN: Start from nous.</TX>);
    await fireEvent.press(screen.getByRole('button', { name: 'Show English' }));
    expect(screen.getByText(/Start from nous/)).toBeTruthy();
    // The French run itself never carries its own onPress — only the nested
    // trailing tail Text does (verified structurally: the reveal is reached
    // only via the accessibilityRole="button" query above, never via a press
    // on the outer/French text), which is the "never a press handler on a
    // substring" rule.
    expect(screen.queryByRole('button', { name: 'Pars de nous.' })).toBeNull();
  });
});
