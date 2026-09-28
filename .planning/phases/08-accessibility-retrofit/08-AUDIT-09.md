# Plan 09 exam, entry, and media action audit

This inventory records every shared Press, direct Pressable, Button, and tappable Text site in the 16 assigned routes and components. Each row was checked against its actual activation handler. The role, name source, and state columns reflect the updated source. Android TalkBack traversal remains in Plan 10.

The SelectRow helper in onboarding supplies a selected radio for goal, experience, and region choices; its three call sites are listed after the generated table. The exam paper SectionRow helper supplies each section action. The shared FocusHeader, SpeedPicker, ClockToggle, and TimeWheel controls were audited in earlier Phase 8 plans. Existing exam attempt, scoring, clock, media, and download services were preserved.

| Site | Control | Role | Name source or visible content | State/value | Activation |
|---|---|---|---|---|---|
| [downloads.tsx:143](../../../ealch-v2/app/downloads.tsx#L143) | Press | "button" | {checking ? T.updatingL : T.checkUpdates} | {{ disabled: checking }} | {check} |
| [exam.tsx:194](../../../ealch-v2/app/exam.tsx#L194) | Press | "button" | {`${label}, ${T.examPaperTitle} ${paper.paperNo}`} | none | {onPress} |
| [exam-paper.tsx:207](../../../ealch-v2/app/exam-paper.tsx#L207) | Press | "radio" | {title} | {{ selected: on }} | {() => setMode(m)} |
| [exam-paper.tsx:234](../../../ealch-v2/app/exam-paper.tsx#L234) | Press | "button" | {T.examSitting} | {{ disabled: starting \|\| checking }} | {() => {             const first = paper.sections[0];             if (first) openSection(first.skill);           }} |
| [exam-paper.tsx:257](../../../ealch-v2/app/exam-paper.tsx#L257) | Press | "button" | {T.examReport} | none | {() => router.push({ pathname: '/exam-report', params: { paperId } })} |
| [exam-paper.tsx:285](../../../ealch-v2/app/exam-paper.tsx#L285) | Press | "button" | <TX font="semi" role="label" color={t.txSecondary}>{T.examStay}</TX> | none | {() => setWarn(null)} |
| [exam-paper.tsx:293](../../../ealch-v2/app/exam-paper.tsx#L293) | Press | "button" | <TX font="semi" role="label" color={t.accInk}>{T.examAudioStartAnyway}</TX> | none | {() => { const s = warn.skill; setWarn(null); void go(s); }} |
| [exam-paper.tsx:318](../../../ealch-v2/app/exam-paper.tsx#L318) | Press | "button" | <TX font="semi" role="label" color={t.txSecondary}>{T.examStay}</TX> | none | {() => setStartErr(null)} |
| [exam-paper.tsx:375](../../../ealch-v2/app/exam-paper.tsx#L375) | Press | "button" | {`${T.examSkillNames[section.skill]}, ${statusLabel}`} | none | {onPress} |
| [exam-report.tsx:281](../../../ealch-v2/app/exam-report.tsx#L281) | Press | "button" | {T.examReviewLesson} | none | {() => router.push({ pathname: '/lesson', params: { id: d.prepLessonId! } })} |
| [exam-report.tsx:403](../../../ealch-v2/app/exam-report.tsx#L403) | Press | "button" | {open ? T.examHideModel : T.examShowModel} | {{ expanded: open }} | {() => setOpen((v) => !v)} |
| [exam-section.tsx:643](../../../ealch-v2/app/exam-section.tsx#L643) | Press | "button" | <TX font="semi" role="label" color={t.txSecondary}>{T.examStay}</TX> | none | {() => setConfirming(false)} |
| [exam-section.tsx:649](../../../ealch-v2/app/exam-section.tsx#L649) | Press | "button" | <TX font="semi" role="label" color={t.accInk}>{T.examSubmit}</TX> | none | {submit} |
| [exam-section.tsx:659](../../../ealch-v2/app/exam-section.tsx#L659) | Press | "button" | {phase === 'submitting' ? T.examGrading : T.examSubmit} | {{ disabled: phase !== 'answering' }} | {() => setConfirming(true)} |
| [exam-section.tsx:895](../../../ealch-v2/app/exam-section.tsx#L895) | Press | "radio" | {opt} | {{ selected: on, disabled: !editable }} | {() => onSelect(oIx)} |
| [narrated.tsx:243](../../../ealch-v2/app/narrated.tsx#L243) | Press | "button" | <TX font="semi" role="bodyLg" color={t.accInk}>{T.backToDen}</TX> | none | {exit} |
| [narrated.tsx:320](../../../ealch-v2/app/narrated.tsx#L320) | Press | "button" | {listening ? T.a11yStopRecording : T.a11yStartRecording} | none | {mic} |
| [narrated.tsx:334](../../../ealch-v2/app/narrated.tsx#L334) | Press | "button" | <TX role="bodySm" color={t.txMuted}>{T.narrSkip}</TX> | none | {skip} |
| [onboarding.tsx:44](../../../ealch-v2/app/onboarding.tsx#L44) | Press | "radio" | {title} | {{ selected: active }} | {onPress} |
| [onboarding.tsx:240](../../../ealch-v2/app/onboarding.tsx#L240) | Press | "button" | {T.a11yBack} | none | {back} |
| [onboarding.tsx:270](../../../ealch-v2/app/onboarding.tsx#L270) | Button | Button primitive | {T.createAccount} | none | {next} |
| [onboarding.tsx:271](../../../ealch-v2/app/onboarding.tsx#L271) | Press | "button" | <TX role="bodySm" color={t.txMuted}> {T.alreadyAccount} <TX font="semi" role="bodySm" color={t.accTx}>{T.signInLink}</TX> </TX> | none | {() => router.push('/signin')} |
| [onboarding.tsx:293](../../../ealch-v2/app/onboarding.tsx#L293) | Button | Button primitive | {T.continueT} | {acctPending} | {submitAccount} |
| [onboarding.tsx:296](../../../ealch-v2/app/onboarding.tsx#L296) | Press | "button" | <TX font="semi" role="bodySm" color={t.accTx}> {T.continueGuest} </TX> | none | {continueAsGuest} |
| [onboarding.tsx:310](../../../ealch-v2/app/onboarding.tsx#L310) | Button | Button primitive | {T.withApple} | none | {next} |
| [onboarding.tsx:311](../../../ealch-v2/app/onboarding.tsx#L311) | Button | Button primitive | {T.withGoogle} | none | {next} |
| [onboarding.tsx:334](../../../ealch-v2/app/onboarding.tsx#L334) | Button | Button primitive | {T.continueT} | none | {submitName} |
| [onboarding.tsx:335](../../../ealch-v2/app/onboarding.tsx#L335) | Press | "button" | <TX font="semi" role="bodySm" color={t.txMuted}> {T.skipT} </TX> | none | {skipName} |
| [onboarding.tsx:357](../../../ealch-v2/app/onboarding.tsx#L357) | Press | "radio" | {a.n} | {{ selected: on }} | {() => s.setAccent(a.c)} |
| [onboarding.tsx:372](../../../ealch-v2/app/onboarding.tsx#L372) | Press | "radio" | {label} | {{ selected: on }} | {() => s.setMode(m)} |
| [onboarding.tsx:390](../../../ealch-v2/app/onboarding.tsx#L390) | Press | "radio" | {lg.name} | {{ selected: on, disabled: soon }} | {soon ? undefined : () => s.setAppLang(lg.id)} |
| [onboarding.tsx:403](../../../ealch-v2/app/onboarding.tsx#L403) | Button | Button primitive | {T.continueT} | none | {next} |
| [onboarding.tsx:413](../../../ealch-v2/app/onboarding.tsx#L413) | Button | Button primitive | {T.continueT} | none | {next} |
| [onboarding.tsx:423](../../../ealch-v2/app/onboarding.tsx#L423) | Button | Button primitive | {T.continueT} | none | {next} |
| [onboarding.tsx:438](../../../ealch-v2/app/onboarding.tsx#L438) | Press | "radio" | {`${p.v}, ${T.paceSubs[i] ?? p.s}`} | {{ selected: on }} | {() => s.setField('pace', p.id)} |
| [onboarding.tsx:453](../../../ealch-v2/app/onboarding.tsx#L453) | Button | Button primitive | {T.continueT} | none | {next} |
| [onboarding.tsx:463](../../../ealch-v2/app/onboarding.tsx#L463) | Button | Button primitive | {T.continueT} | none | {next} |
| [onboarding.tsx:484](../../../ealch-v2/app/onboarding.tsx#L484) | Press | "radio" | {`${formatTime(c.time, s.clock24)}, ${T.alarmChips[i] ?? c.label}`} | {{ selected: on }} | {() => s.setAlarm(c.time)} |
| [onboarding.tsx:500](../../../ealch-v2/app/onboarding.tsx#L500) | Press | "button" | {`${T.customTime}, ${formatTime(s.alarmTime, s.clock24)}`} | {{ expanded: showWheel }} | {() => setShowWheel((v) => !v)} |
| [onboarding.tsx:533](../../../ealch-v2/app/onboarding.tsx#L533) | Button | Button primitive | {T.enableReminders} | none | {() => void enableReminders()} |
| [onboarding.tsx:582](../../../ealch-v2/app/onboarding.tsx#L582) | Press | "button" | {calib === 'rec' ? T.a11yStopRecording : T.a11yStartRecording} | none | {() => void doCalib()} |
| [onboarding.tsx:596](../../../ealch-v2/app/onboarding.tsx#L596) | Button | Button primitive | {calib === 'done' ? T.continueT : T.skipT} | none | {() => setStep(10)} |
| [onboarding.tsx:619](../../../ealch-v2/app/onboarding.tsx#L619) | Press | "radio" | {a.name} | {{ selected: on }} | {() => s.setAvatarId(a.id)} |
| [onboarding.tsx:642](../../../ealch-v2/app/onboarding.tsx#L642) | Button | Button primitive | {T.continueT} | none | {next} |
| [onboarding.tsx:661](../../../ealch-v2/app/onboarding.tsx#L661) | Button | Button primitive | {T.enterEalch} | none | {finish} |
| [placement.tsx:169](../../../ealch-v2/app/placement.tsx#L169) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.backFeed} </TX> | none | {() => (router.canGoBack() ? router.back() : router.replace('/den'))} |
| [placement.tsx:194](../../../ealch-v2/app/placement.tsx#L194) | Press | "button" | {T.a11yPlayItem.replace('{item}', q.item.fr)} | none | {() => tts.speak(q.item.fr)} |
| [placement.tsx:212](../../../ealch-v2/app/placement.tsx#L212) | Press | "radio" | {o} | {{ selected: picked, disabled: revealed }} | {() => pick(i)} |
| [placement.tsx:228](../../../ealch-v2/app/placement.tsx#L228) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.cont} </TX> | none | {advance} |
| [placement.tsx:275](../../../ealch-v2/app/placement.tsx#L275) | Press | "button" | <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center | none | {() => router.push({ pathname: '/paywall', params: { from: 'placement' } })} |
| [placement.tsx:294](../../../ealch-v2/app/placement.tsx#L294) | Press | "button" | <TX font="semi" role="body" color={t.accInk}> {T.plStartCta} </TX> | none | {begin} |
| [placement.tsx:299](../../../ealch-v2/app/placement.tsx#L299) | Press | "button" | <TX font="semi" role="bodySm" color={t.txMuted}> {T.plRetake} </TX> | none | {redo} |
| [player.tsx:287](../../../ealch-v2/app/player.tsx#L287) | Press | "button" | {T.a11yPreviousPhrase} | {{ disabled: ix === 0 }} | {() => go(ix - 1)} |
| [player.tsx:290](../../../ealch-v2/app/player.tsx#L290) | Press | "button" | {playing ? T.a11yPause : T.a11yPlay} | none | {togglePlay} |
| [player.tsx:293](../../../ealch-v2/app/player.tsx#L293) | Press | "button" | {T.a11yNextPhrase} | {{ disabled: ix >= total - 1 }} | {() => go(ix + 1)} |
| [player.tsx:301](../../../ealch-v2/app/player.tsx#L301) | Press | "button" | {T.restart} | none | {restart} |
| [player.tsx:315](../../../ealch-v2/app/player.tsx#L315) | Press | "button" | {T.practice} | none | {practiceOutLoud} |
| [playlists.tsx:40](../../../ealch-v2/app/playlists.tsx#L40) | Press | "button" | {`${lang === 'fr' ? p.labelFr : p.labelEn}, ${p.tracks.length} ${T.tracksWord}`} | none | {() => router.push(playerRouteFor(p.id, 0))} |
| [playlists.tsx:67](../../../ealch-v2/app/playlists.tsx#L67) | Press | "button" | {`${tk.title}, ${T.a11yPlay}`} | none | {() => router.push(playerRouteFor(p.id, i))} |
| [preroll.tsx:110](../../../ealch-v2/app/preroll.tsx#L110) | Press | "button" | {T.prerollStart} | none | {start} |
| [ExamAudioPart.tsx:261](../../../ealch-v2/src/components/ExamAudioPart.tsx#L261) | Press | "button" | {T.examReplay} | none | {play} |
| [ExamAudioPart.tsx:270](../../../ealch-v2/src/components/ExamAudioPart.tsx#L270) | Press | "button" | {transcriptOpen ? T.a11yHideTranscript : T.a11yShowTranscript} | {{ expanded: transcriptOpen }} | {() => setTranscriptOpen((v) => !v)} |
| [ExamClock.tsx:116](../../../ealch-v2/src/components/ExamClock.tsx#L116) | Press | "button" | {             paused               ? lang === 'fr' ? 'Reprendre le chronomètre' : 'Resume the clock'               : lang === 'fr' ? 'Mettre le chronomètre en pause' : 'Pause the clock'           } | none | {() => onChange(paused ? resumeClock(clock, Date.now()) : pauseClock(clock, Date.now()))} |
| [ExamDebateTask.tsx:309](../../../ealch-v2/src/components/ExamDebateTask.tsx#L309) | Press | "button" | {T.examStartDebate} | {!editable} | {startPrep} |
| [ExamInterlocutorTask.tsx:294](../../../ealch-v2/src/components/ExamInterlocutorTask.tsx#L294) | Press | "button" | <TX font="semi" role="label" color={t.accInk}> {task.prepS ? T.examStartPrep : T.examStartInteraction} </TX> | {!editable} | {startPrep} |
| [ExamSpeakTask.tsx:211](../../../ealch-v2/src/components/ExamSpeakTask.tsx#L211) | Press | "button" | <TX font="semi" role="label" color={t.accInk}> {task.prepS ? T.examStartPrep : T.examStartRecording} </TX> | {!editable} | {startPrep} |
| [ExamSpeakTask.tsx:243](../../../ealch-v2/src/components/ExamSpeakTask.tsx#L243) | Press | "button" | <TX font="semi" role="label" color={t.txSecondary}>{T.examStopRecording}</TX> | none | {() => void stopRecogniser()} |
| [onboarding.tsx:411](../../../ealch-v2/app/onboarding.tsx#L411) | SelectRow | radio | goal title | selected when current goal | set goal |
| [onboarding.tsx:421](../../../ealch-v2/app/onboarding.tsx#L421) | SelectRow | radio | localized experience title | selected when current experience | set experience |
| [onboarding.tsx:461](../../../ealch-v2/app/onboarding.tsx#L461) | SelectRow | radio | region name | selected when current region | set region |
| [exam-paper.tsx:330](../../../ealch-v2/app/exam-paper.tsx#L330) | SectionRow | button | exam skill name and section status | none | open section |
