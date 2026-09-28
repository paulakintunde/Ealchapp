# Plan 07 practice-route action audit

This inventory was regenerated from every shared `Press`, direct `Pressable`, `Button`, and tappable `Text` site in the eleven assigned routes. Roles, names, state, and handlers below reflect the updated source. Each row was checked against its actual activation path; Android TalkBack traversal remains in Plan 10.

The level filter in `flashtypes` is a selected radio choice. `voiceflash` and `speak` microphone labels change between localized Start recording and Stop recording as the listening state changes. Icon-only playback, Close, Settings, and Next controls have localized labels. Scoring, routing, and purchase handlers were preserved.

| Site | Control | Role | Name source or visible content | State/value | Activation | Status |
|---|---|---|---|---|---|---|
| [flashhub.tsx:76](../../../ealch-v2/app/flashhub.tsx#L76) | Press | "button" | {`${lang === 'fr' ? meta.fr : meta.en}, ${T.ctCardsN.replace('{n}', String(count))}`} | none | {() => router.push({ pathname: '/flashthemes', params: { domain: slug } })} | Reviewed; device pending |
| [flashthemes.tsx:96](../../../ealch-v2/app/flashthemes.tsx#L96) | Press | "button" | {T.byTypeT} | none | {() => router.push({ pathname: '/flashtypes', params: { domain: slug } })} | Reviewed; device pending |
| [flashthemes.tsx:121](../../../ealch-v2/app/flashthemes.tsx#L121) | Press | "button" | {`${lang === 'fr' ? r.title : r.en}, ${T.ctCardsN.replace('{n}', String(r.count))}${!levelsAll && !(FREE_BANDS as readonly string[]).includes(r.lo) ? `, ${T.pre | none | {() => router.push({ pathname: '/flashcards', params: { domain: slug, theme: r.slug } })} | Reviewed; device pending |
| [flashtypes.tsx:132](../../../ealch-v2/app/flashtypes.tsx#L132) | Press | "radio" | {b === null ? T.lvlAll : b.toUpperCase()} | {{ selected: on }} | {() => { setPicked(true); setLvl(b); }} | Reviewed; device pending |
| [flashtypes.tsx:166](../../../ealch-v2/app/flashtypes.tsx#L166) | Press | "button" | {`${r.label}, ${empty ? T.ctSoon : T.ctCardsN.replace('{n}', String(r.count))}`} | {{ disabled: empty }} | {                   empty                     ? undefined                     : () =>                         router.push({                           pathname:  | Reviewed; device pending |
| [voiceflash.tsx:357](../../../ealch-v2/app/voiceflash.tsx#L357) | Press | "button" | {T.backFeed} | none | {() => router.replace('/home')} | Reviewed; device pending |
| [voiceflash.tsx:371](../../../ealch-v2/app/voiceflash.tsx#L371) | Press | "button" | {T.redo} | none | {restart} | Reviewed; device pending |
| [voiceflash.tsx:381](../../../ealch-v2/app/voiceflash.tsx#L381) | Press | "button" | {T.backFeed} | none | {() => router.replace('/home')} | Reviewed; device pending |
| [voiceflash.tsx:457](../../../ealch-v2/app/voiceflash.tsx#L457) | Press | "button" | {T.playAudioA11y} | none | {playPrompt} | Reviewed; device pending |
| [voiceflash.tsx:572](../../../ealch-v2/app/voiceflash.tsx#L572) | Press | "button" | {T.vfMissed} | none | {() => vfSelf(false)} | Reviewed; device pending |
| [voiceflash.tsx:591](../../../ealch-v2/app/voiceflash.tsx#L591) | Press | "button" | {T.vfGot} | none | {() => vfSelf(true)} | Reviewed; device pending |
| [voiceflash.tsx:615](../../../ealch-v2/app/voiceflash.tsx#L615) | Press | "button" | {T.retry} | none | {retryItem} | Reviewed; device pending |
| [voiceflash.tsx:634](../../../ealch-v2/app/voiceflash.tsx#L634) | Press | "button" | {T.nextCard} | none | {vfNext} | Reviewed; device pending |
| [voiceflash.tsx:654](../../../ealch-v2/app/voiceflash.tsx#L654) | Press | "button" | {T.nextCard} | none | {vfNext} | Reviewed; device pending |
| [voiceflash.tsx:680](../../../ealch-v2/app/voiceflash.tsx#L680) | Press | "button" | {listening ? T.a11yStopRecording : T.a11yStartRecording} | none | {vfMic} | Reviewed; device pending |
| [voiceflash.tsx:725](../../../ealch-v2/app/voiceflash.tsx#L725) | Press | "button" | {T.checkT} | none | {vfCheck} | Reviewed; device pending |
| [voicehub.tsx:65](../../../ealch-v2/app/voicehub.tsx#L65) | Press | "button" | {`${lang === 'fr' ? meta.fr : meta.en}, ${T.ctCardsN.replace('{n}', String(count))}`} | none | {() => router.push({ pathname: '/voicethemes', params: { domain: slug } })} | Reviewed; device pending |
| [voices.tsx:120](../../../ealch-v2/app/voices.tsx#L120) | Press | "button" | {`${T.playAudioA11y}: ${r.name \|\| r.identifier}`} | {{ selected: on }} | {() => play(r.identifier)} | Reviewed; device pending |
| [voicethemes.tsx:98](../../../ealch-v2/app/voicethemes.tsx#L98) | Press | "button" | {`${lang === 'fr' ? r.title : r.en}, ${T.ctCardsN.replace('{n}', String(r.count))}${!levelsAll && !(FREE_BANDS as readonly string[]).includes(r.lo) ? `, ${T.pre | none | {() => router.push({ pathname: '/voiceflash', params: { theme: r.slug } })} | Reviewed; device pending |
| [speak.tsx:423](../../../ealch-v2/app/speak.tsx#L423) | Press | "button" | {T.a11yClose} | none | {() => router.replace('/home')} | Reviewed; device pending |
| [speak.tsx:512](../../../ealch-v2/app/speak.tsx#L512) | Press | "button" | {nextStage.world !== stage.world ? T.speakNextWorld.replace('{w}', WORLD_TITLES[nextStage.world] ?? '') : T.speakNextStation} | none | {() => {                 sound.play('tap');                 router.setParams({ stage: nextStage.id });               }} | Reviewed; device pending |
| [speak.tsx:528](../../../ealch-v2/app/speak.tsx#L528) | Press | "button" | {T.speakBackPlaylist} | none | {() => {                 sound.play('tap');                 // navigate, not replace: the player is usually still under this                 // screen, and repl | Reviewed; device pending |
| [speak.tsx:543](../../../ealch-v2/app/speak.tsx#L543) | Press | "button" | {T.cont} | none | {() => startBlock(nextIx)} | Reviewed; device pending |
| [speak.tsx:549](../../../ealch-v2/app/speak.tsx#L549) | Press | "button" | {`${T.end}, ${T.reportTag}`} | none | {endSession} | Reviewed; device pending |
| [speak.tsx:557](../../../ealch-v2/app/speak.tsx#L557) | Press | "button" | {T.speakBackMap} | none | {() => router.replace('/speakmap')} | Reviewed; device pending |
| [speak.tsx:583](../../../ealch-v2/app/speak.tsx#L583) | Press | "button" | {T.a11yClose} | none | {() => router.replace('/home')} | Reviewed; device pending |
| [speak.tsx:599](../../../ealch-v2/app/speak.tsx#L599) | Press | "button" | {T.a11yOpenSettings} | none | {() => router.push('/settings')} | Reviewed; device pending |
| [speak.tsx:632](../../../ealch-v2/app/speak.tsx#L632) | Press | "button" | {T.playAudioA11y} | none | {replayCoach} | Reviewed; device pending |
| [speak.tsx:688](../../../ealch-v2/app/speak.tsx#L688) | Press | "button" | {`${w}, ${T.speakWordTap}`} | none | {() => setPracticeIx(i)} | Reviewed; device pending |
| [speak.tsx:731](../../../ealch-v2/app/speak.tsx#L731) | Press | "button" | {T.speakRetry} | none | {micTap} | Reviewed; device pending |
| [speak.tsx:738](../../../ealch-v2/app/speak.tsx#L738) | Press | "button" | {T.cont} | none | {nextCard} | Reviewed; device pending |
| [speak.tsx:744](../../../ealch-v2/app/speak.tsx#L744) | Press | "button" | {T.speakSkip} | none | {nextCard} | Reviewed; device pending |
| [speak.tsx:754](../../../ealch-v2/app/speak.tsx#L754) | Press | "button" | {`${T.end}, ${T.reportTag}`} | none | {endSession} | Reviewed; device pending |
| [speak.tsx:763](../../../ealch-v2/app/speak.tsx#L763) | Press | "button" | {T.playAudioA11y} | none | {replayCoach} | Reviewed; device pending |
| [speak.tsx:770](../../../ealch-v2/app/speak.tsx#L770) | Press | "button" | {listening ? T.a11yStopRecording : T.a11yStartRecording} | none | {micTap} | Reviewed; device pending |
| [speak.tsx:784](../../../ealch-v2/app/speak.tsx#L784) | Press | "button" | {T.nextCard} | {{ disabled: !canAdvance }} | {() => {             if (canAdvance) nextCard();           }} | Reviewed; device pending |
| [speakmap.tsx:180](../../../ealch-v2/app/speakmap.tsx#L180) | Press | "button" | {s.title} | {{ disabled: locked }} | {() => (locked ? undefined : onOpen(s))} | Reviewed; device pending |
| [smartreview.tsx:104](../../../ealch-v2/app/smartreview.tsx#L104) | Press | "button" | {T.backFeed} | none | {() => router.replace('/home')} | Reviewed; device pending |
| [smartreview.tsx:138](../../../ealch-v2/app/smartreview.tsx#L138) | Press | "button" | {T.startReview} | none | {() => router.push('/review')} | Reviewed; device pending |
| [review.tsx:102](../../../ealch-v2/app/review.tsx#L102) | Press | "button" | {T.backFeed} | none | {() => router.replace('/home')} | Reviewed; device pending |
| [review.tsx:130](../../../ealch-v2/app/review.tsx#L130) | Press | "button" | {T.backFeed} | none | {() => router.replace('/home')} | Reviewed; device pending |
| [review.tsx:178](../../../ealch-v2/app/review.tsx#L178) | Press | "button" | {T.playAudioA11y} | none | {() => tts.speak(q.fr)} | Reviewed; device pending |
| [review.tsx:188](../../../ealch-v2/app/review.tsx#L188) | Press | "button" | {T.srAgain} | none | {() => grade(false)} | Reviewed; device pending |
| [review.tsx:193](../../../ealch-v2/app/review.tsx#L193) | Press | "button" | {T.srGot} | none | {() => grade(true)} | Reviewed; device pending |
| [review.tsx:200](../../../ealch-v2/app/review.tsx#L200) | Press | "button" | {T.srReveal} | none | {reveal} | Reviewed; device pending |
