# Phase 8 Plan 04 settings and paywall audit

This table inventories every shared Press, direct Pressable, Button, and tappable text in the assigned settings, paywall, profile, account, feedback, and component files. The activation expression identifies the resulting route or handler at each site. On settings and profile choices, setAppLang/setLang, setRegion, setMode, setAccent, setAvatarId, and setAlarm save the selected preference; their selected radio state matches the visible choice. The paywall plan row selects a plan using the displayed live or fallback price, while buy and restore still call their existing billing functions. Legal link activation opens the configured external URL. No entitlement is set by these accessibility changes.

The paywall title is the first heading focus target in the standard, examiner, and already subscribed states. A locked trail row opens the standard paywall through its gate route; focus should land on that title. Benefits, plan choices, buy/restore, and legal links then follow source order. If purchases are unavailable, Return to the free path navigates to Den while the header Back remains reachable. Plan 10 verifies native TalkBack traversal and route entry. The unavailable copy continues to state that nothing was charged.

The ErrorScreen direct Pressable is an explicitly named Retry button. A licence credit without a URL is disabled text; credit and legal links with URLs retain link roles. The PushBanner is removed from accessibility traversal while hidden and announces its masthead and message as one action while shown.
| Site | Control | Role | Name source or visible content | State/value | Activation |
|---|---|---|---|---|---|
| [settings.tsx:183](../../../ealch-v2/app/settings.tsx#L183) | Press | "button" | <LinearGradient colors={[t.accA(16), 'transparent']} start={{ x: 0.9, y: 0 }} end={{ x: 0.3, y: 0.7 }} style={{ position: 'absolut | none | {() => router.push({ pathname: '/paywall', params: { from: 'settings' } })} |
| [settings.tsx:242](../../../ealch-v2/app/settings.tsx#L242) | Press | "button" | <Icon name="restart" size={18} color={t.acc} /> <View style={{ flex: 1 }}> <TX font="semi" role="body"> {T.restoreT} </TX> {restor | {restoring} | {() => void doRestore()} |
| [settings.tsx:273](../../../ealch-v2/app/settings.tsx#L273) | Press | "button" | <Icon name="download" size={18} color={t.acc} /> <View style={{ flex: 1 }}> <TX font="semi" role="body"> {T.downloadsT} </TX> <TX  | none | {() => router.push('/downloads')} |
| [settings.tsx:309](../../../ealch-v2/app/settings.tsx#L309) | Press | "radio" | {`${lg.ch}${soon ? `, ${T.soonT}` : ''}`} | {{ selected: on, disabled: soon }} | {soon ? undefined : () => setAppLang(lg.id)} |
| [settings.tsx:343](../../../ealch-v2/app/settings.tsx#L343) | Press | "radio" | <TX role="bodySm" color={on ? t.accTx : t.txSecondary}> {a.name} </TX> | {{ selected: on }} | {() => setRegion(a.id)} |
| [settings.tsx:373](../../../ealch-v2/app/settings.tsx#L373) | Press | "radio" | {m === 'dark' ? T.modeDark : T.modeLight} | {{ selected: on }} | {() => setMode(m)} |
| [settings.tsx:399](../../../ealch-v2/app/settings.tsx#L399) | Press | "radio" | {th.n} | {{ selected: on }} | {() => setAccent(th.c)} |
| [settings.tsx:424](../../../ealch-v2/app/settings.tsx#L424) | Press | "radio" | {a.name} | {{ selected: on }} | {() => setAvatarId(a.id)} |
| [settings.tsx:472](../../../ealch-v2/app/settings.tsx#L472) | Press | "button" | {`${T.a11yChangeAlarm}, ${formatTime(alarmTime, clock24)}`} | {{ expanded: showWheel }} | {() => setShowWheel((v) => !v)} |
| [settings.tsx:503](../../../ealch-v2/app/settings.tsx#L503) | Press | "radio" | <TX font="semi" role="label" color={on ? t.accTx : t.txSecondary}> {formatTime(chip.time, clock24)} </TX> | {{ selected: on }} | {() => setAlarm(chip.time)} |
| [settings.tsx:525](../../../ealch-v2/app/settings.tsx#L525) | Press | "button" | <TX font="semi" role="label" color={t.accTx}> {T.testAlarm} </TX> | none | {testAlarm} |
| [settings.tsx:566](../../../ealch-v2/app/settings.tsx#L566) | Press | "button" | {T.licT} | none | {() => router.push('/licences')} |
| [settings.tsx:601](../../../ealch-v2/app/settings.tsx#L601) | Press | "button" | {T.delAccount} | none | {() => router.push('/delete-account')} |
| [paywall.tsx:213](../../../ealch-v2/app/paywall.tsx#L213) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.pwExamGotIt} </TX> | none | {() => router.back()} |
| [paywall.tsx:246](../../../ealch-v2/app/paywall.tsx#L246) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.cont} </TX> | none | {() => router.back()} |
| [paywall.tsx:299](../../../ealch-v2/app/paywall.tsx#L299) | Press | "radio" | {`${row.label}, ${row.price}, ${row.sub}`} | {{ selected: on }} | {() => pick(row.id)} |
| [paywall.tsx:356](../../../ealch-v2/app/paywall.tsx#L356) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {userId ? T.pwCta : T.pwCtaGuest} </TX> | {busy} | {() => void buy()} |
| [paywall.tsx:374](../../../ealch-v2/app/paywall.tsx#L374) | Press | "button" | <TX font="semi" role="label" color={t.accTx}>{T.pwReturnFree}</TX> | none | {() => router.replace('/den')} |
| [paywall.tsx:380](../../../ealch-v2/app/paywall.tsx#L380) | Press | "button" | <TX role="label" color={t.txSubtle}> {T.restoreT} </TX> | {busy} | {() => void restore()} |
| [paywall.tsx:407](../../../ealch-v2/app/paywall.tsx#L407) | Press | "radio" | <TX font={on ? 'semi' : 'sans'} role="label" color={on ? t.accTx : t.txMuted}> {c} </TX> | {{ selected: on }} | {() => setCurrency(c)} |
| [paywall.tsx:448](../../../ealch-v2/app/paywall.tsx#L448) | TX | "link" | {T.legalTerms} | none | {() => { Linking.openURL(LEGAL.termsUrl).catch(() => {}); }} |
| [paywall.tsx:458](../../../ealch-v2/app/paywall.tsx#L458) | TX | "link" | {T.legalPrivacy} | none | {() => { Linking.openURL(LEGAL.privacyUrl).catch(() => {}); }} |
| [profile.tsx:256](../../../ealch-v2/app/profile.tsx#L256) | Press | "button" | {T.a11ySaveName} | none | {saveName} |
| [profile.tsx:261](../../../ealch-v2/app/profile.tsx#L261) | Press | "button" | {`${T.a11yEditName}, ${userName \|\| T.guestName}`} | none | {startEditName} |
| [profile.tsx:290](../../../ealch-v2/app/profile.tsx#L290) | Press | "radio" | <TX font="semi" role="meta" ls={1} color={on ? t.accInk : t.txMuted}> {l.toUpperCase()} </TX> | {{ selected: on }} | {() => setLang(l)} |
| [profile.tsx:298](../../../ealch-v2/app/profile.tsx#L298) | Press | "button" | {T.a11yOpenSettings} | none | {() => router.push('/settings')} |
| [profile.tsx:429](../../../ealch-v2/app/profile.tsx#L429) | Press | "button" | <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center | none | {d.open} |
| [profile.tsx:473](../../../ealch-v2/app/profile.tsx#L473) | Press | "radio" | <TX role="bodySm" color={on ? t.accTx : t.txSecondary}> {a.name} </TX> | {{ selected: on }} | {() => setRegion(a.id)} |
| [profile.tsx:526](../../../ealch-v2/app/profile.tsx#L526) | Press | "button" | <Icon name="gear" size={18} color={t.acc} /> <TX font="semi" role="body" style={{ flex: 1 }}> {T.settingsT} </TX> <Icon name="chev | none | {() => router.push('/settings')} |
| [profile.tsx:550](../../../ealch-v2/app/profile.tsx#L550) | Press | "button" | <TX font="semi" role="body" color={t.tag('danger').c}> {T.signOut} </TX> | none | {() => {             void auth.signOut();             signOut();             router.replace('/onboarding');           }} |
| [signin.tsx:133](../../../ealch-v2/app/signin.tsx#L133) | Press | "button" | <TX role="label" color={reset === 'sent' ? t.accTx : t.txSubtle}> {reset === 'sent' ? T.resetSent : T.forgotPw} </TX> | {reset === 'pending'} | {doReset} |
| [signin.tsx:141](../../../ealch-v2/app/signin.tsx#L141) | Button | Button primitive | {T.signInBtn} | {pending} | {doSignIn} |
| [signin.tsx:151](../../../ealch-v2/app/signin.tsx#L151) | Button | Button primitive | {T.withApple} | none | {() => oauth('apple')} |
| [signin.tsx:152](../../../ealch-v2/app/signin.tsx#L152) | Button | Button primitive | {T.withGoogle} | none | {() => oauth('google')} |
| [signin.tsx:155](../../../ealch-v2/app/signin.tsx#L155) | Press | "button" | <TX role="bodySm" color={t.txMuted}> {T.newHere} <TX font="semi" role="bodySm" color={t.accTx}>{T.createAccount}</TX> </TX> | none | {() => router.replace('/onboarding')} |
| [reset.tsx:137](../../../ealch-v2/app/reset.tsx#L137) | Button | Button primitive | {T.backToSignIn} | none | {() => router.replace('/signin')} |
| [reset.tsx:155](../../../ealch-v2/app/reset.tsx#L155) | Button | Button primitive | {T.setNewPw} | {pending \|\| !checked \|\| !tokens} | {submit} |
| [reset.tsx:161](../../../ealch-v2/app/reset.tsx#L161) | Press | "button" | <TX role="bodySm" color={t.txMuted}> {T.backToSignIn} </TX> | none | {() => router.replace('/signin')} |
| [delete-account.tsx:175](../../../ealch-v2/app/delete-account.tsx#L175) | Press | "button" | {isGuest ? T.delBtnGuest : T.delBtn} | {{ disabled: !armed \|\| pending }} | {submit} |
| [delete-account.tsx:199](../../../ealch-v2/app/delete-account.tsx#L199) | Button | Button primitive | {T.delCancel} | none | {() => router.back()} |
| [licences.tsx:39](../../../ealch-v2/app/licences.tsx#L39) | Press | {c.url ? 'link' : 'text'} | {`${c.name}. ${c.note}`} | {!c.url} | {() => open(c.url)} |
| [licences.tsx:69](../../../ealch-v2/app/licences.tsx#L69) | Press | "link" | {label} | none | {() => open(url)} |
| [feedback.tsx:142](../../../ealch-v2/app/feedback.tsx#L142) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.backFeed} </TX> | none | {() => router.replace('/home')} |
| [feedback.tsx:226](../../../ealch-v2/app/feedback.tsx#L226) | Press | "button" | {inner} | none | {() => {                           const parsed = parseAnchor(anchor);                           if (parsed) router.push({ pathname: '/lesson', params: { key: p |
| [feedback.tsx:257](../../../ealch-v2/app/feedback.tsx#L257) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.practiceWeak} </TX> | none | {() => router.push('/voiceflash')} |
| [AuthFields.tsx:78](../../../ealch-v2/src/components/AuthFields.tsx#L78) | Press | "button" | {shown ? T.pwHide : T.pwShow} | none | {() => setShown((v) => !v)} |
| [AuthFields.tsx:112](../../../ealch-v2/src/components/AuthFields.tsx#L112) | TX | "link" | {label} | none | {() => open(url)} |
| [PushBanner.tsx:98](../../../ealch-v2/src/components/PushBanner.tsx#L98) | Press | "button" | {`${masthead}. ${bodyText}`} | none | {onBannerPress} |
| [ErrorScreen.tsx:85](../../../ealch-v2/src/components/ErrorScreen.tsx#L85) | Pressable | "button" | {copy.retry} | none | {retry} |
