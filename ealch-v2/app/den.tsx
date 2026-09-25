import { useCallback, useEffect, useMemo, useRef } from 'react';
import { View } from 'react-native';
import { useRouter, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlashList, type FlashListRef } from '@shopify/flash-list';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { TrailRow as TrailRowCmp } from '@/components/TrailRow';
import { TrailHeading } from '@/components/TrailHeading';
import { TrailGateRow } from '@/components/TrailGateRow';
import { TrailCard } from '@/components/TrailCard';
import { LevelChip, LevelPanel, type BandUnitCount } from '@/components/LevelPanel';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { content } from '@/services/content';
import { useProgress } from '@/store/useProgress';
import { foldCards, itemsPracticed, masteredItems, resumeIsFresh, localDay } from '@/store/progress.logic';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';
import { trailRows, type TrailRow as TrailRowT } from '@/content/trail.logic';
import { LEVELS, type Level } from '@/content/schema';
import { FREE_BANDS } from '@/store/entitlement.logic';
import { useFeature } from '@/store/useEntitlement';
import { track as trackEvent } from '@/services/analytics';
import { useUI } from '@/store/useUI';
import { useStore } from '@/store/useStore';

// The Den is the trail (Concept C, D-01): a band is one column of acts, and
// the unit is a heading you scroll past rather than a place you go. This
// screen composes trailRows() (trail.logic.ts) from inputs alone and renders
// the flat result through ONE virtualized FlashList — it derives nothing
// about composition itself; an `if` about row order belongs in trail.logic.ts.
//
// D-01/SC-1: a mission is two taps away at any level — trail row to act
// screen (app/act.tsx), act row to mission (app/lesson.tsx).

// Den progress is REAL and now honest about the difference between MET and
// MASTERED (Phase 5, CF-03). If the bar were driven by mastery alone it would
// read 0/N for the first three weeks of daily practice — the exact D1-D14
// window where a blank bar makes people quit — so MET drives the level
// panel's per-band read and the mastered count rides alongside it, never
// blended. No fabricated bars: a band reads 0/N until the learner earns it.

export default function Den() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const band = useUI((s) => s.trailBand);
  const setBand = useUI((s) => s.setTrailBand);
  const levelPanelOpen = useUI((s) => s.levelPanelOpen);
  const setLevelPanelOpen = useUI((s) => s.setLevelPanelOpen);
  const trailAnchor = useUI((s) => s.trailAnchor);
  const setTrailAnchor = useUI((s) => s.setTrailAnchor);

  // `ealch://den?band=<band>` opens a band's trail directly (07.1-11's route
  // table; the device-proof recipe needs it to reach a band in one step). The
  // param is untrusted input: anything not in LEVELS is ignored rather than
  // cast, so a bad link lands on the trail the learner already had. A locked
  // band is honoured like any other, because the trail shows it readable
  // with the gate row above it (D-21/D-22), never the lesson behind it.
  const params = useLocalSearchParams<{ band?: string | string[] }>();
  const bandParam = Array.isArray(params.band) ? params.band[0] : params.band;
  useEffect(() => {
    const wanted = bandParam?.toLowerCase();
    if (wanted && (LEVELS as readonly string[]).includes(wanted)) setBand(wanted as Level);
  }, [bandParam, setBand]);

  // The Phase 10 level gate: sons and A1 are free forever; everything past A1
  // is Première ('levels.all'). The gate sits on the press, not the render —
  // locked units stay fully visible (what you would get), they just route to
  // the paywall instead of the lesson.
  const levelsAll = useFeature('levels.all');

  const lessonMissions = useProgress((s) => s.lessonMissions);
  const resumeByMode = useProgress((s) => s.resumeByMode);
  const attempts = useProgress((s) => s.attempts);

  // Act indices already done for a lesson, resolved ONCE per band from
  // lessonMissions (den.tsx:60-72's old per-unit derivation, moved here and
  // reshaped to per-act) — never recomputed inside a row renderer (T-07.1-16).
  const doneActs = useMemo(() => {
    return (lessonId: string): Set<number> => {
      const L = content.lesson(lessonId);
      const rec = lessonMissions[lessonId];
      if (!L || !rec || rec.v !== L.version) return new Set<number>();
      const doneSectionIds = new Set(
        rec.done.map((ix) => L.sections[ix]?.id).filter((id): id is string => Boolean(id)),
      );
      const out = new Set<number>();
      (L.acts ?? []).forEach((act, actIx) => {
        if (act.sections.length > 0 && act.sections.every((sid) => doneSectionIds.has(sid))) out.add(actIx);
      });
      return out;
    };
  }, [lessonMissions]);

  // D-18: the start marker is the first unstarted act row across the WHOLE
  // band, only when there is no fresh lesson resume to prioritise instead.
  const hasFreshResume = useMemo(
    () => resumeIsFresh(resumeByMode.lesson ?? null, localDay()),
    [resumeByMode],
  );

  // D-19: dismissible above the first heading, persisted for good
  // (src/store/dayOne.test.ts's partialize round trip) — plan 08 left this
  // session-only; this plan wires the two store fields in.
  const denOrientationSeen = useStore((s) => s.denOrientationSeen);
  const setDenOrientationSeen = useStore((s) => s.setDenOrientationSeen);
  const denPlacementSeen = useStore((s) => s.denPlacementSeen);
  const setDenPlacementSeen = useStore((s) => s.setDenPlacementSeen);

  const rows: TrailRowT[] = useMemo(
    () =>
      trailRows({
        units: content.unitsOfBand(band),
        lessonsOf: (unitId) => content.lessonsOf(unitId),
        band,
        levelsAll,
        freeBands: FREE_BANDS,
        doneActs,
        hasFreshResume,
        orientationDismissed: denOrientationSeen,
        placementDismissed: denPlacementSeen,
        T: { trailReleaseSome: T.trailReleaseSome, trailReleaseNone: T.trailReleaseNone },
      }),
    [band, levelsAll, doneActs, hasFreshResume, denOrientationSeen, denPlacementSeen, T],
  );

  // The level panel's per-band read (D-06/D-07): MET drives it, MASTERED
  // rides alongside — memoised once, keyed on the attempts, never per row.
  const met = useMemo(() => itemsPracticed(attempts), [attempts]);
  const mastered = useMemo(() => masteredItems(foldCards(attempts)), [attempts]);
  const unitCounts: Record<Level, BandUnitCount> = useMemo(() => {
    const out = {} as Record<Level, BandUnitCount>;
    for (const l of LEVELS) {
      const units = content.unitsOfBand(l);
      let total = 0;
      let metN = 0;
      let masteredN = 0;
      for (const u of units) {
        const ids = new Set(content.lessonsOf(u.id).flatMap((lesson) => lesson.itemIds));
        total += ids.size;
        for (const id of ids) {
          if (met.has(id)) metN += 1;
          if (mastered.has(id)) masteredN += 1;
        }
      }
      out[l] = { total, met: metN, mastered: masteredN };
    }
    return out;
  }, [met, mastered]);

  const onLockedPress = useCallback(() => {
    trackEvent('gate_blocked', { feature: 'levels.all', from: 'den' });
    router.push({ pathname: '/paywall', params: { from: 'gate:levels' } });
  }, [router]);

  const goAct = useCallback(
    (lessonId: string, actIx: number) => {
      router.push({ pathname: '/act', params: { key: lessonId, act: String(actIx) } });
    },
    [router],
  );
  // D-10/D-12: acte 00 opens the pre-roll sheet first, never the player
  // directly — the sheet states the real shape of the lesson before the mic
  // is ever in play.
  const goActe0 = useCallback(
    (lessonId: string) => {
      router.push({ pathname: '/preroll', params: { key: lessonId } });
    },
    [router],
  );
  const goFiche = useCallback(
    (lessonId: string) => {
      if (!lessonId) return;
      router.push({ pathname: '/fiche', params: { key: lessonId } });
    },
    [router],
  );

  // D-41: the scroll anchor. Capture the first visible row's STABLE id on
  // blur (getFirstVisibleIndex, present in FlashList 2.0.2), never a pixel
  // offset — speakmap.tsx's fixed two-constant pixel arithmetic is already
  // known wrong at font scale 1.3, and the trail is 251 variable-height rows.
  const listRef = useRef<FlashListRef<TrailRowT>>(null);
  useFocusEffect(
    useCallback(() => {
      return () => {
        const ix = listRef.current?.getFirstVisibleIndex();
        if (typeof ix === 'number' && ix >= 0 && rows[ix]) {
          setTrailAnchor(band, rows[ix].id);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rows, band]),
  );
  // Resolved back to an index at mount. The FlashList below is keyed on
  // `band` so a band switch remounts it and this resolves fresh each time —
  // the prop below only ever applies at mount, never on a later prop change.
  const initialScrollIndex = useMemo(() => {
    const anchorId = trailAnchor[band];
    if (!anchorId) return undefined;
    const ix = rows.findIndex((r) => r.id === anchorId);
    return ix >= 0 ? ix : undefined;
  }, [trailAnchor, band, rows]);

  const renderItem = useCallback(
    ({ item }: { item: TrailRowT }) => {
      switch (item.kind) {
        case 'heading':
          return <TrailHeading row={item} onPressFiche={goFiche} />;
        case 'act':
        case 'acte0':
          return <TrailRowCmp row={item} onPressAct={goAct} onPressActe0={goActe0} onPressLocked={onLockedPress} />;
        case 'orientation':
          return <TrailCard variant="orientation" onDismiss={() => setDenOrientationSeen(true)} />;
        case 'placement':
          return (
            <TrailCard
              variant="placement"
              onOpen={() => router.push('/placement')}
              onDismiss={() => setDenPlacementSeen(true)}
            />
          );
        case 'gate':
          return <TrailGateRow variant="gate" />;
        case 'boundary':
          return <TrailGateRow variant="boundary" />;
        default:
          return null;
      }
    },
    [goFiche, goAct, goActe0, onLockedPress, router, t, T],
  );

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top + 14, paddingHorizontal: 24 }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <Press onPress={() => router.replace('/home')} style={{ width: 44, height: 44, marginLeft: -12, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevronLeft" size={20} color={t.txNonText} strokeWidth={1.7} />
          </Press>
          <TX font="semi" role="eyebrow" ls={2.6} color={t.txSubtle}>
            {T.denTag}
          </TX>
          <Press onPress={() => router.push('/settings')} style={{ width: 44, height: 44, marginRight: -12, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="gear" size={18} color={t.txNonText} />
          </Press>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          {/* flex lives on the wrapper, never on a TX, or the title clips */}
          <View style={{ flex: 1, minWidth: 0 }}>
            <TX font="serif" role="display" size={38}>
              {T.denT}
            </TX>
          </View>
          <LevelChip band={band} expanded={levelPanelOpen} onPress={() => setLevelPanelOpen(true)} />
        </View>
        <TX role="bodySm" color={t.txMuted} style={{ maxWidth: 310, marginBottom: 16 }}>
          {T.denIntro}
        </TX>

        {/* DEV-PREVIEW-B101 (temporary): dev builds only, opens the b1.01 draft. */}
        {/* DEV-PREVIEW-B101 (D-30): the B1 authors' only door. Re-pointed at
            the Fiche sheet, replacing the old overview screen's route. Do not
            delete it. */}
        {/* Shown on the B1 trail only: on every other band it sat above the
            day-one cards and headings, a B1 draft pushing sons and A1 down
            (device pass, 2026-09-24). */}
        {__DEV__ && band === 'b1' && content.lesson('b1.01.l1') ? (
          <Press
            onPress={() => router.push({ pathname: '/fiche', params: { key: 'b1.01.l1' } })}
            cue="tap"
            style={{ borderRadius: 16, borderWidth: 1, borderStyle: 'dashed', borderColor: t.accA(55), backgroundColor: t.card, padding: 14, paddingHorizontal: 16, marginBottom: 12 }}
          >
            <TX font="semi" role="meta" ls={2.2} color={t.tag('gold').c}>PREVIEW · B1 DRAFT</TX>
            <TX font="semi" role="body" style={{ marginTop: 4 }}>{"L'imparfait : la formation"}</TX>
          </Press>
        ) : null}
      </View>

      {/* The trail: one FlashList over trailRows()'s flat, heterogeneous
          array. NOT inside a ScrollView — MissionSection.tsx:202-204 records
          what nesting a virtualized list inside one costs. */}
      <FlashList
        key={band}
        ref={listRef}
        data={rows}
        keyExtractor={(row) => row.id}
        getItemType={(row) => row.kind}
        renderItem={renderItem}
        initialScrollIndex={initialScrollIndex}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: insets.bottom + 60 }}
        showsVerticalScrollIndicator={false}
      />

      <LevelPanel
        open={levelPanelOpen}
        onClose={() => setLevelPanelOpen(false)}
        band={band}
        onSelect={(b) => {
          setBand(b);
          setLevelPanelOpen(false);
        }}
        unitCounts={unitCounts}
        levelsAll={levelsAll}
      />
    </View>
  );
}
