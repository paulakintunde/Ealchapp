import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useContent } from '@/services/content';
import { itemCardType, selectItems } from '@/services/content.logic';
import { domainMeta } from '@/content/domainMeta';
import { LEVELS, type CardType, type Level } from '@/content/schema';

/**
 * One category's deck list: the seven card-type decks, each with its live
 * count. Both vocabulary directions draw on the same vocab items — direction
 * is a property of the DECK (passed as ?dir=), not of the card, which is why
 * the two rows share one count.
 *
 * A type with no cards yet renders dimmed as "coming soon" rather than
 * disappearing: the generation pipeline fills types over time, and an entry
 * that vanishes reads as a feature that was removed.
 */
export default function FlashTypes() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const corpus = useContent((s) => s.corpus);
  const { domain } = useLocalSearchParams<{ domain?: string }>();

  const slug = domain ?? '';
  const meta = domainMeta(slug);

  // The difficulty filter: null is "all levels". Chips offer only the bands
  // this category actually holds cards at, in LEVELS order (sons → c1; there
  // is no c2 content by design, c2 is a score band only).
  const [lvl, setLvl] = useState<Level | null>(null);

  const items = useMemo(() => {
    const themes = (corpus.themes ?? []).filter((th) => th.domain === slug).map((th) => th.slug);
    return selectItems(corpus, 'flashcard', { themes });
  }, [corpus, slug]);

  const bands = useMemo(
    () => LEVELS.filter((b) => items.some((it) => it.level === b)),
    [items]
  );

  const counts = useMemo(() => {
    const by: Record<CardType, number> = { vocab: 0, gapfill: 0, conjugation: 0, error: 0, grammar: 0, register: 0 };
    for (const it of items) {
      if (lvl !== null && it.level !== lvl) continue;
      by[itemCardType(it)] += 1;
    }
    return by;
  }, [items, lvl]);

  // Row order mirrors the per-lesson card breakdown the decks were specced
  // from: the two vocab directions first, then the production drills.
  const rows: { key: string; glyph: string; label: string; sub: string; count: number; ctype: CardType; dir?: 'fr' | 'en' }[] = [
    { key: 'vocab-fr', glyph: 'FR', label: T.ctVocabFrEn, sub: T.ctVocabFrEnS, count: counts.vocab, ctype: 'vocab', dir: 'fr' },
    { key: 'vocab-en', glyph: 'EN', label: T.ctVocabEnFr, sub: T.ctVocabEnFrS, count: counts.vocab, ctype: 'vocab', dir: 'en' },
    { key: 'gapfill', glyph: '···', label: T.ctGapfill, sub: T.ctGapfillS, count: counts.gapfill, ctype: 'gapfill' },
    { key: 'conjugation', glyph: 'er', label: T.ctConjugation, sub: T.ctConjugationS, count: counts.conjugation, ctype: 'conjugation' },
    { key: 'error', glyph: '!', label: T.ctError, sub: T.ctErrorS, count: counts.error, ctype: 'error' },
    { key: 'grammar', glyph: '§', label: T.ctGrammar, sub: T.ctGrammarS, count: counts.grammar, ctype: 'grammar' },
    { key: 'register', glyph: '«»', label: T.ctRegister, sub: T.ctRegisterS, count: counts.register, ctype: 'register' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <LinearGradient
        colors={[meta.glow, 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.45 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 300 }}
      />
      <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} title={T.flashHubTag} />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 4, paddingBottom: insets.bottom + 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 13, marginBottom: 6, paddingHorizontal: 4 }}>
          <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: meta.disc, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={meta.icon} size={19} color={meta.ink} strokeWidth={1.7} />
          </View>
          <View style={{ flex: 1 }}>
            <TX font="serifI" size={24} role="display" numberOfLines={2}>
              {lang === 'fr' ? meta.fr : meta.en}
            </TX>
            <TX role="meta" color={t.txMuted} numberOfLines={2} style={{ marginTop: 2 }}>
              {lang === 'fr' ? meta.subFr : meta.subEn}
            </TX>
          </View>
        </View>

        {/* Difficulty chips — a filter over every deck below at once, so a
            learner drills one theme at exactly their band. Rendered only when
            the category spans more than one band: a single-band category has
            nothing to sort. */}
        {bands.length > 1 ? (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 18, paddingHorizontal: 4 }}>
            {[null, ...bands].map((b) => {
              const on = lvl === b;
              return (
                <Press
                  key={b ?? 'all'}
                  onPress={() => setLvl(b)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: on }}
                  style={{
                    minHeight: 32,
                    paddingVertical: 4,
                    paddingHorizontal: 14,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: on ? meta.ink : t.line(14),
                    backgroundColor: on ? meta.disc : 'transparent',
                    justifyContent: 'center',
                  }}
                >
                  <TX font="semi" role="meta" ls={1.2} color={on ? meta.ink : t.txMuted}>
                    {b === null ? T.lvlAll.toUpperCase() : b.toUpperCase()}
                  </TX>
                </Press>
              );
            })}
          </View>
        ) : null}

        <TX font="semi" role="eyebrow" ls={2.2} color={t.txSubtle} style={{ marginTop: 18, marginBottom: 12, paddingHorizontal: 4 }}>
          {T.flashHubPick.toUpperCase()}
        </TX>

        <View style={{ gap: 10 }}>
          {rows.map((r) => {
            const empty = r.count === 0;
            return (
              <Press
                key={r.key}
                onPress={
                  empty
                    ? undefined
                    : () =>
                        router.push({
                          pathname: '/flashcards',
                          params: {
                            domain: slug,
                            ctype: r.ctype,
                            ...(r.dir ? { dir: r.dir } : {}),
                            ...(lvl ? { level: lvl } : {}),
                          },
                        })
                }
                accessibilityRole="button"
                accessibilityState={{ disabled: empty }}
                style={{
                  minHeight: 72,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: t.line(7),
                  backgroundColor: t.card,
                  ...t.cardShadow,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 14,
                  opacity: empty ? 0.45 : 1,
                }}
              >
                <View style={{ width: 38, height: 38, borderRadius: 19, backgroundColor: meta.disc, alignItems: 'center', justifyContent: 'center' }}>
                  <TX font="serifI" role="titleSm" size={15} color={meta.ink}>
                    {r.glyph}
                  </TX>
                </View>
                <View style={{ flex: 1 }}>
                  <TX font="semi" role="body" numberOfLines={1}>
                    {r.label}
                  </TX>
                  <TX role="meta" color={t.txMuted} numberOfLines={1} style={{ marginTop: 2 }}>
                    {r.sub}
                  </TX>
                </View>
                <TX font="semi" role="eyebrow" ls={1.4} color={empty ? t.txSubtle : t.accTx}>
                  {empty ? T.ctSoon.toUpperCase() : T.ctCardsN.replace('{n}', String(r.count))}
                </TX>
                {empty ? null : <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} />}
              </Press>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
