# Plan 08 practice-route action audit

This source inventory includes every shared Press, direct Pressable, Button, and tappable Text site in the eleven assigned routes. Each row was checked against its activation handler. The listed names and states reflect the updated code; Android TalkBack traversal remains in Plan 10.

The two dictation previews and sentence word actions are separate focus stops. Recording, playback, send, filters, and locked deck names match their current outcomes. Authored French learning content and network/microphone handlers were preserved.

| Site | Control | Role | Name source or visible content | State/value | Activation |
|---|---|---|---|---|---|
| [dictation.tsx:301](../../../ealch-v2/app/dictation.tsx#L301) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.dcRedo} </TX> | none | {restart} |
| [dictation.tsx:310](../../../ealch-v2/app/dictation.tsx#L310) | Press | "button" | <TX font="semi" role="bodySm" color={t.txMuted}> {T.dcHome} </TX> | none | {() => router.replace('/home')} |
| [dictation.tsx:340](../../../ealch-v2/app/dictation.tsx#L340) | Press | "button" | {dcSpeaking ? T.dcPlaying : dcPlays > 0 ? T.dcPlay : T.dcNoPlays} | {{ disabled: dcSpeaking \|\| dcPlays <= 0 }} | {play} |
| [dictation.tsx:489](../../../ealch-v2/app/dictation.tsx#L489) | Press | "button" | {T.a11yInsert.replace('{item}', ch)} | {{ disabled: dcPhase !== 'idle' }} | {() => addAccent(ch)} |
| [dictation.tsx:516](../../../ealch-v2/app/dictation.tsx#L516) | Press | "button" | {btnLabel} | {{ disabled: !btnActive }} | {dcPhase === 'idle' ? check : advance} |
| [dictationhub.tsx:100](../../../ealch-v2/app/dictationhub.tsx#L100) | Press | "button" | {`${lang === 'fr' ? meta.fr : meta.en}, ${T.ctDicteeN.replace('{n}', String(count))}`} | none | {() => router.push({ pathname: '/dictationthemes', params: { domain: slug } })} |
| [dictationhub.tsx:128](../../../ealch-v2/app/dictationhub.tsx#L128) | Press | "button" | {`${isOn ? T.a11yStopPlayback : T.previewT}: ${lang === 'fr' ? meta.fr : meta.en}`} | none | {() => preview(slug, sample)} |
| [dictationthemes.tsx:140](../../../ealch-v2/app/dictationthemes.tsx#L140) | Press | "button" | {`${isOn ? T.a11yStopPlayback : T.previewT}: ${lang === 'fr' ? r.title : r.en}`} | none | {() => preview(r.slug, r.sample, ix)} |
| [dictationthemes.tsx:162](../../../ealch-v2/app/dictationthemes.tsx#L162) | Press | "button" | {`${lang === 'fr' ? r.title : r.en}, ${T.ctDicteeN.replace('{n}', String(r.count))}${!levelsAll && !(FREE_BANDS as readonly string[]).includes(r.lo) ? `, ${T.a11yLockedPaywall}` : ''}`} | none | {() => router.push({ pathname: '/dictation', params: { theme: r.slug } })} |
| [sentence.tsx:331](../../../ealch-v2/app/sentence.tsx#L331) | Press | "button" | {label} | none | {onPress} |
| [sentence.tsx:383](../../../ealch-v2/app/sentence.tsx#L383) | Press | "button" | {`${T.playAudioA11y}: ${w.w}`} | none | {() => playWord(i)} |
| [sentence.tsx:386](../../../ealch-v2/app/sentence.tsx#L386) | Press | "button" | {w.w} | {{ expanded: openWord === i }} | {() => {                           sound.play('tap');                           setOpenWord((o) => (o === i ? null : i));                         }} |
| [sentence.tsx:408](../../../ealch-v2/app/sentence.tsx#L408) | Press | "button" | {`${practiceW === i ? T.a11yStopRecording : T.repeatWord}: ${w.w}`} | none | {() => practiceWord(i)} |
| [sentence.tsx:444](../../../ealch-v2/app/sentence.tsx#L444) | Press | "button" | {T.a11yRemoveWord.replace('{item}', arrangeTiles[i].w)} | none | {() => {                     sound.play('tap');                     setPicked((p) => p.filter((_, xi) => xi !== ix));                   }} |
| [sentence.tsx:464](../../../ealch-v2/app/sentence.tsx#L464) | Press | "button" | {T.a11yAddWord.replace('{item}', arrangeTiles[i].w)} | none | {() => {                       sound.play('tap');                       setPicked((p) => [...p, i]);                     }} |
| [sentence.tsx:527](../../../ealch-v2/app/sentence.tsx#L527) | Press | "button" | {saying ? T.a11yStopRecording : T.a11yStartRecording} | none | {mic} |
| [sentence.tsx:577](../../../ealch-v2/app/sentence.tsx#L577) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {deck.length > 1 ? T.sbNextSentence : T.redo} </TX> | none | {restart} |
| [sentence.tsx:582](../../../ealch-v2/app/sentence.tsx#L582) | Press | "button" | <TX role="bodySm" color={t.txMuted}> {T.backFeed} </TX> | none | {() => router.replace('/home')} |
| [sentencehub.tsx:75](../../../ealch-v2/app/sentencehub.tsx#L75) | Press | "button" | {`${lang === 'fr' ? meta.fr : meta.en}, ${T.ctPhrasesN.replace('{n}', String(count))}`} | none | {() => router.push({ pathname: '/sentencethemes', params: { domain: slug } })} |
| [sentencethemes.tsx:104](../../../ealch-v2/app/sentencethemes.tsx#L104) | Press | "button" | {`${lang === 'fr' ? r.title : r.en}, ${T.ctPhrasesN.replace('{n}', String(r.count))}${!levelsAll && !(FREE_BANDS as readonly string[]).includes(r.lo) ? `, ${T.a11yLockedPaywall}` : ''}`} | none | {() => router.push({ pathname: '/sentence', params: { theme: r.slug } })} |
| [roleplay.tsx:292](../../../ealch-v2/app/roleplay.tsx#L292) | Press | "radio" | {l} | {{ selected: on }} | {() => {                     sound.play('tap');                     setLevel(l);                   }} |
| [roleplay.tsx:325](../../../ealch-v2/app/roleplay.tsx#L325) | Press | "button" | {capLocked ? T.coachCapCta : T.startRp} | {{ disabled: !nTurns && !capLocked }} | {start} |
| [roleplay.tsx:431](../../../ealch-v2/app/roleplay.tsx#L431) | Press | "button" | <TX font="semi" role="bodySm"> {T.redo} </TX> | none | {restart} |
| [roleplay.tsx:436](../../../ealch-v2/app/roleplay.tsx#L436) | Press | "button" | <TX font="semi" role="bodySm" color={t.accInk}> {T.rpReport} </TX> | none | {() => router.push('/feedback')} |
| [roleplay.tsx:442](../../../ealch-v2/app/roleplay.tsx#L442) | Press | "button" | <TX role="bodySm" color={t.txMuted}> {T.backFeed} </TX> | none | {() => router.replace('/home')} |
| [roleplay.tsx:452](../../../ealch-v2/app/roleplay.tsx#L452) | Press | "button" | <TX font="semi" role="bodyLg" color={t.accInk}> {T.cont} </TX> | none | {continueTurn} |
| [roleplay.tsx:478](../../../ealch-v2/app/roleplay.tsx#L478) | Press | "button" | {listening ? T.a11yStopRecording : T.a11yStartRecording} | none | {mic} |
| [roleplayhub.tsx:55](../../../ealch-v2/app/roleplayhub.tsx#L55) | Press | "button" | {`${lang === 'fr' ? meta.fr : meta.en}, ${T.rpScenesN.replace('{n}', String(count))}`} | none | {() => router.push({ pathname: '/roleplay', params: { theme: slug } })} |
| [chat.tsx:137](../../../ealch-v2/app/chat.tsx#L137) | Press | "button" | {T.a11yBack} | none | {() => router.replace('/home')} |
| [chat.tsx:192](../../../ealch-v2/app/chat.tsx#L192) | Press | "button" | {T.coachCapCta} | none | {() => router.push({ pathname: '/paywall', params: { from: 'gate:coach' } })} |
| [chat.tsx:222](../../../ealch-v2/app/chat.tsx#L222) | Press | "button" | {q.label} | {{ disabled: typing }} | {() => send(q.msg)} |
| [chat.tsx:242](../../../ealch-v2/app/chat.tsx#L242) | Press | "button" | {listening ? T.a11yStopRecording : T.a11yStartRecording} | none | {micTap} |
| [chat.tsx:249](../../../ealch-v2/app/chat.tsx#L249) | Press | "button" | {T.a11ySendMessage} | {{ disabled: !draft.trim() \|\| typing }} | {() => send(draft)} |
| [theme.tsx:93](../../../ealch-v2/app/theme.tsx#L93) | Press | "radio" | {levelLabel(l)} | {{ selected: on, disabled: !has }} | {has ? () => setBand(l) : undefined} |
| [theme.tsx:142](../../../ealch-v2/app/theme.tsx#L142) | Press | "button" | {`${T.stepNames[s.key]}${rightTag ? `, ${rightTag}` : ''}${bandLocked && tappable ? `, ${T.a11yLockedPaywall}` : ''}`} | {{ disabled: !tappable }} | {tappable ? () => router.push(stepRoute(s.drill, slug, band) as never) : undefined} |
| [themes.tsx:97](../../../ealch-v2/app/themes.tsx#L97) | Press | "radio" | {l === undefined ? T.allLevels : levelLabel(l)} | {{ selected: on }} | {() => setBand(l)} |
| [themes.tsx:124](../../../ealch-v2/app/themes.tsx#L124) | Press | "button" | {`${themeMeta(week.slug).fr}, ${T.themeContinue}`} | none | {() => openTheme(week.slug)} |
| [themes.tsx:165](../../../ealch-v2/app/themes.tsx#L165) | Press | "button" | {`${meta.fr}, ${range}`} | none | {() => openTheme(th.slug)} |
