# Phase 8 consolidated action-site audit

Fresh source reconciliation of every shared `Press`, direct `Pressable`, `Button`, and tappable `Text`/`TX` in `app/` and `src/components/`. Each row links to the current source and records role, name source or visible content, state, actual activation, and batch disposition. Repeated runtime instances share one JSX site. Native spoken order and overlay reachability remain the Plan 10 device checkpoint.

Batch reviews: [01](08-AUDIT-01.md), [02](08-AUDIT-02.md), [03](08-AUDIT-03.md), [04](08-AUDIT-04.md), [06](08-AUDIT-06.md), [07](08-AUDIT-07.md), [08](08-AUDIT-08.md), [09](08-AUDIT-09.md). Plan 05 changes appearance, and Plan 06 covers flashcards. The current source table below resolves shifted line numbers and is authoritative for the checkpoint.

Current JSX sites: **389**. Reconciliation issues: **0**. The A2 lesson device finding added two explicit card-navigation `Press` sites in `DeckNavigation`; both have localized names, button roles, disabled edge states, and card-only activation. No Touchable or gesture handler control occurs in the scanned TSX scope. Decorative icons within named controls have no separate action; the Plan 02 grammar play glyph was converted to a decorative View and is obsolete as a control.

## Batch 01 (35 current sites)

| Site | Control | Role | Name source or visible content | State/value | Activation | Disposition |
|---|---|---|---|---|---|---|
| [app/den.tsx:249](../../../ealch-v2/app/den.tsx#L249) | Press | "button" | {T.a11yBack} | none | {() => (router.canGoBack() ? router.back() : router.replace('/home'))} | reviewed in batch 01 |
| [app/den.tsx:255](../../../ealch-v2/app/den.tsx#L255) | Press | "button" | {T.a11yOpenSettings} | none | {() => router.push('/settings')} | reviewed in batch 01 |
| [app/home.tsx:308](../../../ealch-v2/app/home.tsx#L308) | Press | "button" | {T.appLangNames[l]} | {{ selected: on }} | {() => setAppLang(l)} | reviewed in batch 01 |
| [app/home.tsx:323](../../../ealch-v2/app/home.tsx#L323) | Press | "button" | {T.tabProfile} | none | {() => router.push('/profile')} | reviewed in batch 01 |
| [app/home.tsx:341](../../../ealch-v2/app/home.tsx#L341) | Press | "button" | {`${T.tabProfile}. ${run.days} ${T.daysWord}. ${freezeLine}`} | none | {() => router.push('/profile')} | reviewed in batch 01 |
| [app/home.tsx:369](../../../ealch-v2/app/home.tsx#L369) | Press | "button" | {`${revNum}. ${revLabel}. ${revSub}`} | none | {() => router.push('/smartreview')} | reviewed in batch 01 |
| [app/home.tsx:386](../../../ealch-v2/app/home.tsx#L386) | Press | "button" | {`${hero.title}. ${hero.sub}. ${hero.cta}`} | none | {() => router.push(hero.route as never)} | reviewed in batch 01 |
| [app/home.tsx:419](../../../ealch-v2/app/home.tsx#L419) | Press | "button" | {T.vocabPrime} | none | {() => openVocabSheet(session.fresh.slice(0, 4).map((i) => ({ fr: i.fr, en: i.en })))} | reviewed in batch 01 |
| [app/home.tsx:435](../../../ealch-v2/app/home.tsx#L435) | Press | "button" | {`${T.resumeTag}. ${r.title}`} | none | {() => router.push(r.route as never)} | reviewed in batch 01 |
| [app/home.tsx:48](../../../ealch-v2/app/home.tsx#L48) | Press | "button" | {label} | none | {onPress} | reviewed in batch 01 |
| [app/home.tsx:497](../../../ealch-v2/app/home.tsx#L497) | Press | "button" | {`${T.homePremT}. ${T.homePremS}`} | none | {() => router.push({ pathname: '/paywall', params: { from: 'home' } })} | reviewed in batch 01 |
| [app/home.tsx:515](../../../ealch-v2/app/home.tsx#L515) | Press | "button" | {browseOpen ? T.browseLess : T.browseOpen} | {{ expanded: browseOpen }} | {toggleBrowse} | reviewed in batch 01 |
| [app/home.tsx:527](../../../ealch-v2/app/home.tsx#L527) | Press | "button" | {`${T.wordOfDay}. ${wod.word}`} | none | {() => openDict(wod)} | reviewed in batch 01 |
| [app/home.tsx:540](../../../ealch-v2/app/home.tsx#L540) | Press | "button" | {T.playAudioA11y} | none | {() => tts.speak(wod.speak)} | reviewed in batch 01 |
| [app/home.tsx:550](../../../ealch-v2/app/home.tsx#L550) | Press | "button" | {lang === 'fr' ? p.labelFr : p.labelEn} | none | {() => router.push(playerRouteFor(p.id, 0))} | reviewed in batch 01 |
| [app/home.tsx:580](../../../ealch-v2/app/home.tsx#L580) | Press | "button" | {`${facts.label}. ${papers} ${papers === 1 ? T.examPapersCountOne : T.examPapersCount}`} | none | {() => router.push({ pathname: '/exam', params: { format: fmt } })} | reviewed in batch 01 |
| [app/home.tsx:625](../../../ealch-v2/app/home.tsx#L625) | Press | "button" | {`${d.title}. ${meta}`} | none | {d.open} | reviewed in batch 01 |
| [app/home.tsx:669](../../../ealch-v2/app/home.tsx#L669) | Press | "button" | {right} | none | {onPress} | reviewed in batch 01 |
| [app/levels.tsx:56](../../../ealch-v2/app/levels.tsx#L56) | Press | "button" | {T.a11yBack} | none | {() => (router.canGoBack() ? router.back() : router.replace('/den'))} | reviewed in batch 01 |
| [app/levels.tsx:89](../../../ealch-v2/app/levels.tsx#L89) | Press | "button" | {`${name}. ${sub}${locked ? `. ${T.bandPremiereLine}` : ''}`} | {{ selected }} | {() => pick(l)} | reviewed in batch 01 |
| [src/components/LevelPanel.tsx:182](../../../ealch-v2/src/components/LevelPanel.tsx#L182) | Pressable | "button" | {T.a11yDismissPanel} | none | {onClose} | reviewed in batch 01 |
| [src/components/LevelPanel.tsx:54](../../../ealch-v2/src/components/LevelPanel.tsx#L54) | Press | "button" | {`${T.bandChipLabel} ${levelLabel(band)}`} | {{ expanded }} | {onPress} | reviewed in batch 01 |
| [src/components/PanelRow.tsx:39](../../../ealch-v2/src/components/PanelRow.tsx#L39) | Press | "button" | {[title, sub].filter(Boolean).join('. ')} | {{ selected: !!selected, disabled: !!disabled }} | {disabled ? undefined : onPress} | reviewed in batch 01 |
| [src/components/TabBar.tsx:38](../../../ealch-v2/src/components/TabBar.tsx#L38) | Press | "tab" | {tab.label} | {{ selected: on }} | {() => router.replace(tab.route as never)} | reviewed in batch 01 |
| [src/components/TrailCard.tsx:33](../../../ealch-v2/src/components/TrailCard.tsx#L33) | Button | button via shared Button | {T.lkSkip} | none | {onDismiss} | reviewed in batch 01 |
| [src/components/TrailCard.tsx:78](../../../ealch-v2/src/components/TrailCard.tsx#L78) | Press | "button" | {T.trailPlacementTitle} | none | {props.onOpen} | reviewed in batch 01 |
| [src/components/TrailGateRow.tsx:44](../../../ealch-v2/src/components/TrailGateRow.tsx#L44) | Press | "button" | {`${lead}. ${T.a11yLockedPaywall}`} | none | {onPress} | reviewed in batch 01 |
| [src/components/TrailHeading.tsx:32](../../../ealch-v2/src/components/TrailHeading.tsx#L32) | Press | "button" | {`${row.label}. ${T.trailFiche}`} | {{ disabled: !row.ficheLessonId }} | {open} | reviewed in batch 01 |
| [src/components/TrailRow.tsx:115](../../../ealch-v2/src/components/TrailRow.tsx#L115) | Press | "button" | {`${T.trailActe0}. ${row.locked ? T.a11yLockedPaywall : T.a11yOpenNarrated}`} | none | {onPress} | reviewed in batch 01 |
| [src/components/TrailRow.tsx:161](../../../ealch-v2/src/components/TrailRow.tsx#L161) | Press | "button" | {`${row.title}. ${row.releaseLine}. ${row.locked ? T.a11yLockedPaywall : T.a11yOpenAct}`} | none | {onPress} | reviewed in batch 01 |
| [src/components/ui.tsx:232](../../../ealch-v2/src/components/ui.tsx#L232) | Press | "switch" | {accessibilityLabel} | {{ checked: value }} | {() => onChange(!value)} | reviewed in batch 01 |
| [src/components/ui.tsx:28](../../../ealch-v2/src/components/ui.tsx#L28) | Pressable | neutral shared primitive | {children} | none | {(e) => { sound.unlock(); if (cue) sound.play(cue); onPress?.(e); }} | neutral wrapper; callers classified |
| [src/components/ui.tsx:288](../../../ealch-v2/src/components/ui.tsx#L288) | Press | "button" | {T.a11yClose} | none | {onClose} | reviewed in batch 01 |
| [src/components/ui.tsx:326](../../../ealch-v2/src/components/ui.tsx#L326) | Press | "button" | {T.a11yOpenSettings} | none | {onSettings} | reviewed in batch 01 |
| [src/components/ui.tsx:99](../../../ealch-v2/src/components/ui.tsx#L99) | Press | "button" | {label} | {{ disabled: !!disabled }} | {disabled ? undefined : onPress} | reviewed in batch 01 |

## Batch 02 (45 current sites)

| Site | Control | Role | Name source or visible content | State/value | Activation | Disposition |
|---|---|---|---|---|---|---|
| [app/act.tsx:167](../../../ealch-v2/app/act.tsx#L167) | Press | "button" | {T.a11yBack} | none | {() => router.back()} | reviewed in batch 02 |
| [app/act.tsx:171](../../../ealch-v2/app/act.tsx#L171) | Press | "button" | {T.a11yOpenFiche} | none | {goFiche} | reviewed in batch 02 |
| [app/act.tsx:181](../../../ealch-v2/app/act.tsx#L181) | Press | "button" | {T.a11yPreviousAct} | none | {goPrev} | reviewed in batch 02 |
| [app/act.tsx:189](../../../ealch-v2/app/act.tsx#L189) | Press | "button" | {T.a11yNextAct} | none | {goNext} | reviewed in batch 02 |
| [app/act.tsx:214](../../../ealch-v2/app/act.tsx#L214) | Press | "button" | {T.moListen} | none | {listenIntro} | reviewed in batch 02 |
| [app/act.tsx:251](../../../ealch-v2/app/act.tsx#L251) | Press | "button" | {`${ix + 1}. ${s.title}${isDone ? `. ${T.doneTag}` : ''}`} | none | {() => openMission(ix)} | reviewed in batch 02 |
| [app/fiche.tsx:145](../../../ealch-v2/app/fiche.tsx#L145) | Press | "button" | {T.ovSeeList} | none | {goAct} | reviewed in batch 02 |
| [app/fiche.tsx:178](../../../ealch-v2/app/fiche.tsx#L178) | Press | "button" | {s.overview?.titleEn ?? s.title} | none | {() => router.push({ pathname: '/fiche', params: { key: s.id } })} | reviewed in batch 02 |
| [app/fiche.tsx:193](../../../ealch-v2/app/fiche.tsx#L193) | Press | "button" | {`${T.a11yOpenAct}. ${s.overview?.titleEn ?? s.title}`} | none | {() => router.push({ pathname: '/act', params: { key: s.id, act: '0' } })} | reviewed in batch 02 |
| [app/fiche.tsx:209](../../../ealch-v2/app/fiche.tsx#L209) | Press | "button" | {T.ovStart} | none | {goAct} | reviewed in batch 02 |
| [app/fiche.tsx:212](../../../ealch-v2/app/fiche.tsx#L212) | Press | "button" | {T.ovSeeAll.replace('{n}', String(stats.missions))} | none | {goAct} | reviewed in batch 02 |
| [app/lesson.tsx:760](../../../ealch-v2/app/lesson.tsx#L760) | Press | "button" | {T.lkHelp} | none | {() => setShowKeyOverride(true)} | reviewed in batch 02 |
| [src/components/ActCheckpoint.tsx:110](../../../ealch-v2/src/components/ActCheckpoint.tsx#L110) | Button | button via shared Button | {T.recapResume} | none | {() => { sound.play('tap'); onContinue(); }} | reviewed in batch 02 |
| [src/components/ActCheckpoint.tsx:112](../../../ealch-v2/src/components/ActCheckpoint.tsx#L112) | Press | "button" | {T.recapRestart} | none | {onIgnore} | reviewed in batch 02 |
| [src/components/ActCheckpoint.tsx:154](../../../ealch-v2/src/components/ActCheckpoint.tsx#L154) | Button | button via shared Button | {T.cont} | none | {onDone} | reviewed in batch 02 |
| [src/components/ActCheckpoint.tsx:191](../../../ealch-v2/src/components/ActCheckpoint.tsx#L191) | Press | "button" | {o} | {{ selected: isPicked, disabled: picked !== null }} | {() => pick(i)} | reviewed in batch 02 |
| [src/components/ActCheckpoint.tsx:222](../../../ealch-v2/src/components/ActCheckpoint.tsx#L222) | Button | button via shared Button | {ix >= questions.length - 1 ? T.warmStart : T.lessonNext} | none | {next} | reviewed in batch 02 |
| [src/components/ActCheckpoint.tsx:52](../../../ealch-v2/src/components/ActCheckpoint.tsx#L52) | Button | button via shared Button | {T.cont} | none | {() => { sound.play('tap'); onContinue(); }} | reviewed in batch 02 |
| [src/components/ActCheckpoint.tsx:53](../../../ealch-v2/src/components/ActCheckpoint.tsx#L53) | Press | "button" | {T.restStop} | none | {onStop} | reviewed in batch 02 |
| [src/components/BottomSheet.tsx:105](../../../ealch-v2/src/components/BottomSheet.tsx#L105) | Press | "checkbox" | {`${v.fr}. ${v.en}`} | {{ checked: on }} | {() => setDone((d) => ({ ...d, [i]: !d[i] }))} | reviewed in batch 02 |
| [src/components/BottomSheet.tsx:174](../../../ealch-v2/src/components/BottomSheet.tsx#L174) | Press | "button" | {T.go} | none | {() => closeThen(() => router.push('/speak'))} | reviewed in batch 02 |
| [src/components/BottomSheet.tsx:232](../../../ealch-v2/src/components/BottomSheet.tsx#L232) | Press | "button" | {T.askCoach.replace('{name}', coachName)} | none | {() => closeThen(() => router.push('/chat'))} | reviewed in batch 02 |
| [src/components/BottomSheet.tsx:65](../../../ealch-v2/src/components/BottomSheet.tsx#L65) | Pressable | "button" | {T.a11yDismissPanel} | none | {() => closeThen()} | reviewed in batch 02 |
| [src/components/DictionaryOverlay.tsx:28](../../../ealch-v2/src/components/DictionaryOverlay.tsx#L28) | Pressable | "button" | {T.a11yDismissPanel} | none | {closeDict} | reviewed in batch 02 |
| [src/components/DictionaryOverlay.tsx:47](../../../ealch-v2/src/components/DictionaryOverlay.tsx#L47) | Press | "button" | {T.a11yClose} | none | {closeDict} | reviewed in batch 02 |
| [src/components/DictionaryOverlay.tsx:59](../../../ealch-v2/src/components/DictionaryOverlay.tsx#L59) | Press | "button" | {T.playAudioA11y} | none | {() => tts.speak(e.speak)} | reviewed in batch 02 |
| [src/components/DictionaryOverlay.tsx:80](../../../ealch-v2/src/components/DictionaryOverlay.tsx#L80) | Button | button via shared Button | {dictSaved ? (fr ? 'Enregistré ✓' : 'Saved ✓') : fr ? 'Ajouter au carnet' : 'Save to carnet'} | none | {toggleDictSaved} | reviewed in batch 02 |
| [src/components/LanguagePanel.tsx:148](../../../ealch-v2/src/components/LanguagePanel.tsx#L148) | Pressable | "button" | {T.a11yDismissPanel} | none | {onClose} | reviewed in batch 02 |
| [src/components/LanguagePanel.tsx:41](../../../ealch-v2/src/components/LanguagePanel.tsx#L41) | Press | "button" | {T.langChipLabel} | {{ expanded }} | {onPress} | reviewed in batch 02 |
| [src/components/LessonKeyIntro.tsx:169](../../../ealch-v2/src/components/LessonKeyIntro.tsx#L169) | Press | "button" | {T.lkSkip} | none | {finish} | reviewed in batch 02 |
| [src/components/LessonKeyIntro.tsx:196](../../../ealch-v2/src/components/LessonKeyIntro.tsx#L196) | Press | "button" | {T.lessonPrev} | {{ disabled: ix === 0 }} | {ix === 0 ? undefined : () => goTo(ix - 1)} | reviewed in batch 02 |
| [src/components/LessonKeyIntro.tsx:217](../../../ealch-v2/src/components/LessonKeyIntro.tsx#L217) | Button | button via shared Button | {T.lkStart} | none | {finish} | reviewed in batch 02 |
| [src/components/LessonKeyIntro.tsx:219](../../../ealch-v2/src/components/LessonKeyIntro.tsx#L219) | Press | "button" | {T.lessonNext} | none | {() => goTo(ix + 1)} | reviewed in batch 02 |
| [src/components/LessonModal.tsx:81](../../../ealch-v2/src/components/LessonModal.tsx#L81) | Pressable | "button" | {T.a11yDismissPanel} | none | {onClose} | reviewed in batch 02 |
| [src/components/LessonModal.tsx:96](../../../ealch-v2/src/components/LessonModal.tsx#L96) | Pressable | "button" | {T.a11yClose} | none | {onClose} | reviewed in batch 02 |
| [src/components/LessonPager.tsx:1028](../../../ealch-v2/src/components/LessonPager.tsx#L1028) | Press | "button" | {T.lessonPrevPage} | {{ disabled: onFirst }} | {onFirst ? undefined : () => goTo(page - 1)} | reviewed in batch 02; page target clarified after A2 device finding |
| [src/components/LessonPager.tsx:1053](../../../ealch-v2/src/components/LessonPager.tsx#L1053) | Press | "button" | {onLast ? finishLabel : T.lessonNextPage} | {{ disabled: finishBlocked \|\| nextBlocked }} | {onLast ? (finishBlocked ? undefined : onFinish) : nextBlocked ? undefined : () => goTo(page + 1)} | reviewed in batch 02; page target clarified after A2 device finding |
| [src/components/LessonPager.tsx:294](../../../ealch-v2/src/components/LessonPager.tsx#L294) | Press | "button" | {T.lessonListen} | none | {onPress} | reviewed in batch 02 |
| [src/components/LessonSection.tsx:140](../../../ealch-v2/src/components/LessonSection.tsx#L140) | Press | "button" | {`${ex.fr}. ${T.playAudioA11y}`} | none | {() => onPlay(id, ex.fr)} | reviewed in batch 02 |
| [src/components/LessonSection.tsx:251](../../../ealch-v2/src/components/LessonSection.tsx#L251) | Press | "button" | {`${str}. ${T.playAudioA11y}`} | none | {() => onPlay(id, str)} | reviewed in batch 02 |
| [src/components/ReferenceSheet.tsx:160](../../../ealch-v2/src/components/ReferenceSheet.tsx#L160) | Press | "button" | {returnLabel} | none | {onBack} | reviewed in batch 02 |
| [src/components/ReferenceSheet.tsx:185](../../../ealch-v2/src/components/ReferenceSheet.tsx#L185) | Press | "button" | {forwardLabel} | none | {onForward} | reviewed in batch 02 |
| [src/components/ReferenceSheet.tsx:229](../../../ealch-v2/src/components/ReferenceSheet.tsx#L229) | Press | "button" | {T.backWord} | none | {onBack} | reviewed in batch 02 |
| [src/components/ReferenceSheet.tsx:38](../../../ealch-v2/src/components/ReferenceSheet.tsx#L38) | Press | "button" | {T.sheetLinkA11y.replace('{n}', String(count))} | none | {() => { sound.play('tap'); onPress(); }} | reviewed in batch 02 |
| [src/components/ReferenceSheet.tsx:78](../../../ealch-v2/src/components/ReferenceSheet.tsx#L78) | Press | "button" | {s.title} | none | {() => onOpen(s.id)} | reviewed in batch 02 |

## Batch 03 (101 current sites)

| Site | Control | Role | Name source or visible content | State/value | Activation | Disposition |
|---|---|---|---|---|---|---|
| [src/components/LessonDeck.tsx:158](../../../ealch-v2/src/components/LessonDeck.tsx#L158) | Press | "button" | {T.a11yPlayItem.replace('{item}', fr)} | none | {() => onPlay?.(id, fr)} | reviewed in batch 03 |
| [src/components/LessonDeck.tsx:508](../../../ealch-v2/src/components/LessonDeck.tsx#L508) | Press | "button" | {T.lessonPrevCard} | {{ disabled: index === 0 }} | {onPrevious} when a previous card exists | added after A2 device finding; previous card only |
| [src/components/LessonDeck.tsx:519](../../../ealch-v2/src/components/LessonDeck.tsx#L519) | Press | "button" | {T.lessonNextCard} | {{ disabled: index === total - 1 }} | {onNext} when a next card exists | added after A2 device finding; next card only |
| [src/components/LessonDeck.tsx:668](../../../ealch-v2/src/components/LessonDeck.tsx#L668) | Press | "button" | {T.playAudioA11y} | none | {() => onPlay?.('qmodal', question.audio?.clip ?? question.q)} | reviewed in batch 03 |
| [src/components/LessonDeck.tsx:698](../../../ealch-v2/src/components/LessonDeck.tsx#L698) | Press | "button" | {o} | {{ selected: isPicked, disabled: picked !== null }} | {() => pick(i)} | reviewed in batch 03 |
| [src/components/LessonDeck.tsx:769](../../../ealch-v2/src/components/LessonDeck.tsx#L769) | Press | "button" | {T.a11yOpenTerm.replace('{item}', term)} | none | {() => setOpen(true)} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1039](../../../ealch-v2/src/components/LessonRich.tsx#L1039) | Press | "button" | <TX font="semi" role="body" color={t.accInk}>{T.redo}</TX> | none | {restart} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1045](../../../ealch-v2/src/components/LessonRich.tsx#L1045) | Press | "button" | {`${T.flipCardA11y}: ${flipped ? card.back : card.front}`} | {{ expanded: flipped }} | {flip} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1061](../../../ealch-v2/src/components/LessonRich.tsx#L1061) | Press | "button" | {T.a11yPlayItem.replace('{item}', card.say)} | none | {() => onPlay(pid, card.say!)} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1071](../../../ealch-v2/src/components/LessonRich.tsx#L1071) | Press | "button" | <TX font="semi" role="body" color={t.txSecondary}>{T.again}</TX> | none | {() => answer(false)} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1074](../../../ealch-v2/src/components/LessonRich.tsx#L1074) | Press | "button" | <TX font="semi" role="body" color={t.accInk}>{T.know}</TX> | none | {() => answer(true)} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1150](../../../ealch-v2/src/components/LessonRich.tsx#L1150) | Press | "button" | <TX font="semi" role="body" color={t.accInk}>{T.redo}</TX> | none | {restart} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1188](../../../ealch-v2/src/components/LessonRich.tsx#L1188) | Press | "button" | {T.a11yPlayItem.replace('{item}', item.fr)} | none | {() => onPlay(pid, item.fr, item.audioRef)} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1201](../../../ealch-v2/src/components/LessonRich.tsx#L1201) | Press | "button" | <TX font="semi" role="body" color={t.txSecondary}>{T.vfMissed}</TX> | none | {() => grade(false)} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1204](../../../ealch-v2/src/components/LessonRich.tsx#L1204) | Press | "button" | <TX font="semi" role="body" color={t.accInk}>{T.vfGot}</TX> | none | {() => grade(true)} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1325](../../../ealch-v2/src/components/LessonRich.tsx#L1325) | Press | "button" | <TX font="semi" role="body" color={t.accInk}>{T.redo}</TX> | none | {restart} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1377](../../../ealch-v2/src/components/LessonRich.tsx#L1377) | Press | "button" | {T.a11yPlayItem.replace('{item}', item.fr)} | none | {() => onPlay(pid, item.fr, item.audioRef)} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1393](../../../ealch-v2/src/components/LessonRich.tsx#L1393) | Press | "button" | <TX font="semi" role="body" color={t.txSecondary}>{T.wrReveal}</TX> | none | {reveal} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1396](../../../ealch-v2/src/components/LessonRich.tsx#L1396) | Press | "button" | <TX font="semi" role="body" color={typed.trim() ? t.accInk : t.txNonText}>{T.checkT}</TX> | {!typed.trim()} | {check} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1401](../../../ealch-v2/src/components/LessonRich.tsx#L1401) | Press | "button" | <TX font="semi" role="body" color={t.accInk}>{T.nextCard}</TX> | none | {next} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1533](../../../ealch-v2/src/components/LessonRich.tsx#L1533) | Press | "button" | {q.opts[oi]} | {{ selected: isSel, disabled: isAnswered }} | {() => pick(qi, oi)} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1578](../../../ealch-v2/src/components/LessonRich.tsx#L1578) | Press | "button" | <TX font="semi" role="body" color={t.accInk} center style={{ width: '100%' }}> {onNextLesson ? T.lessonNextUp : finishLabel} </TX> {onNextLesson && nextTitle ? ( <TX font="serifI" role="meta" color={t.accInk} center style={{ width: '100%', marginTop: 2, opacit | none | {onNextLesson ?? onFinish} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1593](../../../ealch-v2/src/components/LessonRich.tsx#L1593) | Press | "button" | <TX font="semi" role="bodySm" color={t.txSecondary}>{T.lessonRestart}</TX> | none | {onRestart} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:1601](../../../ealch-v2/src/components/LessonRich.tsx#L1601) | Press | "button" | <TX role="bodySm" color={t.txMuted}>{T.retry}</TX> | none | {retry} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:219](../../../ealch-v2/src/components/LessonRich.tsx#L219) | Press | "button" | {T.a11yPlayItem.replace('{item}', text)} | none | {() => onPlay(id, text)} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:251](../../../ealch-v2/src/components/LessonRich.tsx#L251) | Press | "button" | {T.a11yPlayItem.replace('{item}', label)} | none | {() => onPlay(id, text)} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:288](../../../ealch-v2/src/components/LessonRich.tsx#L288) | Press | "button" | {T.a11yOpenTerm.replace('{item}', `${l.ch} ${l.name}`)} | none | {() => { sound.play('flip'); setSel(l); }} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:679](../../../ealch-v2/src/components/LessonRich.tsx#L679) | Press | "button" | {(row.detail ? T.a11yOpenTerm : T.a11yPlayItem).replace('{item}', row.cells.join(', '))} | {!row.detail && !row.say} | {() => { sound.play('flip'); if (row.detail) setSel(row); else if (row.say) onPlay(`${s.title}-row-${ri}`, row.say); }} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:741](../../../ealch-v2/src/components/LessonRich.tsx#L741) | Press | "button" | {row.map((cell, ci) => ( <TX key={ci} role="bodySm" lhMult={1.45} color={t.txSecondary} style={{ flex: 1 }}>{cell}</TX> ))} {detail ? <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} /> : null} | {!detail} | {() => { if (!detail) return; sound.play('flip'); setSel({ ri, detail }); }} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:804](../../../ealch-v2/src/components/LessonRich.tsx#L804) | Press | "button" | <TX font="serif" role="bodySm" color={t.accTx} style={{ width: 90 }}>{r.k}</TX> <TX role="bodySm" color={t.txSecondary} style={{ flex: 1 }}>{r.v}</TX> {r.detail ? <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} /> : null} | {!r.detail} | {() => { if (!r.detail) return; sound.play('flip'); setSel(r); }} | reviewed in batch 03 |
| [src/components/LessonRich.tsx:877](../../../ealch-v2/src/components/LessonRich.tsx#L877) | Press | "button" | {T.a11yOpenTerm.replace('{item}', th.title)} | none | {() => { sound.play('flip'); setIx(0); setSel(th); }} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:115](../../../ealch-v2/src/components/MissionRich.tsx#L115) | Press | "button" | {label} | {{ disabled: !!state, selected: state === 'correct' \|\| state === 'wrong' }} | {state ? undefined : onPress} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:1198](../../../ealch-v2/src/components/MissionRich.tsx#L1198) | Press | "button" | {held ? T.answerAllToContinue : T.continueT} | {{ disabled: held }} | {() => { if (held) return; const next = step + 1; setStep(next); onIndexChange?.(next); }} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:1299](../../../ealch-v2/src/components/MissionRich.tsx#L1299) | Press | "button" | {T.micA11y} | none | {mic} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:1341](../../../ealch-v2/src/components/MissionRich.tsx#L1341) | Press | "tab" | <TX font="semi" role="meta" color={i === tab ? t.accTx : t.txSecondary}>{so.label}</TX> | {{ selected: i === tab }} | {() => setTab(i)} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:1491](../../../ealch-v2/src/components/MissionRich.tsx#L1491) | Press | "button" | {T.a11yPlayItem.replace('{item}', item.fr)} | {{ disabled: plays <= 0 \|\| speaking }} | {play} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:1562](../../../ealch-v2/src/components/MissionRich.tsx#L1562) | Press | "button" | {b.ch} | {used.includes(b.id) \|\| checked !== null} | {() => tap(b.id)} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:1590](../../../ealch-v2/src/components/MissionRich.tsx#L1590) | Press | "button" | {T.a11yDeleteTile} | {used.length === 0 \|\| checked !== null} | {del} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:1601](../../../ealch-v2/src/components/MissionRich.tsx#L1601) | Press | "button" | <TX font="semi" role="body" color={t.accInk}>{T.checkT}</TX> | {filled.length === 0} | {filled.length > 0 ? check : undefined} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:1610](../../../ealch-v2/src/components/MissionRich.tsx#L1610) | Press | "button" | <TX font="semi" role="body" color={t.accInk}>{T.continueT}</TX> | none | {() => onDone(!!checked)} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:1940](../../../ealch-v2/src/components/MissionRich.tsx#L1940) | Press | "button" | <TX font="semi" role="body" color={t.accInk}>{isLast ? T.sceneEnd : T.continueT}</TX> | none | {onNext} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:1959](../../../ealch-v2/src/components/MissionRich.tsx#L1959) | Press | "button" | <Icon name="mic" size={16} color={listening ? t.danger : t.acc} /> <TX font="semi" role="body" color={listening ? t.danger : t.accTx}> {listening ? T.rpListening : T.rpSpeak} </TX> | none | {mic} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:1969](../../../ealch-v2/src/components/MissionRich.tsx#L1969) | Press | "button" | <TX font="semi" role="body" color={t.txSecondary}>{T.rpShowMe}</TX> | {listening} | {show} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:2176](../../../ealch-v2/src/components/MissionRich.tsx#L2176) | Press | "button" | {`${q.q}${answered ? `, ${right ? T.a11yAnswerCorrect : T.a11yAnswerIncorrect}` : ''}`} | none | {() => setOpen(qi)} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:2236](../../../ealch-v2/src/components/MissionRich.tsx#L2236) | Press | "button" | {q.q} | {{ expanded: !!open[i] }} | {() => setOpen((o) => ({ ...o, [i]: !o[i] }))} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:2287](../../../ealch-v2/src/components/MissionRich.tsx#L2287) | Press | "button" | {`${T.flipCardA11y}: ${flipped ? c.back : c.front}`} | {{ expanded: flipped }} | {() => setFlipped((f) => !f)} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:2299](../../../ealch-v2/src/components/MissionRich.tsx#L2299) | Press | "button" | <TX font="semi" role="bodySm" color={t.danger}>{T.again}</TX> | none | {() => bump('again')} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:2302](../../../ealch-v2/src/components/MissionRich.tsx#L2302) | Press | "button" | <TX font="semi" role="bodySm" color={t.txSecondary}>{T.a11yHard}</TX> | none | {() => bump('hard')} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:2305](../../../ealch-v2/src/components/MissionRich.tsx#L2305) | Press | "button" | <TX font="semi" role="bodySm" color={t.accInk}>{T.a11yEasy}</TX> | none | {() => bump('easy')} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:243](../../../ealch-v2/src/components/MissionRich.tsx#L243) | Press | "button" | {T.a11yOpenTerm.replace('{item}', `${snd.ipa}, ${snd.graphemes.join(', ')}`)} | none | {onPress} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:507](../../../ealch-v2/src/components/MissionRich.tsx#L507) | Press | "button" | {T.langRevealLabel} | {{ expanded: isRevealed }} | {() => setRevealed((prev) => { const next = new Set(prev); next.add(i); return next; }) } | reviewed in batch 03 |
| [src/components/MissionRich.tsx:748](../../../ealch-v2/src/components/MissionRich.tsx#L748) | Press | "button" | <TX font="semi" role="body" color={t.accInk}>{T.nextGroup}</TX> | none | {() => setIx((n) => n + 1)} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:78](../../../ealch-v2/src/components/MissionRich.tsx#L78) | Press | "button" | {T.a11yPlayItem.replace('{item}', text)} | {{ disabled: playing }} | {go} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:782](../../../ealch-v2/src/components/MissionRich.tsx#L782) | Press | "button" | {flipped ? `${c.fr}. ${c.tip}` : `${c.promptLabel}. ${T.tapToFlip}.`} | {{ expanded: flipped }} | {() => setFlipped((f) => !f)} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:977](../../../ealch-v2/src/components/MissionRich.tsx#L977) | Press | "button" | {`${T.a11yPlayItem.replace('{item}', c.fr)}, ${rate < NORMAL_RATE ? T.a11ySlow : T.a11yNormal}`} | none | {() => say(c.fr, rate)} | reviewed in batch 03 |
| [src/components/MissionSection.tsx:104](../../../ealch-v2/src/components/MissionSection.tsx#L104) | Press | "button" | {error.right} | none | {() => onPlay(rid, error.right)} | reviewed in batch 03 |
| [src/components/MissionSection.tsx:129](../../../ealch-v2/src/components/MissionSection.tsx#L129) | Press | "button" | {T.a11ySayWords} | none | {onPress} | reviewed in batch 03 |
| [src/components/MissionSection.tsx:355](../../../ealch-v2/src/components/MissionSection.tsx#L355) | Press | "button" | {T.termsMore.replace('{n}', String(hiddenTerms))} | none | {() => setChipsOpen(true)} | reviewed in batch 03 |
| [src/components/QuizRoundsView.tsx:197](../../../ealch-v2/src/components/QuizRoundsView.tsx#L197) | Press | "button" | {T.a11ySeeAgain} | none | {() => onJumpToRef(question.ref!)} | reviewed in batch 03 |
| [src/components/QuizRoundsView.tsx:210](../../../ealch-v2/src/components/QuizRoundsView.tsx#L210) | Button | button via shared Button | {T.continueT} | none | {next} | reviewed in batch 03 |
| [src/components/QuizRoundsView.tsx:275](../../../ealch-v2/src/components/QuizRoundsView.tsx#L275) | Press | "button" | {o} | {{ selected: isPicked, disabled: picked !== null }} | {() => pick(i)} | reviewed in batch 03 |
| [src/components/QuizRoundsView.tsx:350](../../../ealch-v2/src/components/QuizRoundsView.tsx#L350) | Press | "button" | {T.a11yPlayItem.replace('{item}', target)} | none | {() => onPlay?.(id, target)} | reviewed in batch 03 |
| [src/components/QuizRoundsView.tsx:367](../../../ealch-v2/src/components/QuizRoundsView.tsx#L367) | Button | button via shared Button | {T.a11ySaidIt} | none | {() => { setSaid(true); sound.play('success'); onAnswer(true); }} | reviewed in batch 03 |
| [src/components/QuizRoundsView.tsx:403](../../../ealch-v2/src/components/QuizRoundsView.tsx#L403) | Button | button via shared Button | {T.continueT} | none | {onDone} | reviewed in batch 03 |
| [src/components/QuizRoundsView.tsx:440](../../../ealch-v2/src/components/QuizRoundsView.tsx#L440) | Press | "button" | {o} | {{ selected: answered === i, disabled: answered !== null }} | {() => { setAnswered(i); sound.play(isRight ? 'success' : 'error'); }} | reviewed in batch 03 |
| [src/components/QuizRoundsView.tsx:466](../../../ealch-v2/src/components/QuizRoundsView.tsx#L466) | Button | button via shared Button | {T.continueT} | {hasInlineQuestion && answered === null} | {onDone} | reviewed in batch 03 |
| [src/components/QuizRoundsView.tsx:546](../../../ealch-v2/src/components/QuizRoundsView.tsx#L546) | Button | button via shared Button | {finishLabel ?? T.a11yDone} | none | {onFinish} | reviewed in batch 03 |
| [src/components/ReadingPages.tsx:172](../../../ealch-v2/src/components/ReadingPages.tsx#L172) | Press | "button" | {T.a11yPlaySentence.replace('{n}', String(i + 1))} | none | {() => onPlay?.(`sentence-${i}`, s)} | reviewed in batch 03 |
| [src/components/ReadingPages.tsx:197](../../../ealch-v2/src/components/ReadingPages.tsx#L197) | Button | button via shared Button | {`${continueLabel ?? T.a11yTextUnderstood} →`} | none | {onContinue} | reviewed in batch 03 |
| [src/components/ReadingPages.tsx:204](../../../ealch-v2/src/components/ReadingPages.tsx#L204) | Press | "button" | {T.a11yPlayItem.replace('{item}', open.word)} | none | {() => onPlay?.('gloss', open.word)} | reviewed in batch 03 |
| [src/components/ReadingPages.tsx:263](../../../ealch-v2/src/components/ReadingPages.tsx#L263) | TX | "button" | {T.a11yTranslation.replace('{item}', core)} | none | {() => onWord(g)} | reviewed in batch 03 |
| [src/components/ReadingPages.tsx:304](../../../ealch-v2/src/components/ReadingPages.tsx#L304) | Press | "button" | {T.a11yBackText} | none | {onBack} | reviewed in batch 03 |
| [src/components/ReadingPages.tsx:357](../../../ealch-v2/src/components/ReadingPages.tsx#L357) | Press | "button" | {shown ? T.a11yReadingAnswer.replace('{item}', question.a) : T.a11yReadingQuestion.replace('{n}', String(index + 1)).replace('{item}', question.q)} | {{ expanded: shown }} | {() => { sound.play('flip'); setShown((s) => !s); }} | reviewed in batch 03 |
| [src/components/ReadingPages.tsx:96](../../../ealch-v2/src/components/ReadingPages.tsx#L96) | Press | "button" | {T.a11yPlayPassage} | none | {() => onPlay?.('passage', text)} | reviewed in batch 03 |
| [src/components/ScenePlayer.tsx:124](../../../ealch-v2/src/components/ScenePlayer.tsx#L124) | Button | button via shared Button | {done ? T.sceneEnd : T.continueT} | {blocked} | {next} | reviewed in batch 03 |
| [src/components/ScenePlayer.tsx:174](../../../ealch-v2/src/components/ScenePlayer.tsx#L174) | Button | button via shared Button | {T.sceneStart} | none | {onStart} | reviewed in batch 03 |
| [src/components/ScenePlayer.tsx:257](../../../ealch-v2/src/components/ScenePlayer.tsx#L257) | Press | "button" | {beat.fr} | {{ disabled: !speakable }} | {speakable ? () => onPlay?.(id, beat.fr) : undefined} | reviewed in batch 03 |
| [src/components/ScenePlayer.tsx:347](../../../ealch-v2/src/components/ScenePlayer.tsx#L347) | Press | "button" | {`${o.fr} ${o.respell ?? ''}`} | {{ selected: isPicked, disabled: answered }} | {() => onPick(i)} | reviewed in batch 03 |
| [src/components/ScenePlayer.tsx:465](../../../ealch-v2/src/components/ScenePlayer.tsx#L465) | Press | {onPlay ? 'button' : 'text'} | {`${tone === 'right' ? T.a11yAnswerCorrect : T.a11yAnswerIncorrect}: ${side.fr}, ${side.en}`} | {!onPlay} | {onPlay} | reviewed in batch 03 |
| [src/components/SilentCards.tsx:186](../../../ealch-v2/src/components/SilentCards.tsx#L186) | Press | "button" | {seeAll} | none | {onOpenSheet} | reviewed in batch 03 |
| [src/components/SilentCards.tsx:439](../../../ealch-v2/src/components/SilentCards.tsx#L439) | Press | "button" | {`${item.fr}, ${item.en ?? ''}`} | none | {() => onPlay?.(pid, item.fr, audio ? undefined : item.audioRef)} | reviewed in batch 03 |
| [src/components/SilentCards.tsx:663](../../../ealch-v2/src/components/SilentCards.tsx#L663) | Press | "checkbox" | {g.ch} | {{ checked: on, disabled: checked !== null \|\| g.ch === ' ' }} | {() => toggle(i)} | reviewed in batch 03 |
| [src/components/SilentCards.tsx:779](../../../ealch-v2/src/components/SilentCards.tsx#L779) | Press | "button" | {T.playAudioA11y} | none | {play} | reviewed in batch 03 |
| [src/components/SilentCards.tsx:812](../../../ealch-v2/src/components/SilentCards.tsx#L812) | Press | "button" | {o} | {{ selected: isPicked, disabled: picked !== null }} | {() => pick(i)} | reviewed in batch 03 |
| [src/components/SilentCards.tsx:91](../../../ealch-v2/src/components/SilentCards.tsx#L91) | Press | "button" | {`${letter.ch}, ${letter.verdict ?? ''}${letter.rule ? `, ${letter.rule}` : ''}, ${letter.ex}`} | none | {() => onPlay?.(id, letter.ex)} | reviewed in batch 03 |
| [src/components/SilentCards.tsx:933](../../../ealch-v2/src/components/SilentCards.tsx#L933) | Button | button via shared Button | {T.checkT} | {!text.trim()} | {submit} | reviewed in batch 03 |
| [src/components/SpeedPicker.tsx:39](../../../ealch-v2/src/components/SpeedPicker.tsx#L39) | Press | "radio" | <TX font="semi" role="meta" color={on ? t.accInk : t.txSecondary}> {labelFor(v)} </TX> | {{ selected: on }} | {() => onChange(v)} | reviewed in batch 03 |
| [src/components/TaskView.tsx:121](../../../ealch-v2/src/components/TaskView.tsx#L121) | Press | "button" | {T.a11yInsert.replace('{item}', chip)} | {audio} | {() => setAnswer((a) => (a ? `${a} ${chip}` : chip))} | reviewed in batch 03 |
| [src/components/TaskView.tsx:151](../../../ealch-v2/src/components/TaskView.tsx#L151) | Press | "checkbox" | {c.label} | {{ checked: on }} | {() => setTicked((p) => ({ ...p, [c.key]: !p[c.key] }))} | reviewed in batch 03 |
| [src/components/TaskView.tsx:183](../../../ealch-v2/src/components/TaskView.tsx#L183) | Press | "button" | <TX font="semi" role="bodySm" color={t.accTx}>{T.a11yShowModel}</TX> | none | {() => setRevealed(true)} | reviewed in batch 03 |
| [src/components/TimeWheel.tsx:12](../../../ealch-v2/src/components/TimeWheel.tsx#L12) | Press | "button" | {dir === 1 ? upLabel : downLabel} | none | {() => onStep(dir)} | reviewed in batch 03 |
| [src/components/TimeWheel.tsx:123](../../../ealch-v2/src/components/TimeWheel.tsx#L123) | Press | "radio" | <TX font="bold" role="meta" ls={1} color={on ? t.accInk : t.txMuted}> {mer} </TX> | {{ selected: on }} | {() => setMeridiem(mer === 'PM')} | reviewed in batch 03 |
| [src/components/TimeWheel.tsx:72](../../../ealch-v2/src/components/TimeWheel.tsx#L72) | Press | "radio" | <TX font="semi" role="meta" ls={1} color={on ? t.accInk : t.txMuted}> {v ? T.clock24T : T.clock12T} </TX> | {{ selected: on }} | {() => setClock24(v)} | reviewed in batch 03 |
| [src/components/Type.tsx:161](../../../ealch-v2/src/components/Type.tsx#L161) | Text | "button" | {T.langRevealLabel} | {{ expanded: false }} | {() => setRevealed(true)} | reviewed in batch 03 |
| [src/components/Type.tsx:190](../../../ealch-v2/src/components/Type.tsx#L190) | Text | "button" | {T.langRevealLabel} | {{ expanded: revealed }} | {() => setRevealed(true)} | reviewed in batch 03 |
| [src/components/WordCardXL.tsx:199](../../../ealch-v2/src/components/WordCardXL.tsx#L199) | Press | "button" | {T.a11yPlayItem.replace('{item}', label)} | none | {onPress} | reviewed in batch 03 |
| [src/components/WordPractice.tsx:151](../../../ealch-v2/src/components/WordPractice.tsx#L151) | Pressable | "button" | {T.a11yDismissPanel} | none | {onClose} | reviewed in batch 03 |
| [src/components/WordPractice.tsx:234](../../../ealch-v2/src/components/WordPractice.tsx#L234) | Press | "button" | {T.playAudioA11y} | none | {() => { sound.play('tap'); if (word) tts.speak(word); }} | reviewed in batch 03 |
| [src/components/WordPractice.tsx:244](../../../ealch-v2/src/components/WordPractice.tsx#L244) | Press | "button" | {T.micA11y} | none | {micTap} | reviewed in batch 03 |
| [src/components/WordPractice.tsx:256](../../../ealch-v2/src/components/WordPractice.tsx#L256) | Press | "button" | {T.speakNextWord} | {{ disabled: nextTarget < 0 && ix + 1 >= words.length }} | {() => { sound.play('tap'); goTo(nextTarget >= 0 ? nextTarget : ix + 1); }} | reviewed in batch 03 |
| [src/components/WordPractice.tsx:289](../../../ealch-v2/src/components/WordPractice.tsx#L289) | Press | "button" | <TX font="semi" role="label" color={allDone ? t.accInk : t.txSecondary}> {T.speakBackToLine} </TX> | none | {onClose} | reviewed in batch 03 |

## Batch 04 (49 current sites)

| Site | Control | Role | Name source or visible content | State/value | Activation | Disposition |
|---|---|---|---|---|---|---|
| [app/delete-account.tsx:175](../../../ealch-v2/app/delete-account.tsx#L175) | Press | "button" | {isGuest ? T.delBtnGuest : T.delBtn} | {{ disabled: !armed \|\| pending }} | {submit} | reviewed in batch 04 |
| [app/delete-account.tsx:199](../../../ealch-v2/app/delete-account.tsx#L199) | Button | button via shared Button | {T.delCancel} | none | {() => router.back()} | reviewed in batch 04 |
| [app/feedback.tsx:142](../../../ealch-v2/app/feedback.tsx#L142) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.backFeed} </TX> | none | {() => router.replace('/home')} | reviewed in batch 04 |
| [app/feedback.tsx:226](../../../ealch-v2/app/feedback.tsx#L226) | Press | "button" | {inner} | none | {() => { const parsed = parseAnchor(anchor); if (parsed) router.push({ pathname: '/lesson', params: { key: parsed.lessonId, at: anchor } }); }} | reviewed in batch 04 |
| [app/feedback.tsx:257](../../../ealch-v2/app/feedback.tsx#L257) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.practiceWeak} </TX> | none | {() => router.push('/voiceflash')} | reviewed in batch 04 |
| [app/licences.tsx:39](../../../ealch-v2/app/licences.tsx#L39) | Press | {c.url ? 'link' : 'text'} | {`${c.name}. ${c.note}`} | {!c.url} | {() => open(c.url)} | reviewed in batch 04 |
| [app/licences.tsx:69](../../../ealch-v2/app/licences.tsx#L69) | Press | "link" | {label} | none | {() => open(url)} | reviewed in batch 04 |
| [app/paywall.tsx:213](../../../ealch-v2/app/paywall.tsx#L213) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.pwExamGotIt} </TX> | none | {() => router.back()} | reviewed in batch 04 |
| [app/paywall.tsx:246](../../../ealch-v2/app/paywall.tsx#L246) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.cont} </TX> | none | {() => router.back()} | reviewed in batch 04 |
| [app/paywall.tsx:299](../../../ealch-v2/app/paywall.tsx#L299) | Press | "radio" | {`${row.label}, ${row.price}, ${row.sub}`} | {{ selected: on }} | {() => pick(row.id)} | reviewed in batch 04 |
| [app/paywall.tsx:356](../../../ealch-v2/app/paywall.tsx#L356) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {userId ? T.pwCta : T.pwCtaGuest} </TX> | {busy} | {() => void buy()} | reviewed in batch 04 |
| [app/paywall.tsx:374](../../../ealch-v2/app/paywall.tsx#L374) | Press | "button" | <TX font="semi" role="label" color={t.accTx}>{T.pwReturnFree}</TX> | none | {() => router.replace('/den')} | reviewed in batch 04 |
| [app/paywall.tsx:380](../../../ealch-v2/app/paywall.tsx#L380) | Press | "button" | <TX role="label" color={t.txSubtle}> {T.restoreT} </TX> | {busy} | {() => void restore()} | reviewed in batch 04 |
| [app/paywall.tsx:407](../../../ealch-v2/app/paywall.tsx#L407) | Press | "radio" | <TX font={on ? 'semi' : 'sans'} role="label" color={on ? t.accTx : t.txMuted}> {c} </TX> | {{ selected: on }} | {() => setCurrency(c)} | reviewed in batch 04 |
| [app/paywall.tsx:448](../../../ealch-v2/app/paywall.tsx#L448) | TX | "link" | {T.legalTerms} | none | {() => { Linking.openURL(LEGAL.termsUrl).catch(() => {}); }} | reviewed in batch 04 |
| [app/paywall.tsx:458](../../../ealch-v2/app/paywall.tsx#L458) | TX | "link" | {T.legalPrivacy} | none | {() => { Linking.openURL(LEGAL.privacyUrl).catch(() => {}); }} | reviewed in batch 04 |
| [app/profile.tsx:256](../../../ealch-v2/app/profile.tsx#L256) | Press | "button" | {T.a11ySaveName} | none | {saveName} | reviewed in batch 04 |
| [app/profile.tsx:261](../../../ealch-v2/app/profile.tsx#L261) | Press | "button" | {`${T.a11yEditName}, ${userName \|\| T.guestName}`} | none | {startEditName} | reviewed in batch 04 |
| [app/profile.tsx:290](../../../ealch-v2/app/profile.tsx#L290) | Press | "radio" | <TX font="semi" role="meta" ls={1} color={on ? t.accInk : t.txMuted}> {l.toUpperCase()} </TX> | {{ selected: on }} | {() => setLang(l)} | reviewed in batch 04 |
| [app/profile.tsx:298](../../../ealch-v2/app/profile.tsx#L298) | Press | "button" | {T.a11yOpenSettings} | none | {() => router.push('/settings')} | reviewed in batch 04 |
| [app/profile.tsx:429](../../../ealch-v2/app/profile.tsx#L429) | Press | "button" | <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}> <TX font="serifI" role="titleSm" color={t.accTx}> {d.glyph} </TX> </View> <View style={{ flex: 1 }}> <TX font="semi" role="b | none | {d.open} | reviewed in batch 04 |
| [app/profile.tsx:473](../../../ealch-v2/app/profile.tsx#L473) | Press | "radio" | <TX role="bodySm" color={on ? t.accTx : t.txSecondary}> {a.name} </TX> | {{ selected: on }} | {() => setRegion(a.id)} | reviewed in batch 04 |
| [app/profile.tsx:526](../../../ealch-v2/app/profile.tsx#L526) | Press | "button" | <Icon name="gear" size={18} color={t.acc} /> <TX font="semi" role="body" style={{ flex: 1 }}> {T.settingsT} </TX> <Icon name="chevronRight" size={14} color={t.txNonText} strokeWidth={1.6} /> | none | {() => router.push('/settings')} | reviewed in batch 04 |
| [app/profile.tsx:550](../../../ealch-v2/app/profile.tsx#L550) | Press | "button" | <TX font="semi" role="body" color={t.tag('danger').c}> {T.signOut} </TX> | none | {() => { void auth.signOut(); signOut(); router.replace('/onboarding'); }} | reviewed in batch 04 |
| [app/reset.tsx:137](../../../ealch-v2/app/reset.tsx#L137) | Button | button via shared Button | {T.backToSignIn} | none | {() => router.replace('/signin')} | reviewed in batch 04 |
| [app/reset.tsx:155](../../../ealch-v2/app/reset.tsx#L155) | Button | button via shared Button | {T.setNewPw} | {pending \|\| !checked \|\| !tokens} | {submit} | reviewed in batch 04 |
| [app/reset.tsx:161](../../../ealch-v2/app/reset.tsx#L161) | Press | "button" | <TX role="bodySm" color={t.txMuted}> {T.backToSignIn} </TX> | none | {() => router.replace('/signin')} | reviewed in batch 04 |
| [app/settings.tsx:183](../../../ealch-v2/app/settings.tsx#L183) | Press | "button" | <LinearGradient colors={[t.accA(16), 'transparent']} start={{ x: 0.9, y: 0 }} end={{ x: 0.3, y: 0.7 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} /> <View style={{ flexDirection: 'row', alignItems: 'center' }}> <View style={{ flex:  | none | {() => router.push({ pathname: '/paywall', params: { from: 'settings' } })} | reviewed in batch 04 |
| [app/settings.tsx:242](../../../ealch-v2/app/settings.tsx#L242) | Press | "button" | <Icon name="restart" size={18} color={t.acc} /> <View style={{ flex: 1 }}> <TX font="semi" role="body"> {T.restoreT} </TX> {restoreMsg ? ( <TX role="label" color={t.txSubtle} style={{ marginTop: 1 }}> {restoreMsg} </TX> ) : null} </View> <Icon name="chevronRig | {restoring} | {() => void doRestore()} | reviewed in batch 04 |
| [app/settings.tsx:273](../../../ealch-v2/app/settings.tsx#L273) | Press | "button" | <Icon name="download" size={18} color={t.acc} /> <View style={{ flex: 1 }}> <TX font="semi" role="body"> {T.downloadsT} </TX> <TX role="label" color={t.txSubtle} style={{ marginTop: 1 }}> {T.downloadsS} </TX> </View> <Icon name="chevronRight" size={14} color={ | none | {() => router.push('/downloads')} | reviewed in batch 04 |
| [app/settings.tsx:309](../../../ealch-v2/app/settings.tsx#L309) | Press | "radio" | {`${lg.ch}${soon ? `, ${T.soonT}` : ''}`} | {{ selected: on, disabled: soon }} | {soon ? undefined : () => setAppLang(lg.id)} | reviewed in batch 04 |
| [app/settings.tsx:343](../../../ealch-v2/app/settings.tsx#L343) | Press | "radio" | <TX role="bodySm" color={on ? t.accTx : t.txSecondary}> {a.name} </TX> | {{ selected: on }} | {() => setRegion(a.id)} | reviewed in batch 04 |
| [app/settings.tsx:376](../../../ealch-v2/app/settings.tsx#L376) | Press | "radio" | {label} | {{ selected: on }} | {() => setMode(m)} | reviewed in batch 04 |
| [app/settings.tsx:402](../../../ealch-v2/app/settings.tsx#L402) | Press | "radio" | {th.n} | {{ selected: on }} | {() => setAccent(th.c)} | reviewed in batch 04 |
| [app/settings.tsx:427](../../../ealch-v2/app/settings.tsx#L427) | Press | "radio" | {a.name} | {{ selected: on }} | {() => setAvatarId(a.id)} | reviewed in batch 04 |
| [app/settings.tsx:475](../../../ealch-v2/app/settings.tsx#L475) | Press | "button" | {`${T.a11yChangeAlarm}, ${formatTime(alarmTime, clock24)}`} | {{ expanded: showWheel }} | {() => setShowWheel((v) => !v)} | reviewed in batch 04 |
| [app/settings.tsx:506](../../../ealch-v2/app/settings.tsx#L506) | Press | "radio" | <TX font="semi" role="label" color={on ? t.accTx : t.txSecondary}> {formatTime(chip.time, clock24)} </TX> | {{ selected: on }} | {() => setAlarm(chip.time)} | reviewed in batch 04 |
| [app/settings.tsx:528](../../../ealch-v2/app/settings.tsx#L528) | Press | "button" | <TX font="semi" role="label" color={t.accTx}> {T.testAlarm} </TX> | none | {testAlarm} | reviewed in batch 04 |
| [app/settings.tsx:569](../../../ealch-v2/app/settings.tsx#L569) | Press | "button" | {T.licT} | none | {() => router.push('/licences')} | reviewed in batch 04 |
| [app/settings.tsx:604](../../../ealch-v2/app/settings.tsx#L604) | Press | "button" | {T.delAccount} | none | {() => router.push('/delete-account')} | reviewed in batch 04 |
| [app/signin.tsx:133](../../../ealch-v2/app/signin.tsx#L133) | Press | "button" | <TX role="label" color={reset === 'sent' ? t.accTx : t.txSubtle}> {reset === 'sent' ? T.resetSent : T.forgotPw} </TX> | {reset === 'pending'} | {doReset} | reviewed in batch 04 |
| [app/signin.tsx:141](../../../ealch-v2/app/signin.tsx#L141) | Button | button via shared Button | {T.signInBtn} | {pending} | {doSignIn} | reviewed in batch 04 |
| [app/signin.tsx:151](../../../ealch-v2/app/signin.tsx#L151) | Button | button via shared Button | {T.withApple} | none | {() => oauth('apple')} | reviewed in batch 04 |
| [app/signin.tsx:152](../../../ealch-v2/app/signin.tsx#L152) | Button | button via shared Button | {T.withGoogle} | none | {() => oauth('google')} | reviewed in batch 04 |
| [app/signin.tsx:155](../../../ealch-v2/app/signin.tsx#L155) | Press | "button" | <TX role="bodySm" color={t.txMuted}> {T.newHere} <TX font="semi" role="bodySm" color={t.accTx}>{T.createAccount}</TX> </TX> | none | {() => router.replace('/onboarding')} | reviewed in batch 04 |
| [src/components/AuthFields.tsx:112](../../../ealch-v2/src/components/AuthFields.tsx#L112) | TX | "link" | {label} | none | {() => open(url)} | reviewed in batch 04 |
| [src/components/AuthFields.tsx:78](../../../ealch-v2/src/components/AuthFields.tsx#L78) | Press | "button" | {shown ? T.pwHide : T.pwShow} | none | {() => setShown((v) => !v)} | reviewed in batch 04 |
| [src/components/ErrorScreen.tsx:85](../../../ealch-v2/src/components/ErrorScreen.tsx#L85) | Pressable | "button" | {copy.retry} | none | {retry} | reviewed in batch 04 |
| [src/components/PushBanner.tsx:98](../../../ealch-v2/src/components/PushBanner.tsx#L98) | Press | "button" | {`${masthead}. ${bodyText}`} | none | {onBannerPress} | reviewed in batch 04 |

## Batch 06 (9 current sites)

| Site | Control | Role | Name source or visible content | State/value | Activation | Disposition |
|---|---|---|---|---|---|---|
| [app/flashcards.tsx:354](../../../ealch-v2/app/flashcards.tsx#L354) | Press | "button" | {frFront ? 'FR → EN' : 'EN → FR'} | none | {flipDir} | reviewed in batch 06 |
| [app/flashcards.tsx:403](../../../ealch-v2/app/flashcards.tsx#L403) | Press | "button" | {T.backFeed} | none | {() => router.replace('/home')} | reviewed in batch 06 |
| [app/flashcards.tsx:423](../../../ealch-v2/app/flashcards.tsx#L423) | Press | "button" | {T.redo} | none | {restart} | reviewed in batch 06 |
| [app/flashcards.tsx:442](../../../ealch-v2/app/flashcards.tsx#L442) | Press | "button" | {T.backFeed} | none | {() => router.replace('/home')} | reviewed in batch 06 |
| [app/flashcards.tsx:513](../../../ealch-v2/app/flashcards.tsx#L513) | Press | "button" | {T.playAudioA11y} | none | {say} | reviewed in batch 06 |
| [app/flashcards.tsx:585](../../../ealch-v2/app/flashcards.tsx#L585) | Press | "button" | {T.playAudioA11y} | none | {say} | reviewed in batch 06 |
| [app/flashcards.tsx:598](../../../ealch-v2/app/flashcards.tsx#L598) | Press | "button" | {T.flipCardA11y} | none | {flipCard} | reviewed in batch 06 |
| [app/flashcards.tsx:610](../../../ealch-v2/app/flashcards.tsx#L610) | Press | "button" | {T.again} | none | {() => answerCard(false)} | reviewed in batch 06 |
| [app/flashcards.tsx:630](../../../ealch-v2/app/flashcards.tsx#L630) | Press | "button" | {T.know} | none | {() => answerCard(true)} | reviewed in batch 06 |

## Batch 07 (45 current sites)

| Site | Control | Role | Name source or visible content | State/value | Activation | Disposition |
|---|---|---|---|---|---|---|
| [app/flashhub.tsx:76](../../../ealch-v2/app/flashhub.tsx#L76) | Press | "button" | {`${lang === 'fr' ? meta.fr : meta.en}, ${T.ctCardsN.replace('{n}', String(count))}`} | none | {() => router.push({ pathname: '/flashthemes', params: { domain: slug } })} | reviewed in batch 07 |
| [app/flashthemes.tsx:121](../../../ealch-v2/app/flashthemes.tsx#L121) | Press | "button" | {`${lang === 'fr' ? r.title : r.en}, ${T.ctCardsN.replace('{n}', String(r.count))}${!levelsAll && !(FREE_BANDS as readonly string[]).includes(r.lo) ? `, ${T.premLockTag}` : ''}`} | none | {() => router.push({ pathname: '/flashcards', params: { domain: slug, theme: r.slug } })} | reviewed in batch 07 |
| [app/flashthemes.tsx:96](../../../ealch-v2/app/flashthemes.tsx#L96) | Press | "button" | {T.byTypeT} | none | {() => router.push({ pathname: '/flashtypes', params: { domain: slug } })} | reviewed in batch 07 |
| [app/flashtypes.tsx:132](../../../ealch-v2/app/flashtypes.tsx#L132) | Press | "radio" | {b === null ? T.lvlAll : b.toUpperCase()} | {{ selected: on }} | {() => { setPicked(true); setLvl(b); }} | reviewed in batch 07 |
| [app/flashtypes.tsx:166](../../../ealch-v2/app/flashtypes.tsx#L166) | Press | "button" | {`${r.label}, ${empty ? T.ctSoon : T.ctCardsN.replace('{n}', String(r.count))}`} | {{ disabled: empty }} | { empty ? undefined : () => router.push({ pathname: '/flashcards', params: { domain: slug, ctype: r.ctype, ...(r.dir ? { dir: r.dir } : {}), ...(active ? { level: active } : {}), }, }) } | reviewed in batch 07 |
| [app/review.tsx:102](../../../ealch-v2/app/review.tsx#L102) | Press | "button" | {T.backFeed} | none | {() => router.replace('/home')} | reviewed in batch 07 |
| [app/review.tsx:130](../../../ealch-v2/app/review.tsx#L130) | Press | "button" | {T.backFeed} | none | {() => router.replace('/home')} | reviewed in batch 07 |
| [app/review.tsx:178](../../../ealch-v2/app/review.tsx#L178) | Press | "button" | {T.playAudioA11y} | none | {() => tts.speak(q.fr)} | reviewed in batch 07 |
| [app/review.tsx:188](../../../ealch-v2/app/review.tsx#L188) | Press | "button" | {T.srAgain} | none | {() => grade(false)} | reviewed in batch 07 |
| [app/review.tsx:193](../../../ealch-v2/app/review.tsx#L193) | Press | "button" | {T.srGot} | none | {() => grade(true)} | reviewed in batch 07 |
| [app/review.tsx:200](../../../ealch-v2/app/review.tsx#L200) | Press | "button" | {T.srReveal} | none | {reveal} | reviewed in batch 07 |
| [app/smartreview.tsx:104](../../../ealch-v2/app/smartreview.tsx#L104) | Press | "button" | {T.backFeed} | none | {() => router.replace('/home')} | reviewed in batch 07 |
| [app/smartreview.tsx:138](../../../ealch-v2/app/smartreview.tsx#L138) | Press | "button" | {T.startReview} | none | {() => router.push('/review')} | reviewed in batch 07 |
| [app/speak.tsx:423](../../../ealch-v2/app/speak.tsx#L423) | Press | "button" | {T.a11yClose} | none | {() => router.replace('/home')} | reviewed in batch 07 |
| [app/speak.tsx:512](../../../ealch-v2/app/speak.tsx#L512) | Press | "button" | {nextStage.world !== stage.world ? T.speakNextWorld.replace('{w}', WORLD_TITLES[nextStage.world] ?? '') : T.speakNextStation} | none | {() => { sound.play('tap'); router.setParams({ stage: nextStage.id }); }} | reviewed in batch 07 |
| [app/speak.tsx:528](../../../ealch-v2/app/speak.tsx#L528) | Press | "button" | {T.speakBackPlaylist} | none | {() => { sound.play('tap'); // navigate, not replace: the player is usually still under this // screen, and replace would stack a second copy of it. router.navigate(playerRouteFor(pl.id, 0)); }} | reviewed in batch 07 |
| [app/speak.tsx:543](../../../ealch-v2/app/speak.tsx#L543) | Press | "button" | {T.cont} | none | {() => startBlock(nextIx)} | reviewed in batch 07 |
| [app/speak.tsx:549](../../../ealch-v2/app/speak.tsx#L549) | Press | "button" | {`${T.end}, ${T.reportTag}`} | none | {endSession} | reviewed in batch 07 |
| [app/speak.tsx:557](../../../ealch-v2/app/speak.tsx#L557) | Press | "button" | {T.speakBackMap} | none | {() => router.replace('/speakmap')} | reviewed in batch 07 |
| [app/speak.tsx:583](../../../ealch-v2/app/speak.tsx#L583) | Press | "button" | {T.a11yClose} | none | {() => router.replace('/home')} | reviewed in batch 07 |
| [app/speak.tsx:599](../../../ealch-v2/app/speak.tsx#L599) | Press | "button" | {T.a11yOpenSettings} | none | {() => router.push('/settings')} | reviewed in batch 07 |
| [app/speak.tsx:632](../../../ealch-v2/app/speak.tsx#L632) | Press | "button" | {T.playAudioA11y} | none | {replayCoach} | reviewed in batch 07 |
| [app/speak.tsx:688](../../../ealch-v2/app/speak.tsx#L688) | Press | "button" | {`${w}, ${T.speakWordTap}`} | none | {() => setPracticeIx(i)} | reviewed in batch 07 |
| [app/speak.tsx:731](../../../ealch-v2/app/speak.tsx#L731) | Press | "button" | {T.speakRetry} | none | {micTap} | reviewed in batch 07 |
| [app/speak.tsx:738](../../../ealch-v2/app/speak.tsx#L738) | Press | "button" | {T.cont} | none | {nextCard} | reviewed in batch 07 |
| [app/speak.tsx:744](../../../ealch-v2/app/speak.tsx#L744) | Press | "button" | {T.speakSkip} | none | {nextCard} | reviewed in batch 07 |
| [app/speak.tsx:754](../../../ealch-v2/app/speak.tsx#L754) | Press | "button" | {`${T.end}, ${T.reportTag}`} | none | {endSession} | reviewed in batch 07 |
| [app/speak.tsx:763](../../../ealch-v2/app/speak.tsx#L763) | Press | "button" | {T.playAudioA11y} | none | {replayCoach} | reviewed in batch 07 |
| [app/speak.tsx:770](../../../ealch-v2/app/speak.tsx#L770) | Press | "button" | {listening ? T.a11yStopRecording : T.a11yStartRecording} | none | {micTap} | reviewed in batch 07 |
| [app/speak.tsx:784](../../../ealch-v2/app/speak.tsx#L784) | Press | "button" | {T.nextCard} | {{ disabled: !canAdvance }} | {() => { if (canAdvance) nextCard(); }} | reviewed in batch 07 |
| [app/speakmap.tsx:180](../../../ealch-v2/app/speakmap.tsx#L180) | Press | "button" | {s.title} | {{ disabled: locked }} | {() => (locked ? undefined : onOpen(s))} | reviewed in batch 07 |
| [app/voiceflash.tsx:357](../../../ealch-v2/app/voiceflash.tsx#L357) | Press | "button" | {T.backFeed} | none | {() => router.replace('/home')} | reviewed in batch 07 |
| [app/voiceflash.tsx:371](../../../ealch-v2/app/voiceflash.tsx#L371) | Press | "button" | {T.redo} | none | {restart} | reviewed in batch 07 |
| [app/voiceflash.tsx:381](../../../ealch-v2/app/voiceflash.tsx#L381) | Press | "button" | {T.backFeed} | none | {() => router.replace('/home')} | reviewed in batch 07 |
| [app/voiceflash.tsx:457](../../../ealch-v2/app/voiceflash.tsx#L457) | Press | "button" | {T.playAudioA11y} | none | {playPrompt} | reviewed in batch 07 |
| [app/voiceflash.tsx:572](../../../ealch-v2/app/voiceflash.tsx#L572) | Press | "button" | {T.vfMissed} | none | {() => vfSelf(false)} | reviewed in batch 07 |
| [app/voiceflash.tsx:591](../../../ealch-v2/app/voiceflash.tsx#L591) | Press | "button" | {T.vfGot} | none | {() => vfSelf(true)} | reviewed in batch 07 |
| [app/voiceflash.tsx:615](../../../ealch-v2/app/voiceflash.tsx#L615) | Press | "button" | {T.retry} | none | {retryItem} | reviewed in batch 07 |
| [app/voiceflash.tsx:634](../../../ealch-v2/app/voiceflash.tsx#L634) | Press | "button" | {T.nextCard} | none | {vfNext} | reviewed in batch 07 |
| [app/voiceflash.tsx:654](../../../ealch-v2/app/voiceflash.tsx#L654) | Press | "button" | {T.nextCard} | none | {vfNext} | reviewed in batch 07 |
| [app/voiceflash.tsx:680](../../../ealch-v2/app/voiceflash.tsx#L680) | Press | "button" | {listening ? T.a11yStopRecording : T.a11yStartRecording} | none | {vfMic} | reviewed in batch 07 |
| [app/voiceflash.tsx:725](../../../ealch-v2/app/voiceflash.tsx#L725) | Press | "button" | {T.checkT} | none | {vfCheck} | reviewed in batch 07 |
| [app/voicehub.tsx:65](../../../ealch-v2/app/voicehub.tsx#L65) | Press | "button" | {`${lang === 'fr' ? meta.fr : meta.en}, ${T.ctCardsN.replace('{n}', String(count))}`} | none | {() => router.push({ pathname: '/voicethemes', params: { domain: slug } })} | reviewed in batch 07 |
| [app/voices.tsx:122](../../../ealch-v2/app/voices.tsx#L122) | Press | "button" | {`${T.playAudioA11y}: ${r.name \|\| r.identifier}`} | {{ selected: on }} | {() => play(r.identifier)} | reviewed in batch 07 |
| [app/voicethemes.tsx:98](../../../ealch-v2/app/voicethemes.tsx#L98) | Press | "button" | {`${lang === 'fr' ? r.title : r.en}, ${T.ctCardsN.replace('{n}', String(r.count))}${!levelsAll && !(FREE_BANDS as readonly string[]).includes(r.lo) ? `, ${T.premLockTag}` : ''}`} | none | {() => router.push({ pathname: '/voiceflash', params: { theme: r.slug } })} | reviewed in batch 07 |

## Batch 08 (38 current sites)

| Site | Control | Role | Name source or visible content | State/value | Activation | Disposition |
|---|---|---|---|---|---|---|
| [app/chat.tsx:137](../../../ealch-v2/app/chat.tsx#L137) | Press | "button" | {T.a11yBack} | none | {() => router.replace('/home')} | reviewed in batch 08 |
| [app/chat.tsx:192](../../../ealch-v2/app/chat.tsx#L192) | Press | "button" | {T.coachCapCta} | none | {() => router.push({ pathname: '/paywall', params: { from: 'gate:coach' } })} | reviewed in batch 08 |
| [app/chat.tsx:222](../../../ealch-v2/app/chat.tsx#L222) | Press | "button" | {q.label} | {{ disabled: typing }} | {() => send(q.msg)} | reviewed in batch 08 |
| [app/chat.tsx:242](../../../ealch-v2/app/chat.tsx#L242) | Press | "button" | {listening ? T.a11yStopRecording : T.a11yStartRecording} | none | {micTap} | reviewed in batch 08 |
| [app/chat.tsx:249](../../../ealch-v2/app/chat.tsx#L249) | Press | "button" | {T.a11ySendMessage} | {{ disabled: !draft.trim() \|\| typing }} | {() => send(draft)} | reviewed in batch 08 |
| [app/dictation.tsx:301](../../../ealch-v2/app/dictation.tsx#L301) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.dcRedo} </TX> | none | {restart} | reviewed in batch 08 |
| [app/dictation.tsx:310](../../../ealch-v2/app/dictation.tsx#L310) | Press | "button" | <TX font="semi" role="bodySm" color={t.txMuted}> {T.dcHome} </TX> | none | {() => router.replace('/home')} | reviewed in batch 08 |
| [app/dictation.tsx:340](../../../ealch-v2/app/dictation.tsx#L340) | Press | "button" | {dcSpeaking ? T.dcPlaying : dcPlays > 0 ? T.dcPlay : T.dcNoPlays} | {{ disabled: dcSpeaking \|\| dcPlays <= 0 }} | {play} | reviewed in batch 08 |
| [app/dictation.tsx:489](../../../ealch-v2/app/dictation.tsx#L489) | Press | "button" | {T.a11yInsert.replace('{item}', ch)} | {{ disabled: dcPhase !== 'idle' }} | {() => addAccent(ch)} | reviewed in batch 08 |
| [app/dictation.tsx:516](../../../ealch-v2/app/dictation.tsx#L516) | Press | "button" | {btnLabel} | {{ disabled: !btnActive }} | {dcPhase === 'idle' ? check : advance} | reviewed in batch 08 |
| [app/dictationhub.tsx:100](../../../ealch-v2/app/dictationhub.tsx#L100) | Press | "button" | {`${lang === 'fr' ? meta.fr : meta.en}, ${T.ctDicteeN.replace('{n}', String(count))}`} | none | {() => router.push({ pathname: '/dictationthemes', params: { domain: slug } })} | reviewed in batch 08 |
| [app/dictationhub.tsx:128](../../../ealch-v2/app/dictationhub.tsx#L128) | Press | "button" | {`${isOn ? T.a11yStopPlayback : T.previewT}: ${lang === 'fr' ? meta.fr : meta.en}`} | none | {() => preview(slug, sample)} | reviewed in batch 08 |
| [app/dictationthemes.tsx:140](../../../ealch-v2/app/dictationthemes.tsx#L140) | Press | "button" | {`${isOn ? T.a11yStopPlayback : T.previewT}: ${lang === 'fr' ? r.title : r.en}`} | none | {() => preview(r.slug, r.sample, ix)} | reviewed in batch 08 |
| [app/dictationthemes.tsx:162](../../../ealch-v2/app/dictationthemes.tsx#L162) | Press | "button" | {`${lang === 'fr' ? r.title : r.en}, ${T.ctDicteeN.replace('{n}', String(r.count))}${!levelsAll && !(FREE_BANDS as readonly string[]).includes(r.lo) ? `, ${T.a11yLockedPaywall}` : ''}`} | none | {() => router.push({ pathname: '/dictation', params: { theme: r.slug } })} | reviewed in batch 08 |
| [app/roleplay.tsx:292](../../../ealch-v2/app/roleplay.tsx#L292) | Press | "radio" | {l} | {{ selected: on }} | {() => { sound.play('tap'); setLevel(l); }} | reviewed in batch 08 |
| [app/roleplay.tsx:325](../../../ealch-v2/app/roleplay.tsx#L325) | Press | "button" | {capLocked ? T.coachCapCta : T.startRp} | {{ disabled: !nTurns && !capLocked }} | {start} | reviewed in batch 08 |
| [app/roleplay.tsx:431](../../../ealch-v2/app/roleplay.tsx#L431) | Press | "button" | <TX font="semi" role="bodySm"> {T.redo} </TX> | none | {restart} | reviewed in batch 08 |
| [app/roleplay.tsx:436](../../../ealch-v2/app/roleplay.tsx#L436) | Press | "button" | <TX font="semi" role="bodySm" color={t.accInk}> {T.rpReport} </TX> | none | {() => router.push('/feedback')} | reviewed in batch 08 |
| [app/roleplay.tsx:442](../../../ealch-v2/app/roleplay.tsx#L442) | Press | "button" | <TX role="bodySm" color={t.txMuted}> {T.backFeed} </TX> | none | {() => router.replace('/home')} | reviewed in batch 08 |
| [app/roleplay.tsx:452](../../../ealch-v2/app/roleplay.tsx#L452) | Press | "button" | <TX font="semi" role="bodyLg" color={t.accInk}> {T.cont} </TX> | none | {continueTurn} | reviewed in batch 08 |
| [app/roleplay.tsx:478](../../../ealch-v2/app/roleplay.tsx#L478) | Press | "button" | {listening ? T.a11yStopRecording : T.a11yStartRecording} | none | {mic} | reviewed in batch 08 |
| [app/roleplayhub.tsx:55](../../../ealch-v2/app/roleplayhub.tsx#L55) | Press | "button" | {`${lang === 'fr' ? meta.fr : meta.en}, ${T.rpScenesN.replace('{n}', String(count))}`} | none | {() => router.push({ pathname: '/roleplay', params: { theme: slug } })} | reviewed in batch 08 |
| [app/sentence.tsx:331](../../../ealch-v2/app/sentence.tsx#L331) | Press | "button" | {label} | none | {onPress} | reviewed in batch 08 |
| [app/sentence.tsx:383](../../../ealch-v2/app/sentence.tsx#L383) | Press | "button" | {`${T.playAudioA11y}: ${w.w}`} | none | {() => playWord(i)} | reviewed in batch 08 |
| [app/sentence.tsx:386](../../../ealch-v2/app/sentence.tsx#L386) | Press | "button" | {w.w} | {{ expanded: openWord === i }} | {() => { sound.play('tap'); setOpenWord((o) => (o === i ? null : i)); }} | reviewed in batch 08 |
| [app/sentence.tsx:408](../../../ealch-v2/app/sentence.tsx#L408) | Press | "button" | {`${practiceW === i ? T.a11yStopRecording : T.repeatWord}: ${w.w}`} | none | {() => practiceWord(i)} | reviewed in batch 08 |
| [app/sentence.tsx:444](../../../ealch-v2/app/sentence.tsx#L444) | Press | "button" | {T.a11yRemoveWord.replace('{item}', arrangeTiles[i].w)} | none | {() => { sound.play('tap'); setPicked((p) => p.filter((_, xi) => xi !== ix)); }} | reviewed in batch 08 |
| [app/sentence.tsx:464](../../../ealch-v2/app/sentence.tsx#L464) | Press | "button" | {T.a11yAddWord.replace('{item}', arrangeTiles[i].w)} | none | {() => { sound.play('tap'); setPicked((p) => [...p, i]); }} | reviewed in batch 08 |
| [app/sentence.tsx:527](../../../ealch-v2/app/sentence.tsx#L527) | Press | "button" | {saying ? T.a11yStopRecording : T.a11yStartRecording} | none | {mic} | reviewed in batch 08 |
| [app/sentence.tsx:577](../../../ealch-v2/app/sentence.tsx#L577) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {deck.length > 1 ? T.sbNextSentence : T.redo} </TX> | none | {restart} | reviewed in batch 08 |
| [app/sentence.tsx:582](../../../ealch-v2/app/sentence.tsx#L582) | Press | "button" | <TX role="bodySm" color={t.txMuted}> {T.backFeed} </TX> | none | {() => router.replace('/home')} | reviewed in batch 08 |
| [app/sentencehub.tsx:75](../../../ealch-v2/app/sentencehub.tsx#L75) | Press | "button" | {`${lang === 'fr' ? meta.fr : meta.en}, ${T.ctPhrasesN.replace('{n}', String(count))}`} | none | {() => router.push({ pathname: '/sentencethemes', params: { domain: slug } })} | reviewed in batch 08 |
| [app/sentencethemes.tsx:104](../../../ealch-v2/app/sentencethemes.tsx#L104) | Press | "button" | {`${lang === 'fr' ? r.title : r.en}, ${T.ctPhrasesN.replace('{n}', String(r.count))}${!levelsAll && !(FREE_BANDS as readonly string[]).includes(r.lo) ? `, ${T.a11yLockedPaywall}` : ''}`} | none | {() => router.push({ pathname: '/sentence', params: { theme: r.slug } })} | reviewed in batch 08 |
| [app/theme.tsx:142](../../../ealch-v2/app/theme.tsx#L142) | Press | "button" | {`${T.stepNames[s.key]}${rightTag ? `, ${rightTag}` : ''}${bandLocked && tappable ? `, ${T.a11yLockedPaywall}` : ''}`} | {{ disabled: !tappable }} | {tappable ? () => router.push(stepRoute(s.drill, slug, band) as never) : undefined} | reviewed in batch 08 |
| [app/theme.tsx:93](../../../ealch-v2/app/theme.tsx#L93) | Press | "radio" | {levelLabel(l)} | {{ selected: on, disabled: !has }} | {has ? () => setBand(l) : undefined} | reviewed in batch 08 |
| [app/themes.tsx:124](../../../ealch-v2/app/themes.tsx#L124) | Press | "button" | {`${themeMeta(week.slug).fr}, ${T.themeContinue}`} | none | {() => openTheme(week.slug)} | reviewed in batch 08 |
| [app/themes.tsx:165](../../../ealch-v2/app/themes.tsx#L165) | Press | "button" | {`${meta.fr}, ${range}`} | none | {() => openTheme(th.slug)} | reviewed in batch 08 |
| [app/themes.tsx:97](../../../ealch-v2/app/themes.tsx#L97) | Press | "radio" | {l === undefined ? T.allLevels : levelLabel(l)} | {{ selected: on }} | {() => setBand(l)} | reviewed in batch 08 |

## Batch 09 (67 current sites)

| Site | Control | Role | Name source or visible content | State/value | Activation | Disposition |
|---|---|---|---|---|---|---|
| [app/downloads.tsx:143](../../../ealch-v2/app/downloads.tsx#L143) | Press | "button" | {checking ? T.updatingL : T.checkUpdates} | {{ disabled: checking }} | {check} | reviewed in batch 09 |
| [app/exam-paper.tsx:207](../../../ealch-v2/app/exam-paper.tsx#L207) | Press | "radio" | {title} | {{ selected: on }} | {() => setMode(m)} | reviewed in batch 09 |
| [app/exam-paper.tsx:234](../../../ealch-v2/app/exam-paper.tsx#L234) | Press | "button" | {T.examSitting} | {{ disabled: starting \|\| checking }} | {() => { const first = paper.sections[0]; if (first) openSection(first.skill); }} | reviewed in batch 09 |
| [app/exam-paper.tsx:257](../../../ealch-v2/app/exam-paper.tsx#L257) | Press | "button" | {T.examReport} | none | {() => router.push({ pathname: '/exam-report', params: { paperId } })} | reviewed in batch 09 |
| [app/exam-paper.tsx:285](../../../ealch-v2/app/exam-paper.tsx#L285) | Press | "button" | <TX font="semi" role="label" color={t.txSecondary}>{T.examStay}</TX> | none | {() => setWarn(null)} | reviewed in batch 09 |
| [app/exam-paper.tsx:293](../../../ealch-v2/app/exam-paper.tsx#L293) | Press | "button" | <TX font="semi" role="label" color={t.accInk}>{T.examAudioStartAnyway}</TX> | none | {() => { const s = warn.skill; setWarn(null); void go(s); }} | reviewed in batch 09 |
| [app/exam-paper.tsx:318](../../../ealch-v2/app/exam-paper.tsx#L318) | Press | "button" | <TX font="semi" role="label" color={t.txSecondary}>{T.examStay}</TX> | none | {() => setStartErr(null)} | reviewed in batch 09 |
| [app/exam-paper.tsx:375](../../../ealch-v2/app/exam-paper.tsx#L375) | Press | "button" | {`${T.examSkillNames[section.skill]}, ${statusLabel}`} | none | {onPress} | reviewed in batch 09 |
| [app/exam-report.tsx:281](../../../ealch-v2/app/exam-report.tsx#L281) | Press | "button" | {T.examReviewLesson} | none | {() => router.push({ pathname: '/lesson', params: { id: d.prepLessonId! } })} | reviewed in batch 09 |
| [app/exam-report.tsx:403](../../../ealch-v2/app/exam-report.tsx#L403) | Press | "button" | {open ? T.examHideModel : T.examShowModel} | {{ expanded: open }} | {() => setOpen((v) => !v)} | reviewed in batch 09 |
| [app/exam-section.tsx:643](../../../ealch-v2/app/exam-section.tsx#L643) | Press | "button" | <TX font="semi" role="label" color={t.txSecondary}>{T.examStay}</TX> | none | {() => setConfirming(false)} | reviewed in batch 09 |
| [app/exam-section.tsx:649](../../../ealch-v2/app/exam-section.tsx#L649) | Press | "button" | <TX font="semi" role="label" color={t.accInk}>{T.examSubmit}</TX> | none | {submit} | reviewed in batch 09 |
| [app/exam-section.tsx:659](../../../ealch-v2/app/exam-section.tsx#L659) | Press | "button" | {phase === 'submitting' ? T.examGrading : T.examSubmit} | {{ disabled: phase !== 'answering' }} | {() => setConfirming(true)} | reviewed in batch 09 |
| [app/exam-section.tsx:895](../../../ealch-v2/app/exam-section.tsx#L895) | Press | "radio" | {opt} | {{ selected: on, disabled: !editable }} | {() => onSelect(oIx)} | reviewed in batch 09 |
| [app/exam.tsx:194](../../../ealch-v2/app/exam.tsx#L194) | Press | "button" | {`${label}, ${T.examPaperTitle} ${paper.paperNo}`} | none | {onPress} | reviewed in batch 09 |
| [app/narrated.tsx:243](../../../ealch-v2/app/narrated.tsx#L243) | Press | "button" | <TX font="semi" role="bodyLg" color={t.accInk}>{T.backToDen}</TX> | none | {exit} | reviewed in batch 09 |
| [app/narrated.tsx:320](../../../ealch-v2/app/narrated.tsx#L320) | Press | "button" | {listening ? T.a11yStopRecording : T.a11yStartRecording} | none | {mic} | reviewed in batch 09 |
| [app/narrated.tsx:334](../../../ealch-v2/app/narrated.tsx#L334) | Press | "button" | <TX role="bodySm" color={t.txMuted}>{T.narrSkip}</TX> | none | {skip} | reviewed in batch 09 |
| [app/onboarding.tsx:240](../../../ealch-v2/app/onboarding.tsx#L240) | Press | "button" | {T.a11yBack} | none | {back} | reviewed in batch 09 |
| [app/onboarding.tsx:270](../../../ealch-v2/app/onboarding.tsx#L270) | Button | button via shared Button | {T.createAccount} | none | {next} | reviewed in batch 09 |
| [app/onboarding.tsx:271](../../../ealch-v2/app/onboarding.tsx#L271) | Press | "button" | <TX role="bodySm" color={t.txMuted}> {T.alreadyAccount} <TX font="semi" role="bodySm" color={t.accTx}>{T.signInLink}</TX> </TX> | none | {() => router.push('/signin')} | reviewed in batch 09 |
| [app/onboarding.tsx:293](../../../ealch-v2/app/onboarding.tsx#L293) | Button | button via shared Button | {T.continueT} | {acctPending} | {submitAccount} | reviewed in batch 09 |
| [app/onboarding.tsx:296](../../../ealch-v2/app/onboarding.tsx#L296) | Press | "button" | <TX font="semi" role="bodySm" color={t.accTx}> {T.continueGuest} </TX> | none | {continueAsGuest} | reviewed in batch 09 |
| [app/onboarding.tsx:310](../../../ealch-v2/app/onboarding.tsx#L310) | Button | button via shared Button | {T.withApple} | none | {next} | reviewed in batch 09 |
| [app/onboarding.tsx:311](../../../ealch-v2/app/onboarding.tsx#L311) | Button | button via shared Button | {T.withGoogle} | none | {next} | reviewed in batch 09 |
| [app/onboarding.tsx:334](../../../ealch-v2/app/onboarding.tsx#L334) | Button | button via shared Button | {T.continueT} | none | {submitName} | reviewed in batch 09 |
| [app/onboarding.tsx:335](../../../ealch-v2/app/onboarding.tsx#L335) | Press | "button" | <TX font="semi" role="bodySm" color={t.txMuted}> {T.skipT} </TX> | none | {skipName} | reviewed in batch 09 |
| [app/onboarding.tsx:357](../../../ealch-v2/app/onboarding.tsx#L357) | Press | "radio" | {a.n} | {{ selected: on }} | {() => s.setAccent(a.c)} | reviewed in batch 09 |
| [app/onboarding.tsx:372](../../../ealch-v2/app/onboarding.tsx#L372) | Press | "radio" | {label} | {{ selected: on }} | {() => s.setMode(m)} | reviewed in batch 09 |
| [app/onboarding.tsx:390](../../../ealch-v2/app/onboarding.tsx#L390) | Press | "radio" | {lg.name} | {{ selected: on, disabled: soon }} | {soon ? undefined : () => s.setAppLang(lg.id)} | reviewed in batch 09 |
| [app/onboarding.tsx:403](../../../ealch-v2/app/onboarding.tsx#L403) | Button | button via shared Button | {T.continueT} | none | {next} | reviewed in batch 09 |
| [app/onboarding.tsx:413](../../../ealch-v2/app/onboarding.tsx#L413) | Button | button via shared Button | {T.continueT} | none | {next} | reviewed in batch 09 |
| [app/onboarding.tsx:423](../../../ealch-v2/app/onboarding.tsx#L423) | Button | button via shared Button | {T.continueT} | none | {next} | reviewed in batch 09 |
| [app/onboarding.tsx:438](../../../ealch-v2/app/onboarding.tsx#L438) | Press | "radio" | {`${p.v}, ${T.paceSubs[i] ?? p.s}`} | {{ selected: on }} | {() => s.setField('pace', p.id)} | reviewed in batch 09 |
| [app/onboarding.tsx:44](../../../ealch-v2/app/onboarding.tsx#L44) | Press | "radio" | {title} | {{ selected: active }} | {onPress} | reviewed in batch 09 |
| [app/onboarding.tsx:453](../../../ealch-v2/app/onboarding.tsx#L453) | Button | button via shared Button | {T.continueT} | none | {next} | reviewed in batch 09 |
| [app/onboarding.tsx:463](../../../ealch-v2/app/onboarding.tsx#L463) | Button | button via shared Button | {T.continueT} | none | {next} | reviewed in batch 09 |
| [app/onboarding.tsx:484](../../../ealch-v2/app/onboarding.tsx#L484) | Press | "radio" | {`${formatTime(c.time, s.clock24)}, ${T.alarmChips[i] ?? c.label}`} | {{ selected: on }} | {() => s.setAlarm(c.time)} | reviewed in batch 09 |
| [app/onboarding.tsx:500](../../../ealch-v2/app/onboarding.tsx#L500) | Press | "button" | {`${T.customTime}, ${formatTime(s.alarmTime, s.clock24)}`} | {{ expanded: showWheel }} | {() => setShowWheel((v) => !v)} | reviewed in batch 09 |
| [app/onboarding.tsx:533](../../../ealch-v2/app/onboarding.tsx#L533) | Button | button via shared Button | {T.enableReminders} | none | {() => void enableReminders()} | reviewed in batch 09 |
| [app/onboarding.tsx:582](../../../ealch-v2/app/onboarding.tsx#L582) | Press | "button" | {calib === 'rec' ? T.a11yStopRecording : T.a11yStartRecording} | none | {() => void doCalib()} | reviewed in batch 09 |
| [app/onboarding.tsx:596](../../../ealch-v2/app/onboarding.tsx#L596) | Button | button via shared Button | {calib === 'done' ? T.continueT : T.skipT} | none | {() => setStep(10)} | reviewed in batch 09 |
| [app/onboarding.tsx:619](../../../ealch-v2/app/onboarding.tsx#L619) | Press | "radio" | {a.name} | {{ selected: on }} | {() => s.setAvatarId(a.id)} | reviewed in batch 09 |
| [app/onboarding.tsx:642](../../../ealch-v2/app/onboarding.tsx#L642) | Button | button via shared Button | {T.continueT} | none | {next} | reviewed in batch 09 |
| [app/onboarding.tsx:661](../../../ealch-v2/app/onboarding.tsx#L661) | Button | button via shared Button | {T.enterEalch} | none | {finish} | reviewed in batch 09 |
| [app/placement.tsx:169](../../../ealch-v2/app/placement.tsx#L169) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.backFeed} </TX> | none | {() => (router.canGoBack() ? router.back() : router.replace('/den'))} | reviewed in batch 09 |
| [app/placement.tsx:194](../../../ealch-v2/app/placement.tsx#L194) | Press | "button" | {T.a11yPlayItem.replace('{item}', q.item.fr)} | none | {() => tts.speak(q.item.fr)} | reviewed in batch 09 |
| [app/placement.tsx:212](../../../ealch-v2/app/placement.tsx#L212) | Press | "radio" | {o} | {{ selected: picked, disabled: revealed }} | {() => pick(i)} | reviewed in batch 09 |
| [app/placement.tsx:228](../../../ealch-v2/app/placement.tsx#L228) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.cont} </TX> | none | {advance} | reviewed in batch 09 |
| [app/placement.tsx:275](../../../ealch-v2/app/placement.tsx#L275) | Press | "button" | <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}> <Icon name="star" size={15} color={t.accTx} /> </View> <View style={{ flex: 1 }}> <TX font="semi" role="bodySm">{T.placePwT} | none | {() => router.push({ pathname: '/paywall', params: { from: 'placement' } })} | reviewed in batch 09 |
| [app/placement.tsx:294](../../../ealch-v2/app/placement.tsx#L294) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.plStartCta} </TX> | none | {begin} | reviewed in batch 09 |
| [app/placement.tsx:299](../../../ealch-v2/app/placement.tsx#L299) | Press | "button" | <TX font="semi" role="bodySm" color={t.txMuted}> {T.plRetake} </TX> | none | {redo} | reviewed in batch 09 |
| [app/player.tsx:287](../../../ealch-v2/app/player.tsx#L287) | Press | "button" | {T.a11yPreviousPhrase} | {{ disabled: ix === 0 }} | {() => go(ix - 1)} | reviewed in batch 09 |
| [app/player.tsx:290](../../../ealch-v2/app/player.tsx#L290) | Press | "button" | {playing ? T.a11yPause : T.a11yPlay} | none | {togglePlay} | reviewed in batch 09 |
| [app/player.tsx:293](../../../ealch-v2/app/player.tsx#L293) | Press | "button" | {T.a11yNextPhrase} | {{ disabled: ix >= total - 1 }} | {() => go(ix + 1)} | reviewed in batch 09 |
| [app/player.tsx:301](../../../ealch-v2/app/player.tsx#L301) | Press | "button" | {T.restart} | none | {restart} | reviewed in batch 09 |
| [app/player.tsx:315](../../../ealch-v2/app/player.tsx#L315) | Press | "button" | {T.practice} | none | {practiceOutLoud} | reviewed in batch 09 |
| [app/playlists.tsx:40](../../../ealch-v2/app/playlists.tsx#L40) | Press | "button" | {`${lang === 'fr' ? p.labelFr : p.labelEn}, ${p.tracks.length} ${T.tracksWord}`} | none | {() => router.push(playerRouteFor(p.id, 0))} | reviewed in batch 09 |
| [app/playlists.tsx:67](../../../ealch-v2/app/playlists.tsx#L67) | Press | "button" | {`${tk.title}, ${T.a11yPlay}`} | none | {() => router.push(playerRouteFor(p.id, i))} | reviewed in batch 09 |
| [app/preroll.tsx:110](../../../ealch-v2/app/preroll.tsx#L110) | Press | "button" | {T.prerollStart} | none | {start} | reviewed in batch 09 |
| [src/components/ExamAudioPart.tsx:261](../../../ealch-v2/src/components/ExamAudioPart.tsx#L261) | Press | "button" | {T.examReplay} | none | {play} | reviewed in batch 09 |
| [src/components/ExamAudioPart.tsx:270](../../../ealch-v2/src/components/ExamAudioPart.tsx#L270) | Press | "button" | {transcriptOpen ? T.a11yHideTranscript : T.a11yShowTranscript} | {{ expanded: transcriptOpen }} | {() => setTranscriptOpen((v) => !v)} | reviewed in batch 09 |
| [src/components/ExamClock.tsx:116](../../../ealch-v2/src/components/ExamClock.tsx#L116) | Press | "button" | { paused ? lang === 'fr' ? 'Reprendre le chronomètre' : 'Resume the clock' : lang === 'fr' ? 'Mettre le chronomètre en pause' : 'Pause the clock' } | none | {() => onChange(paused ? resumeClock(clock, Date.now()) : pauseClock(clock, Date.now()))} | reviewed in batch 09 |
| [src/components/ExamDebateTask.tsx:309](../../../ealch-v2/src/components/ExamDebateTask.tsx#L309) | Press | "button" | {T.examStartDebate} | {!editable} | {startPrep} | reviewed in batch 09 |
| [src/components/ExamInterlocutorTask.tsx:294](../../../ealch-v2/src/components/ExamInterlocutorTask.tsx#L294) | Press | "button" | <TX font="semi" role="label" color={t.accInk}> {task.prepS ? T.examStartPrep : T.examStartInteraction} </TX> | {!editable} | {startPrep} | reviewed in batch 09 |
| [src/components/ExamSpeakTask.tsx:211](../../../ealch-v2/src/components/ExamSpeakTask.tsx#L211) | Press | "button" | <TX font="semi" role="label" color={t.accInk}> {task.prepS ? T.examStartPrep : T.examStartRecording} </TX> | {!editable} | {startPrep} | reviewed in batch 09 |
| [src/components/ExamSpeakTask.tsx:243](../../../ealch-v2/src/components/ExamSpeakTask.tsx#L243) | Press | "button" | <TX font="semi" role="label" color={t.txSecondary}>{T.examStopRecording}</TX> | none | {() => void stopRecogniser()} | reviewed in batch 09 |

## Custom action wrapper call sites

These JSX call sites pass an action to a named component whose underlying semantic control is classified in its owning batch. They are listed separately so the source scan includes actions that do not spell `Press`, `Pressable`, `Button`, or tappable `Text` at the call site.

| Site | Wrapper | Semantic control | Activation | Disposition |
|---|---|---|---|---|
| [app/den.tsx:269](../../../ealch-v2/app/den.tsx#L269) | LevelChip | role/name/state via LevelChip internal control | {() => router.push('/levels')} | reviewed in batch 01 |
| [app/exam-paper.tsx:330](../../../ealch-v2/app/exam-paper.tsx#L330) | SectionRow | role/name/state via SectionRow internal control | {() => openSection(section.skill)} | reviewed in batch 09 |
| [app/exam.tsx:123](../../../ealch-v2/app/exam.tsx#L123) | PaperRow | role/name/state via PaperRow internal control | {() => examPaperAllowed({ gateOn: cfg.examGateOn, entitled, freePapers: cfg.examFreePapers, paperNo: p.paperNo, }).allowed ? router.push({ pathname: '/exam-paper', params: { paperId: p.id } }) : (track('gate_blocked', { feature: 'examiner', from: 'exam' }), ro | reviewed in batch 09 |
| [app/home.tsx:460](../../../ealch-v2/app/home.tsx#L460) | GlowTile | role/name/state via GlowTile internal control | {() => router.push({ pathname: '/levels', params: { from: 'home' } })} | reviewed in batch 01 |
| [app/home.tsx:476](../../../ealch-v2/app/home.tsx#L476) | GlowTile | role/name/state via GlowTile internal control | {() => router.push(d.route as never)} | reviewed in batch 01 |
| [app/home.tsx:547](../../../ealch-v2/app/home.tsx#L547) | SectionHead | role/name/state via SectionHead internal control | {() => router.push('/playlists')} | reviewed in batch 01 |
| [app/lesson.tsx:754](../../../ealch-v2/app/lesson.tsx#L754) | LanguageChip | role/name/state via LanguageChip internal control | {() => setLangPanelOpen(true)} | reviewed in batch 02 |
| [app/lesson.tsx:759](../../../ealch-v2/app/lesson.tsx#L759) | SheetLink | role/name/state via SheetLink internal control | {() => setSheetId('')} | reviewed in batch 02 |
| [app/onboarding.tsx:411](../../../ealch-v2/app/onboarding.tsx#L411) | SelectRow | role/name/state via SelectRow internal control | {() => s.setField('goal', g.id)} | reviewed in batch 09 |
| [app/onboarding.tsx:421](../../../ealch-v2/app/onboarding.tsx#L421) | SelectRow | role/name/state via SelectRow internal control | {() => s.setField('exp', x.id)} | reviewed in batch 09 |
| [app/onboarding.tsx:461](../../../ealch-v2/app/onboarding.tsx#L461) | SelectRow | role/name/state via SelectRow internal control | {() => s.setRegion(a.id)} | reviewed in batch 09 |
| [src/components/LanguagePanel.tsx:179](../../../ealch-v2/src/components/LanguagePanel.tsx#L179) | PanelRow | role/name/state via PanelRow internal control | {() => onSelect(r.key)} | reviewed in batch 02 |
| [src/components/LessonPager.tsx:787](../../../ealch-v2/src/components/LessonPager.tsx#L787) | ListenChip | role/name/state via ListenChip internal control | {listen} | reviewed in batch 02 |
| [src/components/LevelPanel.tsx:234](../../../ealch-v2/src/components/LevelPanel.tsx#L234) | PanelRow | role/name/state via PanelRow internal control | {() => onRowPress(l)} | reviewed in batch 01 |
| [src/components/MissionRich.tsx:272](../../../ealch-v2/src/components/MissionRich.tsx#L272) | SoundCell | role/name/state via SoundCell internal control | {() => setSel(snd)} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:369](../../../ealch-v2/src/components/MissionRich.tsx#L369) | OptRow | role/name/state via OptRow internal control | {() => { if (picked >= 0) return; // answered once; the verdict is the point sound.play(i === q.correct ? 'success' : 'error'); setPicked(i); onAnswered?.(); }} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:830](../../../ealch-v2/src/components/MissionRich.tsx#L830) | OptRow | role/name/state via OptRow internal control | {() => onPick(oi)} | reviewed in batch 03 |
| [src/components/MissionRich.tsx:2126](../../../ealch-v2/src/components/MissionRich.tsx#L2126) | OptRow | role/name/state via OptRow internal control | {() => { sound.play(oi === q.correct ? 'success' : 'error'); setAnswers((a) => ({ ...a, [qi]: oi })); }} | reviewed in batch 03 |
| [src/components/MissionSection.tsx:201](../../../ealch-v2/src/components/MissionSection.tsx#L201) | InhibitionMicRow | role/name/state via InhibitionMicRow internal control | {() => setMicTarget(i)} | reviewed in batch 03 |
| [src/components/WordCardXL.tsx:169](../../../ealch-v2/src/components/WordCardXL.tsx#L169) | PlayButton | role/name/state via PlayButton internal control | {onPlay} | reviewed in batch 03 |
